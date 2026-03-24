import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Globe,
  TrendingUp,
  Cpu,
  Trophy,
  Film,
  Zap,
  HeartPulse,
  Bitcoin,
  ArrowRight,
  ArrowLeft,
  Check,
  Rss,
  Newspaper,
  Radio,
  MessageSquare,
} from "lucide-react";
import {
  SiReddit,
  SiYoutube,
  SiTiktok,
} from "react-icons/si";

const STEPS = ["welcome", "categories", "platforms", "sources", "frequency"] as const;
type Step = (typeof STEPS)[number];

const categoryOptions = [
  { id: "geopolitics", label: "Geopolitics", icon: Globe, color: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20" },
  { id: "business", label: "Business & Finance", icon: TrendingUp, color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
  { id: "tech", label: "Technology", icon: Cpu, color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20" },
  { id: "sports", label: "Sports", icon: Trophy, color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
  { id: "entertainment", label: "Entertainment", icon: Film, color: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20" },
  { id: "energy", label: "Energy", icon: Zap, color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20" },
  { id: "health", label: "Health & Science", icon: HeartPulse, color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20" },
  { id: "crypto", label: "Crypto", icon: Bitcoin, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20" },
];

const platformOptions = [
  { id: "x", label: "X (Twitter)", color: "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900" },
  { id: "threads", label: "Threads", color: "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900" },
  { id: "mastodon", label: "Mastodon", color: "bg-violet-600 text-white" },
  { id: "bluesky", label: "Bluesky", color: "bg-blue-500 text-white" },
  { id: "reddit", label: "Reddit", color: "bg-orange-600 text-white" },
  { id: "youtube", label: "YouTube", color: "bg-red-600 text-white" },
  { id: "tiktok", label: "TikTok", color: "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900" },
];

const PlatformIcon = ({ id }: { id: string }) => {
  switch (id) {
    case "reddit": return <SiReddit className="w-4 h-4" />;
    case "youtube": return <SiYoutube className="w-4 h-4" />;
    case "tiktok": return <SiTiktok className="w-4 h-4" />;
    default: return <MessageSquare className="w-4 h-4" />;
  }
};

const sourceGroups = [
  {
    label: "Wire Services",
    icon: Radio,
    sources: [
      { id: "ap", name: "Associated Press" },
      { id: "reuters", name: "Reuters" },
      { id: "afp", name: "AFP" },
    ],
  },
  {
    label: "News Aggregators",
    icon: Rss,
    sources: [
      { id: "newsapi", name: "NewsAPI.org" },
      { id: "newsdata", name: "NewsData.io" },
      { id: "guardian", name: "The Guardian" },
      { id: "nyt", name: "New York Times" },
    ],
  },
  {
    label: "Major Publications",
    icon: Newspaper,
    sources: [
      { id: "bbc", name: "BBC News" },
      { id: "economist", name: "The Economist" },
      { id: "bloomberg", name: "Bloomberg" },
      { id: "cnbc", name: "CNBC" },
      { id: "wsj", name: "Wall Street Journal" },
    ],
  },
  {
    label: "Tech & Analysis",
    icon: Cpu,
    sources: [
      { id: "techcrunch", name: "TechCrunch" },
      { id: "arstechnica", name: "Ars Technica" },
      { id: "tangle", name: "Tangle" },
      { id: "thedeepview", name: "The Deep View" },
    ],
  },
];

const frequencyOptions = [
  { id: "realtime", label: "Real-time", description: "Instant updates as stories break" },
  { id: "hourly", label: "Hourly", description: "Refreshed digest every hour" },
  { id: "daily", label: "Daily", description: "One comprehensive daily briefing" },
];

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState<Step>("welcome");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryOptions.map((c) => c.id)
  );
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(
    ["x", "threads", "mastodon", "bluesky"]
  );
  const [selectedSources, setSelectedSources] = useState<string[]>(
    ["ap", "reuters", "newsapi", "guardian", "bbc", "bloomberg"]
  );
  const [frequency, setFrequency] = useState("hourly");

  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/preferences", {
        selectedCategories: JSON.stringify(selectedCategories),
        selectedPlatforms: JSON.stringify(selectedPlatforms),
        selectedSources: JSON.stringify(selectedSources),
        refreshFrequency: frequency,
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/preferences"] });
      onComplete();
    },
  });

  const stepIndex = STEPS.indexOf(step);
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === STEPS.length - 1;

  const goNext = () => {
    if (isLast) {
      saveMutation.mutate();
      return;
    }
    setStep(STEPS[stepIndex + 1]);
  };
  const goBack = () => {
    if (!isFirst) setStep(STEPS[stepIndex - 1]);
  };

  const toggleItem = (
    list: string[],
    setList: (v: string[]) => void,
    id: string
  ) => {
    setList(
      list.includes(id) ? list.filter((x) => x !== id) : [...list, id]
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm" data-testid="onboarding-overlay">
      <div className="w-full max-w-lg mx-4">
        {/* Progress bar */}
        <div className="flex gap-1.5 mb-8">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i <= stepIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Step content */}
        <div className="min-h-[400px] flex flex-col">
          {step === "welcome" && (
            <div className="flex-1 flex flex-col items-center justify-center text-center" data-testid="step-welcome">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-xl font-bold tracking-tight mb-3">
                Welcome to TrendingPulse
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-2">
                Let's personalize your feed. Tell us what matters to you and we'll
                curate trending stories from across social media and news.
              </p>
              <p className="text-xs text-muted-foreground/70">
                This takes about 30 seconds. You can change these later.
              </p>
            </div>
          )}

          {step === "categories" && (
            <div data-testid="step-categories">
              <h2 className="text-lg font-semibold tracking-tight mb-1">
                What topics interest you?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Select the categories you want to follow. We'll prioritize these in your feed.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {categoryOptions.map((cat) => {
                  const Icon = cat.icon;
                  const selected = selectedCategories.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => toggleItem(selectedCategories, setSelectedCategories, cat.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:bg-accent/30"
                      }`}
                      data-testid={`category-toggle-${cat.id}`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-md ${cat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium flex-1">{cat.label}</span>
                      {selected && <Check className="w-4 h-4 text-primary shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === "platforms" && (
            <div data-testid="step-platforms">
              <h2 className="text-lg font-semibold tracking-tight mb-1">
                Which platforms should we monitor?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                We'll pull trending posts and discussions from your selected platforms.
              </p>
              <div className="space-y-2">
                {platformOptions.map((plat) => {
                  const selected = selectedPlatforms.includes(plat.id);
                  return (
                    <button
                      key={plat.id}
                      onClick={() => toggleItem(selectedPlatforms, setSelectedPlatforms, plat.id)}
                      className={`flex items-center gap-3 w-full p-3 rounded-lg border transition-all text-left ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:bg-accent/30"
                      }`}
                      data-testid={`platform-toggle-${plat.id}`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-md ${plat.color}`}>
                        <PlatformIcon id={plat.id} />
                      </div>
                      <span className="text-sm font-medium flex-1">{plat.label}</span>
                      {selected && <Check className="w-4 h-4 text-primary shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === "sources" && (
            <div data-testid="step-sources">
              <h2 className="text-lg font-semibold tracking-tight mb-1">
                Select your news sources
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Related news articles will be pulled from these sources alongside social posts.
              </p>
              <div className="space-y-5 max-h-[340px] overflow-y-auto pr-1">
                {sourceGroups.map((group) => {
                  const GroupIcon = group.icon;
                  return (
                    <div key={group.label}>
                      <div className="flex items-center gap-2 mb-2">
                        <GroupIcon className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {group.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.sources.map((src) => {
                          const selected = selectedSources.includes(src.id);
                          return (
                            <button
                              key={src.id}
                              onClick={() => toggleItem(selectedSources, setSelectedSources, src.id)}
                              data-testid={`source-toggle-${src.id}`}
                            >
                              <Badge
                                variant={selected ? "default" : "secondary"}
                                className={`cursor-pointer text-xs px-3 py-1.5 transition-all ${
                                  selected
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-accent"
                                }`}
                              >
                                {src.name}
                                {selected && <Check className="w-3 h-3 ml-1.5" />}
                              </Badge>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === "frequency" && (
            <div data-testid="step-frequency">
              <h2 className="text-lg font-semibold tracking-tight mb-1">
                How often should we update?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Choose how frequently your feed refreshes with new trending stories.
              </p>
              <div className="space-y-2">
                {frequencyOptions.map((opt) => {
                  const selected = frequency === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setFrequency(opt.id)}
                      className={`flex items-center gap-3 w-full p-4 rounded-lg border transition-all text-left ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:bg-accent/30"
                      }`}
                      data-testid={`frequency-${opt.id}`}
                    >
                      <div className="flex-1">
                        <div className="text-sm font-medium">{opt.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{opt.description}</div>
                      </div>
                      {selected && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-border">
          {!isFirst ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={goBack}
              data-testid="button-onboarding-back"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          ) : (
            <div />
          )}
          <Button
            size="sm"
            onClick={goNext}
            disabled={saveMutation.isPending}
            data-testid="button-onboarding-next"
          >
            {saveMutation.isPending ? (
              "Saving..."
            ) : isLast ? (
              <>
                <Check className="w-4 h-4 mr-1" />
                Finish Setup
              </>
            ) : (
              <>
                {isFirst ? "Get Started" : "Continue"}
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
