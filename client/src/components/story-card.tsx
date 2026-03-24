import type { TrendingStory, SocialPost } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  TrendingUp,
  Cpu,
  Trophy,
  Film,
  Zap,
  ArrowUpRight,
  MessageSquare,
  HeartPulse,
  Bitcoin,
} from "lucide-react";

const categoryIcons: Record<string, any> = {
  geopolitics: Globe,
  business: TrendingUp,
  tech: Cpu,
  sports: Trophy,
  entertainment: Film,
  energy: Zap,
  health: HeartPulse,
  crypto: Bitcoin,
};

const categoryColors: Record<string, string> = {
  geopolitics: "bg-red-500/10 text-red-600 dark:text-red-400",
  business: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  tech: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  sports: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  entertainment: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  energy: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  health: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  crypto: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
};

function getPlatformCounts(postsJson: string): Record<string, number> {
  try {
    const posts: SocialPost[] = JSON.parse(postsJson);
    const counts: Record<string, number> = {};
    posts.forEach((p) => {
      counts[p.platform] = (counts[p.platform] || 0) + 1;
    });
    return counts;
  } catch {
    return {};
  }
}

function getTrendScoreColor(score: number): string {
  if (score >= 90) return "text-red-500 dark:text-red-400";
  if (score >= 80) return "text-orange-500 dark:text-orange-400";
  if (score >= 70) return "text-amber-500 dark:text-amber-400";
  return "text-emerald-500 dark:text-emerald-400";
}

interface StoryCardProps {
  story: TrendingStory;
  onClick: () => void;
}

export function StoryCard({ story, onClick }: StoryCardProps) {
  const CategoryIcon = categoryIcons[story.category] || Globe;
  const colorClass = categoryColors[story.category] || categoryColors.geopolitics;
  const platformCounts = getPlatformCounts(story.socialPosts);
  const totalPosts = Object.values(platformCounts).reduce((a, b) => a + b, 0);

  return (
    <button
      onClick={onClick}
      className="group text-left w-full p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      data-testid={`card-story-${story.id}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className={`text-xs px-2 py-0.5 ${colorClass} border-0`}>
              <CategoryIcon className="w-3 h-3 mr-1" />
              {story.category}
            </Badge>
            <span className={`text-xs font-semibold tabular-nums ${getTrendScoreColor(story.trendScore)}`}>
              {story.trendScore}
            </span>
          </div>
          <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {story.title}
          </h3>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
      </div>

      <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
        {story.summary}
      </p>

      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <MessageSquare className="w-3 h-3" />
          <span>{totalPosts} posts</span>
        </div>
        <div className="flex items-center gap-1">
          {Object.entries(platformCounts).map(([platform, count]) => (
            <span
              key={platform}
              className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium platform-${platform}`}
            >
              {platform === "x" ? "X" : platform === "bluesky" ? "Bsky" : platform === "mastodon" ? "Mast" : "Thrds"}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
