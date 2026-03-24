import { trendingStories, userPreferences, type TrendingStory, type InsertTrendingStory, type UserPreferences, type InsertUserPreferences } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getAllStories(): TrendingStory[];
  getStoriesByCategory(category: string): TrendingStory[];
  getStoryById(id: number): TrendingStory | undefined;
  createStory(story: InsertTrendingStory): TrendingStory;
  getUserPreferences(): UserPreferences | undefined;
  saveUserPreferences(prefs: InsertUserPreferences): UserPreferences;
  updateUserPreferences(id: number, prefs: Partial<InsertUserPreferences>): UserPreferences | undefined;
}

export class DatabaseStorage implements IStorage {
  getAllStories(): TrendingStory[] {
    return db.select().from(trendingStories).all();
  }

  getStoriesByCategory(category: string): TrendingStory[] {
    if (category === "all") {
      return this.getAllStories();
    }
    return db.select().from(trendingStories).where(eq(trendingStories.category, category)).all();
  }

  getStoryById(id: number): TrendingStory | undefined {
    return db.select().from(trendingStories).where(eq(trendingStories.id, id)).get();
  }

  createStory(story: InsertTrendingStory): TrendingStory {
    return db.insert(trendingStories).values(story).returning().get();
  }

  getUserPreferences(): UserPreferences | undefined {
    return db.select().from(userPreferences).get();
  }

  saveUserPreferences(prefs: InsertUserPreferences): UserPreferences {
    return db.insert(userPreferences).values(prefs).returning().get();
  }

  updateUserPreferences(id: number, prefs: Partial<InsertUserPreferences>): UserPreferences | undefined {
    return db.update(userPreferences).set(prefs).where(eq(userPreferences.id, id)).returning().get();
  }
}

export const storage = new DatabaseStorage();
