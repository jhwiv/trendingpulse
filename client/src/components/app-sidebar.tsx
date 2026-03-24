import {
  Layers,
  Globe,
  TrendingUp,
  Cpu,
  Trophy,
  Film,
  Zap,
  Activity,
  HeartPulse,
  Bitcoin,
  Settings2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { PerplexityAttribution } from "@/components/PerplexityAttribution";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const categories = [
  { id: "all", label: "All Stories", icon: Layers },
  { id: "geopolitics", label: "Geopolitics", icon: Globe },
  { id: "business", label: "Business & Finance", icon: TrendingUp },
  { id: "tech", label: "Technology", icon: Cpu },
  { id: "sports", label: "Sports", icon: Trophy },
  { id: "entertainment", label: "Entertainment", icon: Film },
  { id: "energy", label: "Energy", icon: Zap },
  { id: "health", label: "Health & Science", icon: HeartPulse },
  { id: "crypto", label: "Crypto", icon: Bitcoin },
];

interface AppSidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onReconfigure?: () => void;
}

export function AppSidebar({ selectedCategory, onCategorySelect, onReconfigure }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
            <Activity className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-semibold leading-none">TrendingPulse</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Social News Aggregator</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((cat) => (
                <SidebarMenuItem key={cat.id}>
                  <SidebarMenuButton
                    onClick={() => onCategorySelect(cat.id)}
                    isActive={selectedCategory === cat.id}
                    data-testid={`nav-category-${cat.id}`}
                  >
                    <cat.icon className="w-4 h-4" />
                    <span>{cat.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Sources</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2">
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                Aggregating from X, Threads, Mastodon, Bluesky, Reddit, and 20+ news sources.
              </p>
              {onReconfigure && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onReconfigure}
                  className="w-full justify-start text-xs h-8 text-muted-foreground hover:text-foreground"
                  data-testid="button-reconfigure"
                >
                  <Settings2 className="w-3.5 h-3.5 mr-2" />
                  Reconfigure Preferences
                </Button>
              )}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Separator className="mb-3" />
        <PerplexityAttribution />
      </SidebarFooter>
    </Sidebar>
  );
}
