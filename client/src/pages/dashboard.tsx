import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { TrendingStory, SocialPost, NewsArticle } from "@shared/schema";
import { StoryCard } from "@/components/story-card";
import { StoryDetail } from "@/components/story-detail";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Activity } from "lucide-react";

interface DashboardProps {
  selectedCategory?: string;
}

export default function Dashboard({ selectedCategory = "all" }: DashboardProps) {
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);

  const { data: stories, isLoading } = useQuery<TrendingStory[]>({
    queryKey: ["/api/stories", selectedCategory],
    queryFn: async () => {
      const res = await apiRequest("GET", `/api/stories?category=${selectedCategory}`);
      return res.json();
    },
  });

  const selectedStory = stories?.find((s) => s.id === selectedStoryId);

  const categoryLabel = selectedCategory === "all" ? "All Stories" : 
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 space-y-4">
        <div className="space-y-2 mb-6">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-3 p-4 rounded-lg border border-border bg-card">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="flex gap-2 pt-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (selectedStory) {
    const socialPosts: SocialPost[] = JSON.parse(selectedStory.socialPosts);
    const newsArticles: NewsArticle[] = JSON.parse(selectedStory.newsArticles);
    return (
      <StoryDetail
        story={selectedStory}
        socialPosts={socialPosts}
        newsArticles={newsArticles}
        onBack={() => setSelectedStoryId(null)}
      />
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold tracking-tight" data-testid="text-category-title">
            {categoryLabel}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {stories?.length || 0} trending {stories?.length === 1 ? "story" : "stories"} from across social media
        </p>
      </div>

      {stories && stories.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Activity className="w-10 h-10 text-muted-foreground/40 mb-4" />
          <h3 className="text-base font-medium text-foreground mb-1">No stories in this category</h3>
          <p className="text-sm text-muted-foreground max-w-[300px]">
            Try selecting "All Stories" to see everything that's trending.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {stories?.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onClick={() => setSelectedStoryId(story.id)}
          />
        ))}
      </div>
    </div>
  );
}
