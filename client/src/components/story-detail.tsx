import type { TrendingStory, SocialPost, NewsArticle } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Heart,
  Repeat2,
  Globe,
  TrendingUp,
  Cpu,
  Trophy,
  Film,
  Zap,
  Newspaper,
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

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

function PlatformBadge({ platform }: { platform: string }) {
  const labels: Record<string, string> = {
    x: "X",
    threads: "Threads",
    mastodon: "Mastodon",
    bluesky: "Bluesky",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium platform-${platform}`}>
      {labels[platform] || platform}
    </span>
  );
}

interface StoryDetailProps {
  story: TrendingStory;
  socialPosts: SocialPost[];
  newsArticles: NewsArticle[];
  onBack: () => void;
}

export function StoryDetail({ story, socialPosts, newsArticles, onBack }: StoryDetailProps) {
  const CategoryIcon = categoryIcons[story.category] || Globe;
  const colorClass = categoryColors[story.category] || categoryColors.geopolitics;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6" data-testid="story-detail">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
        data-testid="button-back"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to stories
      </Button>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className={`text-xs px-2 py-0.5 ${colorClass} border-0`}>
            <CategoryIcon className="w-3 h-3 mr-1" />
            {story.category}
          </Badge>
          <span className="text-xs text-muted-foreground font-medium tabular-nums">
            Trend Score: {story.trendScore}/100
          </span>
        </div>
        <h1 className="text-xl font-bold tracking-tight leading-tight mb-3" data-testid="text-story-title">
          {story.title}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-story-summary">
          {story.summary}
        </p>
      </div>

      <Separator className="my-6" />

      {/* Social Posts Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-4 h-4 text-primary" />
          <h2 className="text-base font-semibold">Social Media Posts</h2>
          <span className="text-xs text-muted-foreground">({socialPosts.length})</span>
        </div>
        <div className="space-y-3">
          {socialPosts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-border bg-card hover:bg-accent/30 transition-colors group"
              data-testid={`social-post-${i}`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <PlatformBadge platform={post.platform} />
                  <span className="text-sm font-medium truncate">{post.author}</span>
                  <span className="text-xs text-muted-foreground truncate">{post.handle}</span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-2">
                {post.content}
              </p>
              {(post.likes || post.reposts) && (
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {post.likes && (
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {formatNumber(post.likes)}
                    </span>
                  )}
                  {post.reposts && (
                    <span className="flex items-center gap-1">
                      <Repeat2 className="w-3 h-3" />
                      {formatNumber(post.reposts)}
                    </span>
                  )}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* News Articles Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Newspaper className="w-4 h-4 text-primary" />
          <h2 className="text-base font-semibold">Related News</h2>
          <span className="text-xs text-muted-foreground">({newsArticles.length})</span>
        </div>
        <div className="space-y-3">
          {newsArticles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/30 transition-colors group"
              data-testid={`news-article-${i}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary">{article.source}</span>
                  <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
                </div>
                <h3 className="text-sm font-medium leading-snug group-hover:text-primary transition-colors mb-1">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {article.snippet}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
