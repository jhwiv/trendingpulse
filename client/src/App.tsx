import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/not-found";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Onboarding } from "@/components/onboarding";
import { PwaInstallPrompt } from "@/components/pwa-install";
import { useState, useEffect, useCallback } from "react";
import { apiRequest } from "@/lib/queryClient";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Register service worker
function useServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // SW registration failed silently — OK in dev
      });
    }
  }, []);
}

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showOnboarding, setShowOnboarding] = useState(false);

  useServiceWorker();

  // Check if onboarding is needed
  const { data: prefs, isLoading: prefsLoading } = useQuery({
    queryKey: ["/api/preferences"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/preferences");
      return res.json();
    },
  });

  useEffect(() => {
    if (!prefsLoading) {
      if (!prefs || prefs.onboardingComplete === 0) {
        setShowOnboarding(true);
      }
    }
  }, [prefs, prefsLoading]);

  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false);
  }, []);

  const handleReconfigure = useCallback(async () => {
    try {
      await apiRequest("PUT", "/api/preferences/reset");
      queryClient.invalidateQueries({ queryKey: ["/api/preferences"] });
      setShowOnboarding(true);
    } catch {
      // Fallback: show onboarding anyway
      setShowOnboarding(true);
    }
  }, []);

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <>
      {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}
      <SidebarProvider style={style as React.CSSProperties}>
        <div className="flex h-screen w-full" data-testid="app-root">
          <AppSidebar
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            onReconfigure={handleReconfigure}
          />
          <div className="flex flex-col flex-1 min-w-0">
            <header className="flex items-center justify-between gap-2 px-4 py-2 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
              <div className="flex items-center gap-2">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <h1 className="text-sm font-semibold tracking-tight text-foreground hidden sm:block">
                  TrendingPulse
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground hidden md:block">
                  Updated {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1 overflow-y-auto">
              <Router hook={useHashLocation}>
                <Dashboard selectedCategory={selectedCategory} />
              </Router>
            </main>
          </div>
        </div>
      </SidebarProvider>
      <PwaInstallPrompt />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AppContent />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
