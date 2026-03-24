/**
 * Static dashboard that reads from bundled data instead of API.
 */
import type { StaticStory } from "@/lib/static-data";
import { getStoriesByCategory, SEED_STORIES } from "@/lib/static-data";
import { StoryCard } from "@/components/story-card";
import { StoryDetail } from "@/components/story-detail";
import { useState, useMemo } from "react";
import { Activity } from "lucide-react";

interface DashboardProps {
  selectedCategory?: string;
}

export default function StaticDashboard({
  selectedCategory = "all",
}: DashboardProps) {
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);

  const stories = useMemo(
    () => getStoriesByCategory(selectedCategory),
    [selectedCategory]
  );

  const selectedStory = stories.find((s) => s.id === selectedStoryId);

  const categoryLabel =
    selectedCategory === "all"
      ? "All Stories"
      : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

  if (selectedStory) {
    const socialPosts = JSON.parse(selectedStory.socialPosts);
    const newsArticles = JSON.parse(selectedStory.newsArticles);
    return (
      <StoryDetail
        story={selectedStory as any}
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
          <h2
            className="text-lg font-semibold tracking-tight"
            data-testid="text-category-title"
          >
            {categoryLabel}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {stories.length} trending {stories.length === 1 ? "story" : "stories"}{" "}
          from across social media
        </p>
      </div>

      {stories.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Activity className="w-10 h-10 text-muted-foreground/40 mb-4" />
          <h3 className="text-base font-medium text-foreground mb-1">
            No stories in this category
          </h3>
          <p className="text-sm text-muted-foreground max-w-[300px]">
            Try selecting "All Stories" to see everything that's trending.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story as any}
            onClick={() => setSelectedStoryId(story.id)}
          />
        ))}
      </div>
    </div>
  );
}
