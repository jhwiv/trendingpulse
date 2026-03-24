import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const trendingStories = sqliteTable("trending_stories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  category: text("category").notNull(),
  trendScore: integer("trend_score").notNull(),
  imageUrl: text("image_url"),
  // JSON string array of social posts
  socialPosts: text("social_posts").notNull(),
  // JSON string array of news articles
  newsArticles: text("news_articles").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const insertTrendingStorySchema = createInsertSchema(trendingStories).omit({ id: true });
export type InsertTrendingStory = z.infer<typeof insertTrendingStorySchema>;
export type TrendingStory = typeof trendingStories.$inferSelect;

// Types for the JSON fields
export interface SocialPost {
  platform: "x" | "threads" | "mastodon" | "bluesky";
  author: string;
  handle: string;
  content: string;
  url: string;
  timestamp: string;
  likes?: number;
  reposts?: number;
}

export interface NewsArticle {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  snippet: string;
}

export type Category =
  | "all"
  | "geopolitics"
  | "business"
  | "tech"
  | "sports"
  | "entertainment"
  | "science"
  | "energy"
  | "health"
  | "crypto";

// User preferences table
export const userPreferences = sqliteTable("user_preferences", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  onboardingComplete: integer("onboarding_complete").notNull().default(0),
  // JSON array of category IDs
  selectedCategories: text("selected_categories").notNull().default('[]'),
  // JSON array of platform IDs
  selectedPlatforms: text("selected_platforms").notNull().default('[]'),
  // JSON array of news source IDs
  selectedSources: text("selected_sources").notNull().default('[]'),
  // "realtime" | "hourly" | "daily"
  refreshFrequency: text("refresh_frequency").notNull().default('hourly'),
  createdAt: text("created_at").notNull(),
});

export const insertUserPreferencesSchema = createInsertSchema(userPreferences).omit({ id: true });
export type InsertUserPreferences = z.infer<typeof insertUserPreferencesSchema>;
export type UserPreferences = typeof userPreferences.$inferSelect;

// Data source definition
export interface DataSource {
  id: string;
  name: string;
  type: "social" | "news" | "aggregator" | "wire";
  description: string;
  url: string;
  apiAvailable: boolean;
}
