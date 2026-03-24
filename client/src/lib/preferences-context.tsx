import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface UserPrefs {
  onboardingComplete: boolean;
  selectedCategories: string[];
  selectedPlatforms: string[];
  selectedSources: string[];
  refreshFrequency: string;
}

interface PrefsContextValue {
  prefs: UserPrefs | null;
  isLoading: boolean;
  savePrefs: (p: Omit<UserPrefs, "onboardingComplete">) => void;
  resetPrefs: () => void;
}

const defaultPrefs: UserPrefs = {
  onboardingComplete: false,
  selectedCategories: [],
  selectedPlatforms: [],
  selectedSources: [],
  refreshFrequency: "hourly",
};

const PREFS_KEY = "trendingpulse_prefs";

function loadPrefs(): UserPrefs | null {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return null;
}

function persistPrefs(p: UserPrefs) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(p));
  } catch {
    // ignore — localStorage might be blocked in some contexts
  }
}

const PrefsContext = createContext<PrefsContextValue>({
  prefs: null,
  isLoading: false,
  savePrefs: () => {},
  resetPrefs: () => {},
});

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<UserPrefs | null>(() => loadPrefs());
  const [isLoading] = useState(false);

  const savePrefs = useCallback((p: Omit<UserPrefs, "onboardingComplete">) => {
    const full: UserPrefs = { ...p, onboardingComplete: true };
    setPrefs(full);
    persistPrefs(full);
  }, []);

  const resetPrefs = useCallback(() => {
    setPrefs(null);
    try {
      localStorage.removeItem(PREFS_KEY);
    } catch {
      // ignore
    }
  }, []);

  return (
    <PrefsContext.Provider value={{ prefs, isLoading, savePrefs, resetPrefs }}>
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs() {
  return useContext(PrefsContext);
}
