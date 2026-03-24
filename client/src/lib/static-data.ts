// Auto-generated static data for GitHub Pages PWA deployment
// This file contains all seed stories bundled for client-side use

export interface StaticSocialPost {
  platform: "x" | "threads" | "mastodon" | "bluesky";
  author: string;
  handle: string;
  content: string;
  url: string;
  timestamp: string;
  likes?: number;
  reposts?: number;
}

export interface StaticNewsArticle {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  snippet: string;
}

export interface StaticStory {
  id: number;
  title: string;
  summary: string;
  category: string;
  trendScore: number;
  imageUrl: string | null;
  socialPosts: string; // JSON string
  newsArticles: string; // JSON string
  updatedAt: string;
}

const rawStories: Array<{
  title: string;
  summary: string;
  category: string;
  trendScore: number;
  imageUrl: string | null;
  socialPosts: StaticSocialPost[];
  newsArticles: StaticNewsArticle[];
}> = [
    {
      title: "Iran-US Tensions: Trump Shelves Strait of Hormuz Ultimatum",
      summary: "President Trump postponed his ultimatum for Iran to reopen the Strait of Hormuz, citing 'good and productive' peace talks. Iran denies any negotiations are taking place and claims Trump 'retreated out of fear.' The strait, through which 20% of global oil passes, remains effectively blocked. Oil prices remain volatile as the conflict enters its fourth week with over 9,000 Iranian targets struck.",
      category: "geopolitics",
      trendScore: 98,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "Breaking News", handle: "@BreakingNews", content: "BREAKING: Trump postpones Strait of Hormuz deadline, says US-Iran talks are 'productive.' Iran denies any dialogue is taking place.", url: "https://x.com/BreakingNews", timestamp: "2h ago", likes: 45200, reposts: 18300 },
        { platform: "x", author: "CBS News", handle: "@CBSNews", content: "Iran's IRIB state TV says Trump 'withdrew his ultimatum out of fear of Iran's response.' Trump earlier demanded Iran reopen the Strait of Hormuz or face strikes on power plants.", url: "https://x.com/CBSNews", timestamp: "3h ago", likes: 22100, reposts: 8700 },
        { platform: "bluesky", author: "NPR News", handle: "@npr.bsky.social", content: "Day 24 of the Iran conflict: US Central Command says it has hit 9,000+ Iranian targets including 140 naval vessels. Iran threatens to 'completely close' the Strait of Hormuz if power plants are struck.", url: "https://bsky.app/profile/npr.bsky.social", timestamp: "4h ago", likes: 8400, reposts: 3200 },
        { platform: "mastodon", author: "Al Jazeera English", handle: "@aaborhi@mastodon.social", content: "Iran's Revolutionary Guards: 'The Strait of Hormuz will be completely closed and will not be opened until our destroyed power plants are rebuilt.' Global oil markets react.", url: "https://mastodon.social/@aaborhi", timestamp: "5h ago", likes: 3100, reposts: 1800 },
        { platform: "threads", author: "BBC News", handle: "@bbcnews", content: "Trump says Iran has 'one more chance at peace' as Tehran calls reports of US talks 'fake news.' Oil prices remain above $108/barrel as tensions escalate.", url: "https://www.threads.net/@bbcnews", timestamp: "6h ago", likes: 15700, reposts: 5400 }
      ],
      newsArticles: [
        { title: "Trump calls off Strait of Hormuz ultimatum as Iran receives U.S. message from mediators", source: "CBS News", url: "https://www.cbsnews.com/live-updates/iran-war-us-israel-trump-ultimatum-strait-of-hormuz/", publishedAt: "Mar 24, 2026", snippet: "President Trump said his ultimatum was being postponed amid 'good and productive' peace talks with Tehran." },
        { title: "Trump says the U.S. is in talks with Iran to end the war, which Iran denies", source: "NPR", url: "https://www.npr.org/2026/03/23/nx-s1-5757172/iran-defiant-trump-hormuz", publishedAt: "Mar 23, 2026", snippet: "He indicated the U.S. would refrain from targeting energy facilities for five days as negotiations proceed." },
        { title: "Iran war live: Tehran threatens to 'completely close' Strait of Hormuz", source: "The Independent", url: "https://www.independent.co.uk/news/world/middle-east/iran-us-war-live-strait-of-hormuz-trump-oil-israel-b2943316.html", publishedAt: "Mar 23, 2026", snippet: "Iran's Revolutionary Guards said the strait will be 'completely closed' if Trump follows through on his threat." },
        { title: "Day 24 of Middle East conflict", source: "CNN", url: "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-23-26", publishedAt: "Mar 24, 2026", snippet: "Iran denies any dialogue with Washington after Trump announcement of 'constructive conversations.'" }
      ]
    },
    {
      title: "Texas Oil Refinery Explosion Rocks Port Arthur",
      summary: "A massive explosion at the Valero refinery in Port Arthur, Texas sent thick black smoke into the air and triggered shelter-in-place orders for residents. No injuries have been reported. The incident comes at a particularly sensitive time as fuel prices have surged due to the ongoing Iran conflict disrupting global oil supply through the Strait of Hormuz.",
      category: "energy",
      trendScore: 89,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "AP News", handle: "@AP", content: "BREAKING: Large explosion at Valero refinery in Port Arthur, Texas. No injuries reported. Shelter-in-place order issued for residents. Thick black smoke visible for miles.", url: "https://x.com/AP", timestamp: "8h ago", likes: 31400, reposts: 12600 },
        { platform: "x", author: "CNN Breaking", handle: "@caborhiCNN", content: "Fire breaks out after oil refinery explosion near Texas coast. Officials say an industrial heater may have caused the blast. Air quality monitoring underway.", url: "https://x.com/caborhiCNN", timestamp: "9h ago", likes: 18900, reposts: 7200 },
        { platform: "threads", author: "New York Post", handle: "@nypost", content: "Massive explosion at crude oil refinery rocks Texas city. Residents told to shelter in place as authorities work to contain the blaze.", url: "https://www.threads.net/@nypost", timestamp: "9h ago", likes: 8300, reposts: 2900 },
        { platform: "bluesky", author: "Reuters", handle: "@reuters.bsky.social", content: "Valero Port Arthur refinery explosion: Mayor says 'everyone is safe.' Comes amid surging fuel prices from Iran conflict disruptions.", url: "https://bsky.app/profile/reuters.bsky.social", timestamp: "10h ago", likes: 5600, reposts: 2100 }
      ],
      newsArticles: [
        { title: "Large oil refinery explosion near Texas coast forces residents to shelter in place", source: "AP News", url: "https://apnews.com/article/refinery-explosion-texas-coast-60ecf6d9a70a2f1d5494fb8e38a84c4a", publishedAt: "Mar 24, 2026", snippet: "Mayor confirmed no injuries at the Valero refinery, approximately 90 miles east of Houston." },
        { title: "Fire breaks out after oil refinery explosion", source: "CNN", url: "https://www.cnn.com/2026/03/24/us/video/fire-breaks-out-after-oil-refinery-explosion-digvid-vrtc-hnk", publishedAt: "Mar 24, 2026", snippet: "No injuries reported after a large explosion at the Valero refinery in Texas." },
        { title: "Massive explosion at crude oil refinery rocks Texas city", source: "New York Post", url: "https://nypost.com/2026/03/23/us-news/massive-explosion-at-crude-oil-refinery-rocks-texas-city-as-residents-told-to-shelter-in-place/", publishedAt: "Mar 23, 2026", snippet: "Residents told to shelter in place as emergency crews fight the blaze." }
      ]
    },
    {
      title: "March Madness: Iowa Stuns #1 Florida, Big Ten Dominates Sweet 16",
      summary: "No. 9 seed Iowa pulled off a stunning 73-72 upset of top-seeded Florida, advancing to the Sweet 16 for the first time since 1999. Alvaro Folgueiras hit the game-winning 3-pointer with under 5 seconds remaining. The Big Ten leads all conferences with 6 teams in the Sweet 16, tied for the second-most ever, as the conference pursues its first national title since 2000.",
      category: "sports",
      trendScore: 94,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "ESPN", handle: "@ESPN", content: "IOWA DOES IT! The 9-seed Hawkeyes upset #1 Florida 73-72 on a CLUTCH Folgueiras three with 4.7 seconds left! The Big Ten has SIX teams in the Sweet 16!", url: "https://x.com/ESPN", timestamp: "12h ago", likes: 67800, reposts: 28400 },
        { platform: "x", author: "CBS Sports", handle: "@CBSSports", content: "The Big Ten's Sweet 16 domination: Michigan, Michigan State, Illinois, Purdue, Nebraska, Iowa. Six teams alive. Conference hasn't won it all since MSU in 2000.", url: "https://x.com/CBSSports", timestamp: "14h ago", likes: 23100, reposts: 9800 },
        { platform: "threads", author: "Bleacher Report", handle: "@bleacherreport", content: "Ben McCollum now has a career record of 449-107 (80%+ win rate). Iowa to the Sweet 16 for the first time in 27 years. What a coaching hire.", url: "https://www.threads.net/@bleacherreport", timestamp: "13h ago", likes: 19200, reposts: 6700 },
        { platform: "bluesky", author: "NCAA March Madness", handle: "@marchmadness.bsky.social", content: "Duke is the only ACC team left. No. 1 overall seed vs. St. John's in the Sweet 16. The ACC sent 8 teams to the tournament and only 1 survived.", url: "https://bsky.app/profile/marchmadness.bsky.social", timestamp: "15h ago", likes: 11400, reposts: 4300 }
      ],
      newsArticles: [
        { title: "March Madness scores, winners and losers: Big Ten thrives as Iowa stuns Florida", source: "CBS Sports", url: "https://www.cbssports.com/college-basketball/news/march-madness-2026-scores-winners-losers-big-ten-acc/", publishedAt: "Mar 23, 2026", snippet: "With six teams advancing to the Sweet 16, the Big Ten will have multiple teams with solid chances at the Final Four." },
        { title: "March Madness winners, losers so far: Big Ten dominates", source: "USA Today", url: "https://www.usatoday.com/story/sports/ncaab/2026/03/23/march-madness-winners-losers-sweet-16-ncaa-tournament/89278154007/", publishedAt: "Mar 24, 2026", snippet: "The Big Ten went 6-1 in the second round with six teams moving on to the Sweet 16." }
      ]
    },
    {
      title: "WWE Raw: Roman Reigns Spears CM Punk in WrestleMania Build",
      summary: "Monday Night Raw from Boston's TD Garden delivered chaos on the road to WrestleMania 42. Roman Reigns Speared CM Punk during an intense confrontation. Oba Femi continued his dominance over Brock Lesnar, Seth Rollins was arrested after attacking Paul Heyman, and AJ Lee challenged Becky Lynch to a WrestleMania title match.",
      category: "entertainment",
      trendScore: 82,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "WWE", handle: "@WWE", content: "ROMAN SPEARS PUNK! The OTC just laid out the World Heavyweight Champion on #WWERaw! WrestleMania 42 is going to be ELECTRIC!", url: "https://x.com/WWE", timestamp: "6h ago", likes: 89300, reposts: 34100 },
        { platform: "x", author: "Sports Illustrated", handle: "@SInow", content: "WWE Raw results: Oba Femi drops Brock Lesnar AGAIN, Seth Rollins arrested, Penta retains IC title over Dominik Mysterio. The road to WrestleMania heats up.", url: "https://x.com/SInow", timestamp: "7h ago", likes: 15600, reposts: 5200 },
        { platform: "threads", author: "Wrestling Inc", handle: "@wrestlinginc", content: "The Femi vs Lesnar rivalry has swiftly become THE most compelling storyline in WWE. That Fall From Grace on Brock was devastating.", url: "https://www.threads.net/@wrestlinginc", timestamp: "8h ago", likes: 12400, reposts: 4100 },
        { platform: "mastodon", author: "Pro Wrestling", handle: "@prowrestling@mastodon.social", content: "AJ Lee challenges Becky Lynch for the Women's IC title at WrestleMania. The Road to WM42 just got a whole lot more interesting.", url: "https://mastodon.social/@prowrestling", timestamp: "7h ago", likes: 3800, reposts: 1200 }
      ],
      newsArticles: [
        { title: "WWE Raw Results (3/23/26): Reigns Destroys Punk, Seth Rollins Arrested", source: "Sports Illustrated", url: "https://www.si.com/fannation/wrestling/wwe/wwe-raw-results-highlights-and-live-blog-mar26", publishedAt: "Mar 23, 2026", snippet: "The Road to WrestleMania 42 continues with shocking altercations and surprising arrests." },
        { title: "Raw: March 23, 2026 Results and Highlights", source: "WWE.com", url: "https://www.wwe.com/shows/raw/2026-03-23", publishedAt: "Mar 24, 2026", snippet: "Roman Reigns Spears CM Punk during intense confrontation. Oba Femi once again dropped Brock Lesnar." },
        { title: "WWE Raw results, grades (March 23): Roman Reigns snaps", source: "Yahoo Sports", url: "https://sports.yahoo.com/wrestling/breaking-news/live/wwe-raw-live-results-march-23-updates-grades-and-highlights-tonight-from-boston-220036875.html", publishedAt: "Mar 24, 2026", snippet: "Monday night's episode at TD Garden was characterized by chaos and a distinct sense of transition." }
      ]
    },
    {
      title: "Global Markets Rocked: S&P 500 Posts Worst Month, Oil Surges 84%",
      summary: "The stock market turmoil intensified as the Nasdaq fell 2%, now 9.6% below its all-time high. All three major indices posted four consecutive weeks of losses for the first time since 2023. Brent crude surged to $108/barrel, up 84% for the year. The Fed is now pricing in a 30% chance of a rate hike by October, up from just 6% the prior day. Gold dropped 9.5% in its worst weekly decline since 2015.",
      category: "business",
      trendScore: 91,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "Bloomberg", handle: "@business", content: "MARKETS: Worst month in 3.5 years for global stocks. Brent crude at $108. Gold posts worst weekly drop since 2015. Fed rate hike odds surge to 30%.", url: "https://x.com/business", timestamp: "4h ago", likes: 28700, reposts: 11200 },
        { platform: "x", author: "CNBC", handle: "@CNBC", content: "S&P 500 hits new 2026 low. Nasdaq down 9.6% from highs. Retail investors piling into oil ETFs at record levels - $211M in a single day.", url: "https://x.com/CNBC", timestamp: "5h ago", likes: 19400, reposts: 7600 },
        { platform: "bluesky", author: "WSJ Markets", handle: "@wsjmarkets.bsky.social", content: "Trading volumes hit 2026 high as share prices slumped. Dow fell 444 points. Four consecutive weeks of losses for all three major indices - first time since 2023.", url: "https://bsky.app/profile/wsjmarkets.bsky.social", timestamp: "6h ago", likes: 7200, reposts: 3100 },
        { platform: "threads", author: "TheStreet", handle: "@thestreet", content: "Russell 2000 jumps 3% and escapes correction territory after Trump comments on Iran. But the threat of prolonged conflict looms heavy.", url: "https://www.threads.net/@thestreet", timestamp: "8h ago", likes: 5100, reposts: 1800 }
      ],
      newsArticles: [
        { title: "Stocks Suffer Fourth Consecutive Weekly Loss", source: "Wall Street Journal", url: "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-03-20-2026", publishedAt: "Mar 20, 2026", snippet: "Trading volumes hit a 2026 high as share prices slumped. Brent crude up 84% for the year." },
        { title: "S&P 500 falls to new low for year on Iran oil crisis", source: "CNBC", url: "https://www.cnbc.com/2026/03/12/stock-market-today-live-updates.html", publishedAt: "Mar 13, 2026", snippet: "First three-week losing streak in about a year. Retail investors rush into oil ETFs." },
        { title: "Stock Market Today: Russell 2000 jumps 3% after Trump comments", source: "TheStreet", url: "https://www.thestreet.com/latest-news/stock-market-today-march-23-2026-updates", publishedAt: "Mar 23, 2026", snippet: "The threat of a prolonged conflict in Iran is looming heavy in global markets." }
      ]
    },
    {
      title: "Elvis EPiC Documentary Shatters Box Office Records",
      summary: "Baz Luhrmann's 'EPiC: Elvis Presley in Concert' earned $15 million opening weekend, becoming the third-biggest documentary opening of all time. Shown in 5,000+ locations, it also set the record for highest-grossing week ever for a documentary in IMAX. Trump made a surprise visit to Graceland on Monday amid the Iran crisis. The King's cultural relevance continues to grow with Gen Z streaming his music in record numbers.",
      category: "entertainment",
      trendScore: 78,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "Variety", handle: "@Variety", content: "Baz Luhrmann's 'EPiC: Elvis Presley in Concert' opens to $15M - the third-biggest documentary opening EVER. Highest-grossing IMAX doc week in history.", url: "https://x.com/Variety", timestamp: "1d ago", likes: 34200, reposts: 12800 },
        { platform: "threads", author: "PBS NewsHour", handle: "@pbsnewshour", content: "Amid Iran war and airport turmoil, Trump makes a surprise detour to Elvis Presley's Graceland while in Memphis.", url: "https://www.threads.net/@pbsnewshour", timestamp: "8h ago", likes: 11600, reposts: 4300 },
        { platform: "bluesky", author: "LA Times", handle: "@latimes.bsky.social", content: "Music docs are box office gold. EPiC surpassed One Direction: This Is Us and Michael Jackson's This Is It in documentary openings. Elvis remains a cultural force.", url: "https://bsky.app/profile/latimes.bsky.social", timestamp: "2d ago", likes: 6800, reposts: 2400 },
        { platform: "mastodon", author: "Film Updates", handle: "@filmupdates@mastodon.social", content: "In 2026, teenagers born decades after Elvis died are streaming his songs. The EPiC documentary proves the King's relevance spans generations.", url: "https://mastodon.social/@filmupdates", timestamp: "1d ago", likes: 2900, reposts: 1100 }
      ],
      newsArticles: [
        { title: "New Elvis documentary 'EPiC' makes $15 million, a win for music docs", source: "Los Angeles Times", url: "https://www.latimes.com/entertainment-arts/business/story/2026-03-03/elvis-movie-2026-epic-box-office-what-to-know", publishedAt: "Mar 3, 2026", snippet: "Third-biggest documentary opening ever, proving music films remain box office gold." },
        { title: "Trump makes a detour to Elvis Presley's Graceland", source: "PBS", url: "https://www.pbs.org/newshour/politics/amid-iran-war-and-airport-turmoil-trump-makes-a-detour-to-elvis-presleys-graceland", publishedAt: "Mar 23, 2026", snippet: "President took a surprise tour of Graceland while in Memphis, a diversion from the war." }
      ]
    },
    {
      title: "AI Arms Race: GPT-5, Nvidia GTC, and the Inference Revolution",
      summary: "The AI industry is entering a new phase. OpenAI's GPT-5 is now available with built-in reasoning, while GPT-5.4 promises a million-token context window and 'extreme' thinking mode. At Nvidia's GTC conference, CEO Jensen Huang unveiled new chips targeting AI inference rather than training. Alibaba is launching enterprise AI agents based on Qwen models. Meanwhile, OpenClaw went viral, got acquired by OpenAI, and spawned an ecosystem of spinoffs.",
      category: "tech",
      trendScore: 86,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "TechCrunch", handle: "@TechCrunch", content: "The biggest AI story of 2026 so far: OpenClaw went viral, spawned spinoff companies, suffered privacy snafus, then got acquired by OpenAI. Meta bought one of its clones.", url: "https://x.com/TechCrunch", timestamp: "3d ago", likes: 42100, reposts: 16800 },
        { platform: "x", author: "NVIDIA", handle: "@nvidia", content: "GTC 2026: The next phase of the AI boom is about inference, not training. New chips, new software, new economics. The AI infrastructure stack is being rebuilt.", url: "https://x.com/nvidia", timestamp: "1w ago", likes: 56300, reposts: 22100 },
        { platform: "bluesky", author: "OpenAI", handle: "@openai.bsky.social", content: "GPT-5 is here. Our smartest, fastest, and most useful model yet, with thinking built in. Available to everyone.", url: "https://bsky.app/profile/openai.bsky.social", timestamp: "3w ago", likes: 89200, reposts: 34500 },
        { platform: "threads", author: "Ars Technica", handle: "@arstechnica", content: "GPT-5.4 is reportedly bringing a million-token context window and an 'extreme' reasoning mode that burns significantly more compute. The race continues.", url: "https://www.threads.net/@arstechnica", timestamp: "2w ago", likes: 18700, reposts: 7200 }
      ],
      newsArticles: [
        { title: "The biggest AI stories of the year (so far)", source: "TechCrunch", url: "https://techcrunch.com/2026/03/13/the-biggest-ai-stories-of-the-year-so-far/", publishedAt: "Mar 13, 2026", snippet: "OpenClaw went viral, spawned companies, got acquired by OpenAI. Meta bought a Reddit-clone for AI agents." },
        { title: "Introducing GPT-5", source: "OpenAI", url: "https://openai.com/index/introducing-gpt-5/", publishedAt: "Feb 25, 2026", snippet: "Our smartest model yet with extended reasoning. New SOTA on GPQA, scoring 88.4% without tools." },
        { title: "Top Tech News: Nvidia GTC, AI Inference Revolution", source: "Tech Startups", url: "https://techstartups.com/2026/03/16/top-tech-news-today-march-16-2026/", publishedAt: "Mar 16, 2026", snippet: "CEO Jensen Huang unveils new chips as AI shifts from training to inference-focused deployments." }
      ]
    },
    {
      title: "Bitcoin Struggles Below $70K as Inflation Data Weighs",
      summary: "Bitcoin is trading around $69,370, down over $17,000 from a year ago. Hotter-than-expected wholesale inflation data is putting pressure on crypto markets, though they are outperforming Wall Street. The broader crypto market faces headwinds from rising oil prices, Fed rate hike expectations, and global market uncertainty driven by the Iran conflict.",
      category: "crypto",
      trendScore: 74,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "CoinDesk", handle: "@CoinDesk", content: "Bitcoin at $69,370 - down $3,113 from yesterday. Market cap $1.33T. Crypto outperforming equities but inflation data weighing on risk assets.", url: "https://x.com/CoinDesk", timestamp: "5h ago", likes: 14200, reposts: 5600 },
        { platform: "bluesky", author: "CNBC Crypto", handle: "@cnbc-crypto.bsky.social", content: "Bitcoin faces pressure after hotter-than-expected inflation data. Crypto markets on pace to outperform Wall Street despite the pullback.", url: "https://bsky.app/profile/cnbc-crypto.bsky.social", timestamp: "6d ago", likes: 4800, reposts: 1900 },
        { platform: "threads", author: "Fortune", handle: "@fortunemag", content: "Bitcoin at $69K with a $1.33T market cap puts it well ahead of Ethereum at $233B. The gap between the top two cryptos continues to widen.", url: "https://www.threads.net/@fortunemag", timestamp: "5d ago", likes: 7300, reposts: 2800 }
      ],
      newsArticles: [
        { title: "Current price of Bitcoin for March 19, 2026", source: "Fortune", url: "https://fortune.com/article/price-of-bitcoin-03-19-2026/", publishedAt: "Mar 19, 2026", snippet: "BTC at $69,370. Market cap $1.33T. Down about $17,450 from a year ago." },
        { title: "Bitcoin faces pressure after hotter-than-expected inflation data", source: "CNBC", url: "https://www.cnbc.com/video/2026/03/18/bitcoin-faces-pressure-after-hotter-than-expected-inflation-data-cnbc-crypto-world.html", publishedAt: "Mar 18, 2026", snippet: "Crypto markets outperforming Wall Street despite pullback driven by wholesale data." }
      ]
    },
    {
      title: "Star Trek: Starfleet Academy Falls Out of Top 10 Worldwide",
      summary: "Paramount+'s Star Trek: Starfleet Academy has fallen out of the streaming top 10 in the US and eight other countries including Canada, UK, Germany, and France. Despite an 88% critics score on Rotten Tomatoes, the audience score sits at just 43%. The show's Season 1 finale failed to crack the Paramount+ US top 10, signaling significant viewer dropoff from a divisive debut.",
      category: "entertainment",
      trendScore: 71,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "Screen Rant", handle: "@screenaborhi", content: "Star Trek: Starfleet Academy has fallen out of Paramount+'s Top 10 in 9 countries. 88% critics vs 43% audience on Rotten Tomatoes tells the whole story.", url: "https://x.com/screenaborhi", timestamp: "2d ago", likes: 11800, reposts: 4500 },
        { platform: "mastodon", author: "Trek Talk", handle: "@trektalk@mastodon.social", content: "The Starfleet Academy discourse continues: Critics say 88% fresh, audiences say 43%. The show once hit #1 in Italy and #4 in Germany/Austria but has completely dropped off.", url: "https://mastodon.social/@trektalk", timestamp: "3d ago", likes: 2400, reposts: 890 },
        { platform: "bluesky", author: "CBR", handle: "@cbr.bsky.social", content: "Star Trek: Starfleet Academy was absent from Paramount+'s US top 10 following its Season 1 finale. A rough sign for the franchise's future.", url: "https://bsky.app/profile/cbr.bsky.social", timestamp: "1w ago", likes: 3600, reposts: 1400 }
      ],
      newsArticles: [
        { title: "Star Trek's Controversial New Series Hits Major Streaming Setback", source: "Screen Rant", url: "https://screenrant.com/star-trek-starfleet-academy-streaming-struggles-january-2026/", publishedAt: "Jan 28, 2026", snippet: "As of January 26, the show is not in the Paramount+ Top Ten for any of 9 tracked countries." },
        { title: "Star Trek: Starfleet Academy Struggles on Streaming After Season 1 Finale", source: "CBR", url: "https://www.cbr.com/star-trek-starfleet-academy-ratings-paramount-plus-streaming/", publishedAt: "Mar 13, 2026", snippet: "Despite a high-profile release, the show was absent from Paramount+'s US top 10." }
      ]
    },
    {
      title: "FDA Approves New Alzheimer's Treatment Showing 35% Cognitive Decline Reduction",
      summary: "The FDA granted full approval to a new anti-amyloid therapy that showed a 35% reduction in cognitive decline over 18 months in Phase 3 trials. Unlike previous treatments, this drug can be administered via monthly injections rather than IV infusions. Medicare confirmed it will cover the treatment, expected to cost $26,500 per year. Shares of the pharmaceutical company surged 18% on the news.",
      category: "health",
      trendScore: 83,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "STAT News", handle: "@statnews", content: "BREAKING: FDA grants full approval to new Alzheimer's drug showing 35% reduction in cognitive decline. Monthly injection format could dramatically expand access.", url: "https://x.com/statnews", timestamp: "4h ago", likes: 28900, reposts: 12400 },
        { platform: "bluesky", author: "Nature Medicine", handle: "@naturemedicine.bsky.social", content: "Phase 3 data: 35% slowing of cognitive decline at 18 months. Statistically significant across all subgroups. The most promising Alzheimer's result in a decade.", url: "https://bsky.app/profile/naturemedicine.bsky.social", timestamp: "6h ago", likes: 9200, reposts: 3800 },
        { platform: "threads", author: "CNN Health", handle: "@cnnhealth", content: "Medicare will cover the new Alzheimer's treatment at $26,500/year. An estimated 6.7 million Americans currently live with Alzheimer's disease.", url: "https://www.threads.net/@cnnhealth", timestamp: "5h ago", likes: 15600, reposts: 6100 },
        { platform: "mastodon", author: "Medical News", handle: "@medicalnews@mastodon.social", content: "Unlike lecanemab and donanemab which require IV infusion, the new drug's monthly injection format is a game-changer for accessibility and patient compliance.", url: "https://mastodon.social/@medicalnews", timestamp: "8h ago", likes: 4100, reposts: 1700 }
      ],
      newsArticles: [
        { title: "FDA Approves New Alzheimer's Drug With Strongest Efficacy Data Yet", source: "STAT News", url: "https://www.statnews.com/2026/03/24/fda-alzheimers-drug-approval/", publishedAt: "Mar 24, 2026", snippet: "The treatment showed a 35% reduction in cognitive decline in an 18-month Phase 3 trial." },
        { title: "Medicare to Cover New Alzheimer's Treatment", source: "Reuters", url: "https://reuters.com/business/healthcare-pharmaceuticals/medicare-cover-alzheimers-drug-2026-03-24/", publishedAt: "Mar 24, 2026", snippet: "Coverage confirmed at $26,500 per year, potentially reaching millions of patients." },
        { title: "Pharma Stock Surges 18% on Alzheimer's Drug Approval", source: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-03-24/alzheimers-drug-fda-approval", publishedAt: "Mar 24, 2026", snippet: "Shares jumped on the news as analysts raised price targets across the sector." }
      ]
    },
    {
      title: "Reddit IPO One-Year Anniversary: Stock Doubles From Debut Price",
      summary: "Reddit marks one year as a public company with its stock trading at roughly double the IPO price. The platform has seen record engagement fueled by AI-driven content recommendations, though the company faces ongoing controversy over data licensing deals with AI companies. Reddit's advertising revenue grew 42% year-over-year, beating analyst expectations for the fourth consecutive quarter.",
      category: "tech",
      trendScore: 68,
      imageUrl: null,
      socialPosts: [
        { platform: "x", author: "The Verge", handle: "@verge", content: "Reddit turns one year old as a public company. Stock is trading at ~2x the IPO price. AI data licensing deals contributing significantly to revenue growth.", url: "https://x.com/verge", timestamp: "1d ago", likes: 12300, reposts: 4800 },
        { platform: "bluesky", author: "Platformer", handle: "@platformer.bsky.social", content: "Reddit's Q4 ad revenue up 42% YoY. But the company's AI data licensing deals remain controversial among the community that generates that data.", url: "https://bsky.app/profile/platformer.bsky.social", timestamp: "1d ago", likes: 6700, reposts: 2600 },
        { platform: "threads", author: "TechCrunch", handle: "@techcrunch", content: "From meme stocks to actual stock: Reddit at 1 year public. Revenue growth strong, user numbers up, but moderator burnout and AI concerns persist.", url: "https://www.threads.net/@techcrunch", timestamp: "2d ago", likes: 8900, reposts: 3400 }
      ],
      newsArticles: [
        { title: "Reddit Marks First Year as Public Company With Stock Near All-Time Highs", source: "Wall Street Journal", url: "https://www.wsj.com/tech/reddit-ipo-anniversary-stock-performance-2026", publishedAt: "Mar 21, 2026", snippet: "Shares are trading roughly double the March 2024 IPO price of $34." },
        { title: "Reddit's Ad Business Continues to Outperform", source: "The Information", url: "https://www.theinformation.com/articles/reddit-advertising-growth-2026", publishedAt: "Mar 22, 2026", snippet: "Q4 advertising revenue grew 42% year-over-year, beating expectations for the fourth quarter in a row." }
      ]
    }
  ];

// Convert to the same shape as TrendingStory (with JSON strings)
export const SEED_STORIES: StaticStory[] = rawStories.map((s, i) => ({
  id: i + 1,
  title: s.title,
  summary: s.summary,
  category: s.category,
  trendScore: s.trendScore,
  imageUrl: s.imageUrl,
  socialPosts: JSON.stringify(s.socialPosts),
  newsArticles: JSON.stringify(s.newsArticles),
  updatedAt: new Date().toISOString(),
}));

export function getStoriesByCategory(category: string): StaticStory[] {
  if (category === "all") return SEED_STORIES;
  return SEED_STORIES.filter((s) => s.category === category);
}
