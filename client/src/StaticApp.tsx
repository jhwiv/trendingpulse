/**
 * Static version of the app for GitHub Pages PWA deployment.
 * Uses bundled data + localStorage instead of backend API calls.
 */
import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { StaticOnboarding } from "@/components/static-onboarding";
import { PwaInstallPrompt } from "@/components/pwa-install";
import { PrefsProvider, usePrefs } from "@/lib/preferences-context";
import StaticDashboard from "@/pages/static-dashboard";
import NotFound from "@/pages/not-found";
import { useState, useEffect, useCallback } from "react";

// Register service worker for PWA
function useServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/trendingpulse/sw.js", { scope: "/trendingpulse/" })
        .catch(() => {});
    }
  }, []);
}

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { prefs, resetPrefs } = usePrefs();

  useServiceWorker();

  useEffect(() => {
    if (!prefs || !prefs.onboardingComplete) {
      setShowOnboarding(true);
    }
  }, [prefs]);

  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false);
  }, []);

  const handleReconfigure = useCallback(() => {
    resetPrefs();
    setShowOnboarding(true);
  }, [resetPrefs]);

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <>
      {showOnboarding && <StaticOnboarding onComplete={handleOnboardingComplete} />}
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
                  Updated{" "}
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1 overflow-y-auto">
              <Router hook={useHashLocation}>
                <Switch>
                  <Route path="/">
                    <StaticDashboard selectedCategory={selectedCategory} />
                  </Route>
                  <Route component={NotFound} />
                </Switch>
              </Router>
            </main>
          </div>
        </div>
      </SidebarProvider>
      <PwaInstallPrompt />
    </>
  );
}

export default function StaticApp() {
  return (
    <ThemeProvider>
      <PrefsProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <AppContent />
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </PrefsProvider>
    </ThemeProvider>
  );
}
