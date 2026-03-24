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
  socialPosts: string;
  newsArticles: string;
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
    },
  // ─── GEOPOLITICS (5 new) ────────────────────────────────────────────────────

  {
    title: "LaGuardia Tragedy: Air Canada Plane Collides With Fire Truck, 2 Pilots Killed",
    summary: "An Air Canada regional jet collided with a fire truck while landing at New York's LaGuardia Airport late Sunday night, killing both pilots and sending 41 passengers and crew to area hospitals. The aircraft was on final approach when emergency vehicles were responding to an unrelated incident on the taxiway. LaGuardia was closed for several hours as federal investigators from the NTSB arrived on scene. The collision is now one of the deadliest US aviation accidents in more than a decade.",
    category: "geopolitics",
    trendScore: 97,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Breaking News", handle: "@BreakingNews", content: "BREAKING: Two pilots killed, 41 hospitalized after Air Canada plane strikes fire truck on landing at LaGuardia Airport. NTSB deploying investigators. LaGuardia closed.", url: "https://x.com/BreakingNews", timestamp: "3h ago", likes: 78400, reposts: 31200 },
      { platform: "x", author: "CNN Breaking News", handle: "@CNNbrk", content: "Air Canada plane collides with fire truck at LaGuardia. Both pilots are dead. FAA and NTSB on scene. Airport closed for emergency operations. Updates coming.", url: "https://x.com/CNNbrk", timestamp: "4h ago", likes: 54100, reposts: 22700 },
      { platform: "threads", author: "New York Post", handle: "@nypost", content: "LaGuardia horror: Air Canada jet slams into fire truck on landing. 2 pilots dead, dozens rushed to hospitals. Emergency vehicles were responding to a separate incident on the taxiway.", url: "https://www.threads.net/@nypost", timestamp: "4h ago", likes: 31200, reposts: 10800 },
      { platform: "bluesky", author: "NBC News", handle: "@nbcnews.bsky.social", content: "Deadly collision at LaGuardia Airport: Air Canada regional aircraft struck a fire truck during landing. The airport is closed as NTSB investigators arrive. 41 people transported to hospitals.", url: "https://bsky.app/profile/nbcnews.bsky.social", timestamp: "5h ago", likes: 18900, reposts: 7600 },
      { platform: "mastodon", author: "Reuters", handle: "@reuters@mastodon.social", content: "LaGuardia airport closed after Air Canada plane collision with fire truck. Two pilots killed, 41 hospitalized. NTSB launching full investigation into the deadliest US aviation incident in years.", url: "https://mastodon.social/@reuters", timestamp: "5h ago", likes: 7300, reposts: 3100 }
    ],
    newsArticles: [
      { title: "Air Canada plane hits fire truck at LaGuardia Airport, 2 pilots dead, dozens hurt", source: "NBC News", url: "https://www.nbcnews.com/news/us-news/air-canada-plane-fire-truck-laguardia-airport-rcna200174", publishedAt: "Mar 24, 2026", snippet: "Federal investigators are headed to LaGuardia after a collision between an Air Canada regional jet and a fire truck killed both pilots and injured 41 others." },
      { title: "LaGuardia Airport closed after deadly Air Canada crash", source: "CNN", url: "https://www.cnn.com/2026/03/24/us/laguardia-air-canada-fire-truck-crash/index.html", publishedAt: "Mar 24, 2026", snippet: "Two pilots were killed and 41 people hospitalized after the collision during a late-night landing at LaGuardia Airport." },
      { title: "NTSB investigating Air Canada crash at New York's LaGuardia", source: "New York Post", url: "https://nypost.com/2026/03/24/news/air-canada-plane-collides-with-fire-truck-at-laguardia-airport/", publishedAt: "Mar 24, 2026", snippet: "The National Transportation Safety Board is sending a full go-team to investigate the deadly collision." }
    ]
  },

  {
    title: "Zelensky: Russia Feeding Iran 'Irrefutable' Signals Intelligence to Prolong Conflict",
    summary: "Ukrainian President Volodymyr Zelensky announced that Kyiv has obtained what he described as 'irrefutable' evidence that Russia is providing Iran with signals intelligence to help counter US and Israeli military operations. Zelensky shared the findings after a meeting with the head of Ukrainian military intelligence, warning that the arrangement could significantly prolong the Middle East conflict. US and European officials said they were studying the claims. The revelation deepens concern about a Russia-Iran intelligence-sharing axis that could reshape the war's trajectory.",
    category: "geopolitics",
    trendScore: 93,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Reuters", handle: "@Reuters", content: "Zelensky says Ukraine has 'irrefutable' evidence Russia is supplying Iran with signals intelligence during the ongoing Iran-US conflict. Warns it could prolong the war.", url: "https://x.com/Reuters", timestamp: "6h ago", likes: 41200, reposts: 16500 },
      { platform: "x", author: "The Straits Times", handle: "@STcom", content: "Ukraine intelligence chief brief Zelensky on Russia-Iran intel sharing. Moscow reportedly providing targeting data that has helped Iran deflect US and Israeli strikes.", url: "https://x.com/STcom", timestamp: "7h ago", likes: 18700, reposts: 7200 },
      { platform: "bluesky", author: "US News", handle: "@usnews.bsky.social", content: "If confirmed, Russia providing Iran signals intelligence would mark a dangerous new escalation in the conflict and complicate US strategy in the Middle East.", url: "https://bsky.app/profile/usnews.bsky.social", timestamp: "8h ago", likes: 9400, reposts: 3800 },
      { platform: "threads", author: "Al Jazeera English", handle: "@aljazeeraenglish", content: "Zelensky calls on European allies to respond to Russia-Iran intelligence cooperation after presenting evidence to military officials. The implications for the broader conflict are significant.", url: "https://www.threads.net/@aljazeeraenglish", timestamp: "9h ago", likes: 14300, reposts: 5700 },
      { platform: "mastodon", author: "Foreign Policy", handle: "@foreignpolicy@mastodon.social", content: "Ukraine's claim of Russia-Iran intelligence coordination raises urgent questions about how the Kremlin is weaponizing the Middle East crisis against NATO interests.", url: "https://mastodon.social/@foreignpolicy", timestamp: "10h ago", likes: 4100, reposts: 1900 }
    ],
    newsArticles: [
      { title: "Zelensky says Russia is providing Iran with signals intelligence", source: "Reuters", url: "https://www.reuters.com/world/zelensky-says-russia-providing-iran-intelligence-2026-03-24/", publishedAt: "Mar 24, 2026", snippet: "Ukraine's president says the evidence is 'irrefutable' and could extend the duration of the ongoing Iran-US military conflict." },
      { title: "Ukraine says Russia, Iran sharing intelligence to fight US and Israel", source: "US News & World Report", url: "https://www.usnews.com/news/world/articles/2026-03-24/ukraine-says-russia-providing-iran-with-signals-intelligence", publishedAt: "Mar 24, 2026", snippet: "Zelensky presented the findings after meeting with the head of Ukraine's GUR military intelligence directorate." },
      { title: "Russia allegedly providing Iran with signals intelligence during conflict", source: "The Straits Times", url: "https://www.straitstimes.com/world/europe/russia-iran-intelligence-cooperation-zelensky-2026", publishedAt: "Mar 24, 2026", snippet: "Ukrainian intelligence claims Russia is feeding targeting data to Iran to help counter American and Israeli strikes." }
    ]
  },

  {
    title: "Government Shutdown Day 32: TSA Meltdown Hits Airports as 366 Screeners Quit",
    summary: "The partial US government shutdown entered its 32nd day with no resolution in sight, triggering a cascading crisis at major airports as 366 TSA security screeners have resigned since paychecks stopped. Unscheduled absence rates have hit 30-55% at some airports, with wait times stretching up to three hours at Houston Intercontinental, JFK, Atlanta Hartsfield, and Philadelphia. ICE has been deployed to 14 airports to assist overwhelmed TSA staff. A coalition of US airlines has issued an open letter to Congress calling for an emergency resolution as the peak spring travel season begins.",
    category: "geopolitics",
    trendScore: 91,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Politico", handle: "@politico", content: "TSA MELTDOWN: 366 screeners have quit since the shutdown began. Unscheduled absence rates 30-55% at major airports. 3-hour security lines at JFK, Houston, Atlanta. ICE deployed to 14 airports.", url: "https://x.com/politico", timestamp: "2h ago", likes: 52300, reposts: 21400 },
      { platform: "x", author: "TIME", handle: "@TIME", content: "Day 32 of the government shutdown. TSA workers haven't been paid in over a month. Philadelphia is closing security checkpoints due to staffing shortages. Airlines are furious.", url: "https://x.com/TIME", timestamp: "3h ago", likes: 38900, reposts: 15600 },
      { platform: "threads", author: "Reuters", handle: "@reuters", content: "US airline coalition sends emergency letter to Congress: 'The shutdown is threatening the busiest travel season in American history.' The World Cup and America250 are just months away.", url: "https://www.threads.net/@reuters", timestamp: "4h ago", likes: 22700, reposts: 9100 },
      { platform: "bluesky", author: "NPR News", handle: "@npr.bsky.social", content: "ICE agents deployed to major airports to help screen passengers as TSA staffing collapses. Critics say using immigration enforcement for aviation security is dangerous and inappropriate.", url: "https://bsky.app/profile/npr.bsky.social", timestamp: "5h ago", likes: 14600, reposts: 6200 },
      { platform: "mastodon", author: "The Guardian US", handle: "@guardian@mastodon.social", content: "Airport security lines are the face of the government shutdown for millions of Americans. With no deal in sight in Congress, summer travel plans may be in serious jeopardy.", url: "https://mastodon.social/@guardian", timestamp: "6h ago", likes: 6800, reposts: 2900 }
    ],
    newsArticles: [
      { title: "TSA absences, lines surge at airports as partial government shutdown continues", source: "Reuters", url: "https://www.reuters.com/world/us/tsa-absences-lines-surge-airports-government-shutdown-2026-03-24/", publishedAt: "Mar 24, 2026", snippet: "More than 366 TSA screeners have quit, with absence rates hitting 30-55% at some major airports during the 32-day partial shutdown." },
      { title: "Airlines demand Congress end shutdown as airport chaos deepens", source: "Politico", url: "https://www.politico.com/news/2026/03/24/airlines-shutdown-tsa-airports-congress-00200174", publishedAt: "Mar 24, 2026", snippet: "A coalition of US carriers sent an open letter calling for an emergency resolution as three-hour security waits spread to major hubs." },
      { title: "Government shutdown: ICE deployed at 14 airports as TSA crisis worsens", source: "TIME", url: "https://time.com/7268100/government-shutdown-tsa-crisis-airports-2026/", publishedAt: "Mar 24, 2026", snippet: "Immigration agents are being used to fill security gaps at major US airports as the 32-day shutdown strains the aviation system." }
    ]
  },

  {
    title: "Italy's Meloni Suffers Stinging Referendum Defeat as Voters Reject Judicial Overhaul",
    summary: "Italian Prime Minister Giorgia Meloni's government suffered a significant political blow when 53.7% of voters rejected a constitutional referendum that would have overhauled the country's judiciary and concentrated more power in the executive. The vote saw the highest turnout for a constitutional referendum in years and is seen as a major rebuke of Meloni's right-wing coalition ahead of the 2027 general elections. Opposition parties called the result a 'vote for democracy,' while Meloni vowed to pursue judicial reform through other legislative means.",
    category: "geopolitics",
    trendScore: 87,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Reuters", handle: "@Reuters", content: "Italy's constitutional referendum FAILS: 53.7% vote No, rejecting Meloni's judicial reform plan. Biggest turnout for an Italian constitutional vote in years. Major blow for the PM ahead of 2027 elections.", url: "https://x.com/Reuters", timestamp: "10h ago", likes: 28600, reposts: 11400 },
      { platform: "x", author: "Bloomberg", handle: "@business", content: "Meloni's judicial reform referendum defeated 53.7% to 46.3%. Opposition says voters 'chose democracy.' PM vows to pursue reforms through parliament instead.", url: "https://x.com/business", timestamp: "11h ago", likes: 16300, reposts: 6500 },
      { platform: "threads", author: "Al Jazeera English", handle: "@aljazeeraenglish", content: "Italy referendum result: The No vote wins with 53.7%. Meloni's constitutional overhaul is dead — for now. The result complicates her government's agenda ahead of the 2027 vote.", url: "https://www.threads.net/@aljazeeraenglish", timestamp: "12h ago", likes: 11200, reposts: 4300 },
      { platform: "bluesky", author: "The Guardian", handle: "@guardian.bsky.social", content: "Italian voters reject Meloni's judicial reform in referendum. Highest turnout for a constitutional vote in over a decade. Opposition celebrates 'a victory for the rule of law.'", url: "https://bsky.app/profile/guardian.bsky.social", timestamp: "13h ago", likes: 8900, reposts: 3700 },
      { platform: "mastodon", author: "Politico Europe", handle: "@politicoeurope@mastodon.social", content: "The Italian referendum defeat is a major setback for Meloni — and for right-wing populists across Europe who were watching closely. 53.7% said No to her judicial overhaul.", url: "https://mastodon.social/@politicoeurope", timestamp: "14h ago", likes: 5200, reposts: 2100 }
    ],
    newsArticles: [
      { title: "Italy votes No in Meloni's constitutional referendum on judicial reform", source: "Reuters", url: "https://www.reuters.com/world/europe/italy-referendum-judicial-reform-meloni-2026-03-24/", publishedAt: "Mar 24, 2026", snippet: "53.7% of Italians rejected the referendum, dealing a significant blow to Prime Minister Meloni's government ahead of 2027 elections." },
      { title: "Meloni's Italy: What the referendum defeat means for Europe's right", source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-24/italy-meloni-referendum-defeat-judicial-reform", publishedAt: "Mar 24, 2026", snippet: "The result was seen as a major rebuke of the right-wing coalition and signals potential trouble for Meloni's legislative agenda." },
      { title: "Italian voters reject constitutional referendum in blow to Meloni", source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/3/24/italians-reject-meloni-referendum-judicial-reform", publishedAt: "Mar 24, 2026", snippet: "The highest turnout for a constitutional referendum in years produced a clear No majority, with 53.7% opposing the reform." }
    ]
  },

  {
    title: "Israel Strikes Tehran as Iran Threatens to Mine the Persian Gulf",
    summary: "Israeli military aircraft carried out strikes on infrastructure targets in and around the Iranian capital Tehran, marking a dramatic escalation in the ongoing conflict. In retaliation, Iran struck Israel's Dimona nuclear facility, injuring approximately 200 people. Iranian military commanders threatened to lay sea mines across the Persian Gulf to block all maritime traffic — a move that would affect global oil supplies far beyond the Strait of Hormuz. The strikes triggered emergency sessions at the UN Security Council and sent global oil prices to new record highs.",
    category: "geopolitics",
    trendScore: 96,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Breaking News", handle: "@BreakingNews", content: "BREAKING: Israel conducts strikes on Tehran infrastructure. Iran retaliates against Dimona nuclear facility — 200 injured. Iran threatens to mine the Persian Gulf.", url: "https://x.com/BreakingNews", timestamp: "1h ago", likes: 91300, reposts: 38700 },
      { platform: "x", author: "Al Jazeera English", handle: "@AJEnglish", content: "Iran warns it will 'mine the entire Persian Gulf' as Israel strikes targets near Tehran. Oil markets spike. UN Security Council convenes emergency session.", url: "https://x.com/AJEnglish", timestamp: "2h ago", likes: 63200, reposts: 27100 },
      { platform: "threads", author: "Democracy Now", handle: "@democracynow", content: "Israel strikes Tehran. Iran hits Dimona. 200 Israelis injured. Iran now threatening to block not just the Strait of Hormuz but the entire Persian Gulf with sea mines. This is a massive escalation.", url: "https://www.threads.net/@democracynow", timestamp: "2h ago", likes: 34700, reposts: 13900 },
      { platform: "bluesky", author: "The Straits Times", handle: "@straitstimes.bsky.social", content: "Tehran struck by Israeli air force for the first time. Iran fires back at Dimona. Persian Gulf mining threat would shut down Saudi, UAE, and Kuwaiti oil exports entirely.", url: "https://bsky.app/profile/straitstimes.bsky.social", timestamp: "3h ago", likes: 21400, reposts: 9200 },
      { platform: "mastodon", author: "Al Jazeera", handle: "@aljazeera@mastodon.social", content: "Iranian military commanders: 'We will mine every meter of the Persian Gulf if attacks on our territory continue.' Oil prices surge past $115 on the news.", url: "https://mastodon.social/@aljazeera", timestamp: "3h ago", likes: 9800, reposts: 4100 }
    ],
    newsArticles: [
      { title: "Israel strikes Tehran; Iran hits Dimona, threatens to mine Persian Gulf", source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/3/24/israel-strikes-tehran-iran-dimona-persian-gulf-mines", publishedAt: "Mar 24, 2026", snippet: "Israeli aircraft struck infrastructure in Tehran while Iran fired on the Dimona nuclear facility, injuring some 200 people." },
      { title: "Iran threatens Persian Gulf mining after Israeli strikes on Tehran", source: "The Straits Times", url: "https://www.straitstimes.com/world/middle-east/iran-persian-gulf-mines-israel-tehran-strikes-2026", publishedAt: "Mar 24, 2026", snippet: "Iranian commanders vowed to mine the Persian Gulf if strikes on Iranian territory continue, a move that would halt global maritime oil traffic." },
      { title: "UN Security Council convenes emergency session as Middle East conflict escalates", source: "Democracy Now", url: "https://www.democracynow.org/2026/3/24/iran_israel_tehran_dimona_persian_gulf", publishedAt: "Mar 24, 2026", snippet: "The Israeli strikes on Tehran represent the most significant escalation in the conflict since it began 24 days ago." }
    ]
  },

  // ─── BUSINESS (3 new) ────────────────────────────────────────────────────────

  {
    title: "Travis Kelce Signs Record $57.7M Chiefs Extension — Biggest Tight End Deal in NFL History",
    summary: "Kansas City Chiefs tight end Travis Kelce has agreed to a three-year contract extension worth up to $57.735 million, making it the richest deal ever signed by a tight end in NFL history. The deal includes a $12 million first-year salary plus up to $3 million in incentives and extends Kelce's tenure with Kansas City through the 2028 season. Kelce, who turned 36 during Super Bowl week, continues to defy age while remaining the sport's most dominant tight end and one of its most marketable stars.",
    category: "business",
    trendScore: 82,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "NFL", handle: "@NFL", content: "OFFICIAL: Travis Kelce signs a 3-year extension with the Kansas City Chiefs worth up to $57.735M. The biggest tight end contract in NFL history. Kelce is locked up through 2028.", url: "https://x.com/NFL", timestamp: "8h ago", likes: 87400, reposts: 34800 },
      { platform: "x", author: "ESPN", handle: "@ESPN", content: "Travis Kelce, 36, just got the biggest TE deal in league history. $57.7M over 3 years. Year 1: $12M + $3M incentives. Kelce through 2028 with the Chiefs.", url: "https://x.com/ESPN", timestamp: "9h ago", likes: 62100, reposts: 25300 },
      { platform: "threads", author: "USA Today Sports", handle: "@usatodaysports", content: "Travis Kelce extension: $54.735M base, up to $57.735M with incentives. 3 years, through 2028 season. At 36, Kelce is still getting paid like the best TE in the game — because he is.", url: "https://www.threads.net/@usatodaysports", timestamp: "10h ago", likes: 29600, reposts: 11200 },
      { platform: "bluesky", author: "NFL Network", handle: "@nflnetwork.bsky.social", content: "No tight end has ever been paid more than Travis Kelce. The new deal makes it official. 3 years, $57.7M, with Kansas City through the 2028 season.", url: "https://bsky.app/profile/nflnetwork.bsky.social", timestamp: "10h ago", likes: 16800, reposts: 6700 },
      { platform: "mastodon", author: "Heavy Sports", handle: "@heavysports@mastodon.social", content: "Travis Kelce's new contract details: $12M salary in year 1 plus $3M incentives. Remaining years TBD but the deal is worth up to $57.735M through 2028.", url: "https://mastodon.social/@heavysports", timestamp: "11h ago", likes: 5400, reposts: 2100 }
    ],
    newsArticles: [
      { title: "Travis Kelce signs record $57.7 million extension with Kansas City Chiefs", source: "NFL.com", url: "https://www.nfl.com/news/travis-kelce-signs-record-extension-chiefs-2026", publishedAt: "Mar 24, 2026", snippet: "The three-year deal is worth up to $57.735 million and extends through the 2028 season, making it the richest contract in tight end history." },
      { title: "Travis Kelce gets record-breaking Chiefs extension: $57.7M over 3 years", source: "ESPN", url: "https://www.espn.com/nfl/story/_/id/40200174/travis-kelce-record-extension-chiefs-57m", publishedAt: "Mar 24, 2026", snippet: "At 36, Kelce lands the biggest tight end deal ever, locked in with Kansas City through 2028." },
      { title: "Travis Kelce contract details: Biggest tight end deal in NFL history explained", source: "USA Today", url: "https://www.usatoday.com/story/sports/nfl/chiefs/2026/03/24/travis-kelce-contract-extension-details/", publishedAt: "Mar 24, 2026", snippet: "The deal includes $12M in year one with incentives and could pay Kelce $57.735M over three seasons." }
    ]
  },

  {
    title: "$23 Billion in US Arms Sales to UAE, Kuwait, and Jordan Bypass Congress",
    summary: "The Trump administration has advanced approximately $23 billion in weapons sales to Gulf state allies — including the United Arab Emirates, Kuwait, and Jordan — without seeking formal Congressional approval, according to government officials and advocacy groups. The sales include advanced munitions, air defense systems, and armored vehicles. Critics argue the move sets a dangerous precedent during an active regional conflict and circumvents Congress's constitutional role in overseeing arms exports. The administration defended the sales as essential to regional deterrence while the Iran conflict continues.",
    category: "business",
    trendScore: 75,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Democracy Now", handle: "@democracynow", content: "$23 BILLION in US arms sales to UAE, Kuwait, and Jordan — advancing without Congressional approval during the ongoing Iran conflict. Critics call it an unconstitutional end-run.", url: "https://x.com/democracynow", timestamp: "6h ago", likes: 24100, reposts: 9800 },
      { platform: "x", author: "Reuters", handle: "@Reuters", content: "Trump admin bypasses Congress on $23B in Gulf arms sales. Sales include air defense systems, munitions to UAE, Kuwait, Jordan. Administration says it's critical for regional stability.", url: "https://x.com/Reuters", timestamp: "7h ago", likes: 17300, reposts: 6900 },
      { platform: "threads", author: "Al Jazeera English", handle: "@aljazeeraenglish", content: "$23 billion in American weapons flowing to UAE, Kuwait, and Jordan without a Congressional vote. The move comes as the Iran conflict reshapes Middle East alliances.", url: "https://www.threads.net/@aljazeeraenglish", timestamp: "8h ago", likes: 12800, reposts: 5100 },
      { platform: "bluesky", author: "The Intercept", handle: "@theintercept.bsky.social", content: "The $23B arms sales to Gulf states are the largest circumvention of the Arms Export Control Act notification process in recent memory, arms control experts say.", url: "https://bsky.app/profile/theintercept.bsky.social", timestamp: "9h ago", likes: 8600, reposts: 3700 },
      { platform: "mastodon", author: "Arms Control Wonk", handle: "@armscontrol@mastodon.social", content: "Congress was not formally notified of $23B in Gulf arms sales. During an active regional war, this level of escalation without legislative oversight is deeply concerning.", url: "https://mastodon.social/@armscontrol", timestamp: "10h ago", likes: 3900, reposts: 1600 }
    ],
    newsArticles: [
      { title: "$23 billion in US arms sales to Gulf states advance without Congress", source: "Democracy Now", url: "https://www.democracynow.org/2026/3/24/us_arms_sales_gulf_states_congress", publishedAt: "Mar 24, 2026", snippet: "The Trump administration is advancing $23 billion in weapons sales to UAE, Kuwait, and Jordan without formal congressional notification during the Iran conflict." },
      { title: "US arms sales to Gulf states bypass Congressional oversight", source: "Reuters", url: "https://www.reuters.com/world/middle-east/us-arms-sales-gulf-states-congress-2026-03-24/", publishedAt: "Mar 24, 2026", snippet: "Critics say the move circumvents the Arms Export Control Act as the administration pushes weapons to regional allies." },
      { title: "Pentagon approves $23B Gulf arms package as Iran conflict continues", source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/3/24/us-23-billion-arms-sales-uae-kuwait-jordan-congress", publishedAt: "Mar 24, 2026", snippet: "Air defense systems, munitions, and armored vehicles headed to three Gulf nations without a formal congressional vote." }
    ]
  },

  {
    title: "Airlines Issue Emergency Letter to Congress as Shutdown Threatens Record Travel Season",
    summary: "A coalition of major US airlines has sent an urgent open letter to Congressional leaders demanding an immediate end to the 32-day partial government shutdown, warning that cascading TSA staffing failures could devastate the biggest travel season in American history. Airlines cited the approaching FIFA World Cup hosted jointly by the US, Canada, and Mexico, and the America250 national celebrations, as events that could be severely impacted. Philadelphia International Airport has already begun closing security checkpoints, and carriers warned that continued deterioration could force flight cancellations on a massive scale.",
    category: "business",
    trendScore: 71,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Politico", handle: "@politico", content: "AIRLINES TO CONGRESS: End the shutdown NOW. Open letter from US carriers warns the World Cup, America250 travel surge, and summer season could all be at risk from TSA collapse.", url: "https://x.com/politico", timestamp: "4h ago", likes: 31200, reposts: 12600 },
      { platform: "x", author: "TIME", handle: "@TIME", content: "Major US airlines demand Congress resolve the shutdown. Philadelphia closing security checkpoints. Airlines warn of mass cancellations if the staffing crisis isn't solved immediately.", url: "https://x.com/TIME", timestamp: "5h ago", likes: 22400, reposts: 8900 },
      { platform: "threads", author: "Bloomberg", handle: "@bloomberg", content: "Airlines vs. Congress: Carriers send emergency letter warning the shutdown threatens the World Cup, America250, and the most-traveled summer in US history. The financial stakes are enormous.", url: "https://www.threads.net/@bloomberg", timestamp: "6h ago", likes: 15100, reposts: 6000 },
      { platform: "bluesky", author: "WSJ Markets", handle: "@wsjmarkets.bsky.social", content: "US airline industry formally enters the government shutdown fight. Open letter to Congress warns of mass cancellations and billions in losses if TSA staffing isn't restored.", url: "https://bsky.app/profile/wsjmarkets.bsky.social", timestamp: "7h ago", likes: 9200, reposts: 3800 }
    ],
    newsArticles: [
      { title: "Airlines send emergency letter to Congress over shutdown TSA crisis", source: "Politico", url: "https://www.politico.com/news/2026/03/24/airlines-shutdown-letter-tsa-world-cup-00200179", publishedAt: "Mar 24, 2026", snippet: "US carriers warn the shutdown is threatening the World Cup and America250 celebrations, demanding an immediate resolution from Congress." },
      { title: "Philadelphia airport closes checkpoints as shutdown stretches airline operations", source: "TIME", url: "https://time.com/7268105/airlines-shutdown-congress-tsa-world-cup-america250/", publishedAt: "Mar 24, 2026", snippet: "Airlines told Congress that Philadelphia International has already begun closing security checkpoints due to TSA staffing shortages." },
      { title: "Airlines warn shutdown could force mass flight cancellations ahead of World Cup", source: "Reuters", url: "https://www.reuters.com/business/aerospace-defense/airlines-warn-congress-shutdown-tsa-world-cup-2026-03-24/", publishedAt: "Mar 24, 2026", snippet: "A coalition of US carriers says the partial government shutdown could have devastating effects on the most-traveled summer in American history." }
    ]
  },

  // ─── TECH (4 new) ────────────────────────────────────────────────────────────

  {
    title: "Humanoid Robot Plays Tennis in Real Time Using AI — Galbot LATENT Achieves 96% Accuracy",
    summary: "Researchers at Galbot unveiled LATENT, a system allowing a Unitree G1 humanoid robot to play tennis rallies in real time using a combination of computer vision, proprioceptive control, and a large learned policy model. The robot was trained on just five hours of recorded data but achieved a 96% success rate on forehand shots during testing. Researchers noted the system could generalize to other racket sports like badminton and potentially to other fast-reaction physical tasks. The breakthrough is widely seen as a milestone in general-purpose physical AI.",
    category: "tech",
    trendScore: 78,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "TechCrunch", handle: "@TechCrunch", content: "A humanoid robot just learned to play tennis from 5 hours of data — and it hits forehands with 96% accuracy in real time. Galbot's LATENT system is a huge deal for physical AI.", url: "https://x.com/TechCrunch", timestamp: "1d ago", likes: 48200, reposts: 19400 },
      { platform: "x", author: "The Verge", handle: "@verge", content: "Galbot LATENT: A Unitree G1 humanoid robot rallying tennis shots in real time. Trained on just 5 hours of data. 96% forehand success rate. Could generalize to football, badminton and beyond.", url: "https://x.com/verge", timestamp: "1d ago", likes: 33700, reposts: 13600 },
      { platform: "bluesky", author: "Ars Technica", handle: "@arstechnica.bsky.social", content: "Galbot's LATENT tennis robot is genuinely impressive: 96% accuracy, trained on minimal data, running in real time on a humanoid platform. This is physical AI growing up fast.", url: "https://bsky.app/profile/arstechnica.bsky.social", timestamp: "1d ago", likes: 14300, reposts: 5800 },
      { platform: "threads", author: "Wired", handle: "@wired", content: "First tennis-playing humanoid robot achieves near-human accuracy on forehands. Galbot says the system can generalize to other sports. The robot sports era may be upon us.", url: "https://www.threads.net/@wired", timestamp: "1d ago", likes: 21600, reposts: 8700 },
      { platform: "mastodon", author: "Neural Buddies", handle: "@neuralbuddies@mastodon.social", content: "Galbot LATENT plays tennis — for real. 96% forehand accuracy, real-time reaction, trained on 5 hours of data. Physical AI is having its GPT-3 moment right now.", url: "https://mastodon.social/@neuralbuddies", timestamp: "2d ago", likes: 6200, reposts: 2500 }
    ],
    newsArticles: [
      { title: "Humanoid robot plays tennis in real time with 96% forehand accuracy", source: "NeuralBuddies", url: "https://www.neuralbuddies.com/p/galbot-latent-tennis-robot-2026", publishedAt: "Mar 23, 2026", snippet: "Galbot's LATENT system enables a Unitree G1 robot to rally tennis shots in real time, achieving a 96% forehand success rate after training on just 5 hours of data." },
      { title: "Galbot LATENT: The humanoid tennis robot that could change physical AI", source: "TechCrunch", url: "https://techcrunch.com/2026/03/23/galbot-latent-tennis-robot-humanoid-ai/", publishedAt: "Mar 23, 2026", snippet: "The system generalizes from tennis to other fast-reaction physical tasks, suggesting broad applicability for humanoid robots." },
      { title: "Watch a humanoid robot return tennis shots in real time", source: "The Verge", url: "https://www.theverge.com/2026/3/23/galbot-latent-tennis-humanoid-robot", publishedAt: "Mar 23, 2026", snippet: "Trained on five hours of video data, the Unitree G1 achieved 96% accuracy on forehand shots during live testing." }
    ]
  },

  {
    title: "MIT's AI Uses WiFi Signals to See Through Walls and Map Indoor Spaces",
    summary: "Researchers at MIT have developed a generative AI system that can reconstruct three-dimensional maps of indoor environments using only WiFi signal reflections — effectively enabling machines to 'see through walls.' The system analyzes how wireless signals bounce off objects and surfaces, then uses a diffusion model to reconstruct the 3D geometry of an unseen room. Researchers say the technology could dramatically improve robotic navigation and object manipulation without requiring any cameras. The approach raises both promising applications in robotics and accessibility, as well as privacy concerns.",
    category: "tech",
    trendScore: 85,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "MIT News", handle: "@mitnews", content: "New from MIT: A generative AI system that maps indoor spaces using only WiFi signals — no cameras needed. The system can reconstruct 3D geometry from wireless reflections alone.", url: "https://x.com/mitnews", timestamp: "2d ago", likes: 56800, reposts: 22700 },
      { platform: "x", author: "Ars Technica", handle: "@arstechnica", content: "MIT researchers built an AI that sees through walls using WiFi. It generates 3D maps of indoor rooms from signal reflections. Implications for robotics, search-and-rescue, and yes, privacy.", url: "https://x.com/arstechnica", timestamp: "2d ago", likes: 41200, reposts: 16900 },
      { platform: "bluesky", author: "NeuralBuddies", handle: "@neuralbuddies.bsky.social", content: "WiFi vision is real: MIT's diffusion model reconstructs 3D indoor scenes from wireless reflections. Could give robots the ability to perceive objects they can't directly see.", url: "https://bsky.app/profile/neuralbuddies.bsky.social", timestamp: "2d ago", likes: 18700, reposts: 7600 },
      { platform: "threads", author: "Wired", handle: "@wired", content: "MIT's WiFi-based AI can see through walls. It's not magic — it's diffusion models applied to signal reflections. Robotics and search-and-rescue are the obvious applications. Privacy is the obvious concern.", url: "https://www.threads.net/@wired", timestamp: "3d ago", likes: 26400, reposts: 10300 },
      { platform: "mastodon", author: "IEEE Spectrum", handle: "@ieeespectrum@mastodon.social", content: "MIT WiFi vision system: indoor mapping from wireless reflections using generative AI. The research could improve robots' ability to manipulate objects they cannot directly observe.", url: "https://mastodon.social/@ieeespectrum", timestamp: "3d ago", likes: 8100, reposts: 3400 }
    ],
    newsArticles: [
      { title: "MIT AI system maps indoor spaces through walls using WiFi signals", source: "MIT News", url: "https://news.mit.edu/2026/ai-wifi-signals-see-through-walls-indoor-mapping-0323", publishedAt: "Mar 23, 2026", snippet: "Researchers used a generative diffusion model to reconstruct 3D geometry of indoor spaces from WiFi signal reflections, enabling a form of wireless 'vision.'" },
      { title: "AI can now see through walls using WiFi, MIT researchers show", source: "NeuralBuddies", url: "https://www.neuralbuddies.com/p/mit-wifi-vision-through-walls-ai-2026", publishedAt: "Mar 23, 2026", snippet: "The system maps entire indoor scenes from wireless reflections alone, with potential applications in robotics and search-and-rescue." },
      { title: "MIT's WiFi-based AI raises privacy concerns alongside robotic promise", source: "Ars Technica", url: "https://arstechnica.com/science/2026/03/mit-wifi-ai-sees-through-walls-mapping/", publishedAt: "Mar 22, 2026", snippet: "The same technology that could help robots navigate unseen spaces could also be used to track people through walls." }
    ]
  },

  {
    title: "AMI Labs Raises $1B at $3.5B Valuation for Physical AI With Yann LeCun",
    summary: "AMI Labs, a physical AI startup co-founded by renowned AI researcher Yann LeCun, has raised $1 billion in a funding round valuing the company at $3.5 billion. The raise comes as the global industrial robotics market hits a record $16.7 billion and major tech leaders signal that the 'ChatGPT moment' for robotics has arrived. Nvidia CEO Jensen Huang made that declaration at GTC, while surveys show 58% of manufacturing executives are already deploying physical AI systems. AMI Labs is focused on building foundational AI models for robots operating in unstructured real-world environments.",
    category: "tech",
    trendScore: 81,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "TechCrunch", handle: "@TechCrunch", content: "AMI Labs raises $1B at a $3.5B valuation. Yann LeCun's physical AI startup is betting big on the robot revolution. Jensen Huang: 'The ChatGPT moment for robotics has arrived.'", url: "https://x.com/TechCrunch", timestamp: "3d ago", likes: 42800, reposts: 17100 },
      { platform: "x", author: "NVIDIA", handle: "@nvidia", content: "Physical AI is the next frontier. The global robotics market just hit $16.7B. 58% of manufacturing execs already deploying AI-enabled robots. The infrastructure is here.", url: "https://x.com/nvidia", timestamp: "4d ago", likes: 61200, reposts: 24800 },
      { platform: "threads", author: "Bloomberg Technology", handle: "@bloombergtechnology", content: "Yann LeCun's AMI Labs secures $1B raise for physical AI at $3.5B valuation. The round signals massive institutional confidence that robots are the next big AI platform.", url: "https://www.threads.net/@bloombergtechnology", timestamp: "3d ago", likes: 19400, reposts: 7700 },
      { platform: "bluesky", author: "The Information", handle: "@theinformation.bsky.social", content: "AMI Labs $1B round: With a $3.5B valuation and Yann LeCun on the founding team, this is the biggest physical AI raise of the year. The robotics boom is here.", url: "https://bsky.app/profile/theinformation.bsky.social", timestamp: "3d ago", likes: 12600, reposts: 5100 },
      { platform: "mastodon", author: "Amiko Consulting", handle: "@amikoconsulting@mastodon.social", content: "Physical AI is having its moment: AMI Labs raises $1B, Jensen Huang declares a 'ChatGPT moment' for robotics, global industrial robot market at record $16.7B.", url: "https://mastodon.social/@amikoconsulting", timestamp: "4d ago", likes: 4700, reposts: 1900 }
    ],
    newsArticles: [
      { title: "AMI Labs raises $1 billion for physical AI at $3.5 billion valuation", source: "TechCrunch", url: "https://techcrunch.com/2026/03/21/ami-labs-physical-ai-funding-yann-lecun/", publishedAt: "Mar 21, 2026", snippet: "The startup co-founded by Yann LeCun is building foundational AI models for robots operating in unstructured environments." },
      { title: "The ChatGPT moment for robotics: Physical AI funding hits record levels", source: "Amiko Consulting", url: "https://amikoconsulting.com/physical-ai-funding-robotics-2026/", publishedAt: "Mar 20, 2026", snippet: "Global industrial robot market at $16.7B as 58% of manufacturing executives report deploying physical AI systems." },
      { title: "Jensen Huang: 'ChatGPT moment in robotics has arrived'", source: "Ars Technica", url: "https://arstechnica.com/ai/2026/03/nvidia-jensen-huang-chatgpt-moment-robotics-physical-ai/", publishedAt: "Mar 19, 2026", snippet: "Nvidia's CEO declared at GTC that the robotics industry is at an inflection point analogous to the launch of ChatGPT in 2022." }
    ]
  },

  {
    title: "NASA Artemis II Returns to Launch Pad, Targeting April Crewed Moon Mission",
    summary: "NASA's Space Launch System rocket and Orion capsule rolled back out to Launch Pad 39B at Kennedy Space Center on March 20 following repairs to the helium pressurization system that caused the vehicle to be rolled back weeks earlier. The Artemis II mission will carry four astronauts — Reid Wiseman, Victor Glover, Christina Koch, and Jeremy Hansen — on a crewed flyby of the Moon, the first humans to travel beyond low Earth orbit in more than 50 years. NASA is targeting a launch in April, and the vehicle is currently undergoing final pre-launch testing.",
    category: "tech",
    trendScore: 73,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "NASA", handle: "@NASA", content: "Artemis II is back on the pad! 🚀 The SLS rocket and Orion capsule rolled out to Launch Complex 39B on March 20 after helium system repairs. Crew: Wiseman, Glover, Koch, Hansen. Targeting April launch.", url: "https://x.com/NASA", timestamp: "4d ago", likes: 71400, reposts: 28600 },
      { platform: "x", author: "Space.com", handle: "@SPACEdotcom", content: "Artemis II back on Pad 39B. Crewed lunar flyby mission targeting April. The four-person crew will fly around the Moon — the first humans beyond Earth orbit since Apollo 17 in 1972.", url: "https://x.com/SPACEdotcom", timestamp: "4d ago", likes: 44300, reposts: 17800 },
      { platform: "bluesky", author: "Scientific American", handle: "@sciam.bsky.social", content: "NASA's Artemis II is back at the launch pad after helium repairs. April target date set. Reid Wiseman, Victor Glover, Christina Koch, and Jeremy Hansen will fly around the Moon.", url: "https://bsky.app/profile/sciam.bsky.social", timestamp: "4d ago", likes: 22100, reposts: 9000 },
      { platform: "threads", author: "NASA", handle: "@nasa", content: "Artemis II on pad 39B. All systems go for final pre-launch testing. Our four crew members are training hard for humanity's return to the Moon's neighborhood.", url: "https://www.threads.net/@nasa", timestamp: "4d ago", likes: 38900, reposts: 15600 },
      { platform: "mastodon", author: "Space News", handle: "@spacenews@mastodon.social", content: "Artemis II rolling back to Pad 39B is a major milestone. After years of delays, the crewed Moon flyby is targeting April. All eyes on Kennedy Space Center.", url: "https://mastodon.social/@spacenews", timestamp: "5d ago", likes: 9600, reposts: 3900 }
    ],
    newsArticles: [
      { title: "Artemis II rolls back to launch pad for April Moon mission", source: "NASA.gov", url: "https://www.nasa.gov/missions/artemis/artemis-ii/artemis-ii-rollout-march-2026/", publishedAt: "Mar 20, 2026", snippet: "The SLS rocket and Orion spacecraft arrived at Launch Complex 39B on March 20 after helium system repairs, targeting an April launch for the first crewed lunar flyby since 1972." },
      { title: "NASA's Artemis II is back on the launch pad and ready for final testing", source: "Space.com", url: "https://www.space.com/artemis-ii-launch-pad-rollout-march-2026", publishedAt: "Mar 20, 2026", snippet: "Four astronauts — Wiseman, Glover, Koch, and Hansen — will fly around the Moon in the mission targeting April liftoff." },
      { title: "Artemis II: Everything you need to know about NASA's crewed lunar flyby", source: "Scientific American", url: "https://www.scientificamerican.com/article/artemis-ii-crewed-moon-flyby-april-2026/", publishedAt: "Mar 21, 2026", snippet: "The mission will carry humans beyond low Earth orbit for the first time in more than 50 years, looping around the Moon before returning to Earth." }
    ]
  },

  // ─── ENTERTAINMENT (4 new) ───────────────────────────────────────────────────

  {
    title: "'Project Hail Mary' Shatters Box Office With $141M Global Opening",
    summary: "Ryan Gosling's sci-fi thriller 'Project Hail Mary,' adapted from Andy Weir's best-selling novel and directed by Phil Lord and Christopher Miller, opened to $80.6 million domestically and $141 million globally — the biggest opening weekend of 2026 and the ninth-best March opening in box office history. Critics praised Gosling's performance and the film's faithful yet inventive adaptation of the source material. The film's success signals a strong year for original science fiction at a moment when studios have increasingly relied on sequels and reboots.",
    category: "entertainment",
    trendScore: 84,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Variety", handle: "@Variety", content: "PROJECT HAIL MARY: $80.6M domestic, $141M global opening weekend. BIGGEST OPENING OF 2026. Ryan Gosling is a genuine movie star. 9th-best March opening EVER.", url: "https://x.com/Variety", timestamp: "2d ago", likes: 78200, reposts: 31400 },
      { platform: "x", author: "Hollywood Reporter", handle: "@THR", content: "'Project Hail Mary' hits $141M globally in its opening weekend. Lord & Miller nail the adaptation. Gosling delivers a career performance. The movie event of the year.", url: "https://x.com/THR", timestamp: "2d ago", likes: 52100, reposts: 20900 },
      { platform: "threads", author: "Rotten Tomatoes", handle: "@rottentomatoes", content: "Project Hail Mary: 97% on Rotten Tomatoes, $141M global opening. It's not just the best-reviewed film of 2026 — it's also the highest-grossing. That almost never happens.", url: "https://www.threads.net/@rottentomatoes", timestamp: "2d ago", likes: 41300, reposts: 16500 },
      { platform: "bluesky", author: "Variety", handle: "@variety.bsky.social", content: "$141M. Ryan Gosling. Lord & Miller. Andy Weir. Project Hail Mary is everything right about Hollywood when it tries. The 9th-best March opening in history.", url: "https://bsky.app/profile/variety.bsky.social", timestamp: "2d ago", likes: 27600, reposts: 11100 },
      { platform: "mastodon", author: "Film Updates", handle: "@filmupdates@mastodon.social", content: "Project Hail Mary $141M global opening is extraordinary. Hollywood keeps saying people don't go to theaters for original sci-fi. Hollywood is wrong.", url: "https://mastodon.social/@filmupdates", timestamp: "3d ago", likes: 11400, reposts: 4700 }
    ],
    newsArticles: [
      { title: "'Project Hail Mary' opens to $141 million globally — biggest opening of 2026", source: "Variety", url: "https://variety.com/2026/film/box-office/project-hail-mary-box-office-opening-weekend-2026/", publishedAt: "Mar 23, 2026", snippet: "Ryan Gosling's sci-fi film dominated the March box office with an $80.6M domestic and $141M global opening, the ninth-best March debut of all time." },
      { title: "'Project Hail Mary' box office: Ryan Gosling sci-fi shatters expectations", source: "Hollywood Reporter", url: "https://www.hollywoodreporter.com/movies/movie-news/project-hail-mary-box-office-ryan-gosling-2026/", publishedAt: "Mar 23, 2026", snippet: "Lord & Miller's adaptation of Andy Weir's novel becomes the year's biggest opener with $141 million worldwide." },
      { title: "'Project Hail Mary' Review: Ryan Gosling shines in the year's best sci-fi", source: "Rotten Tomatoes", url: "https://www.rottentomatoes.com/m/project_hail_mary_2026", publishedAt: "Mar 19, 2026", snippet: "A near-perfect adaptation that earns a 97% critics score, proving that original science fiction can still dominate the box office." }
    ]
  },

  {
    title: "Oscars 2026: Paul Thomas Anderson's 'One Battle After Another' Wins Best Picture With 6 Awards",
    summary: "Paul Thomas Anderson's 'One Battle After Another' dominated the 98th Academy Awards, winning six Oscars including Best Picture, Best Director, and Best Original Screenplay. The ceremony, hosted by Conan O'Brien, also saw Sean Penn win Best Supporting Actor for his portrayal of a war correspondent — a particularly poignant moment given Penn's recent trip to Ukraine, which prevented him from attending the ceremony in person. The evening was marked by emotional speeches, strong political commentary, and what critics called one of the most memorable Oscar nights in years.",
    category: "entertainment",
    trendScore: 79,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Variety", handle: "@Variety", content: "BEST PICTURE: 'One Battle After Another' — Paul Thomas Anderson wins. 6 Oscars total. Sean Penn wins Best Supporting Actor from Ukraine. Conan O'Brien hosted brilliantly. What a night.", url: "https://x.com/Variety", timestamp: "1w ago", likes: 112400, reposts: 45800 },
      { platform: "x", author: "BBC News", handle: "@BBCNews", content: "Sean Penn wins Best Supporting Actor at the Oscars — he accepted via video link from Ukraine, where he was with soldiers. 'One Battle After Another' wins Best Picture. Conan O'Brien hosts.", url: "https://x.com/BBCNews", timestamp: "1w ago", likes: 78300, reposts: 31200 },
      { platform: "threads", author: "New York Times Arts", handle: "@nytimesarts", content: "Paul Thomas Anderson's masterwork 'One Battle After Another' wins Best Picture, Director, and Screenplay at the 98th Oscars. Six awards total. It is the dominant film of 2026.", url: "https://www.threads.net/@nytimesarts", timestamp: "1w ago", likes: 39200, reposts: 15700 },
      { platform: "bluesky", author: "SF Chronicle", handle: "@sfchronicle.bsky.social", content: "Oscars 2026: Conan O'Brien was the host they needed. Sean Penn accepted from a war zone. PTA finally has his Best Picture. An Oscars night no one will forget.", url: "https://bsky.app/profile/sfchronicle.bsky.social", timestamp: "1w ago", likes: 21600, reposts: 8700 },
      { platform: "mastodon", author: "Film Updates", handle: "@filmupdates@mastodon.social", content: "The 98th Oscars: 'One Battle After Another' wins 6 awards. Sean Penn's acceptance from Ukraine is one of the great Oscar moments ever. PTA joins the pantheon.", url: "https://mastodon.social/@filmupdates", timestamp: "1w ago", likes: 8900, reposts: 3600 }
    ],
    newsArticles: [
      { title: "Oscars 2026: 'One Battle After Another' wins Best Picture with 6 awards", source: "BBC News", url: "https://www.bbc.com/culture/article/20260315-oscars-2026-one-battle-after-another-best-picture", publishedAt: "Mar 16, 2026", snippet: "Paul Thomas Anderson's film dominated the 98th Academy Awards, winning Best Picture, Director, and Screenplay among six total awards." },
      { title: "Oscars 2026: Complete winners list — PTA's 'One Battle After Another' dominates", source: "New York Times", url: "https://www.nytimes.com/2026/03/15/movies/oscars-2026-winners-list.html", publishedAt: "Mar 16, 2026", snippet: "Sean Penn won Best Supporting Actor while in Ukraine, accepting via video link from the front lines." },
      { title: "Conan O'Brien hosts a memorable Oscars 2026 ceremony", source: "ABC Entertainment", url: "https://abc.com/news/oscars-2026-conan-obrien-one-battle-after-another-winners", publishedAt: "Mar 16, 2026", snippet: "O'Brien's hosting was widely praised as the ceremony produced some of the most emotionally resonant moments in recent Oscar history." }
    ]
  },

  {
    title: "'Peaky Blinders: The Immortal Man' Arrives on Netflix With Cillian Murphy in WWII Setting",
    summary: "The long-awaited Peaky Blinders feature film, 'The Immortal Man,' has premiered on Netflix with Cillian Murphy returning as Tommy Shelby in a story set during the Second World War in 1940. The film expands the cast with Barry Keoghan, Rebecca Ferguson, and Tim Roth in new roles. Early reviews are mixed — critics praise Murphy's commanding performance and the production's period detail but note the film's plot feels rushed given the scope of the story it tries to tell. The film is already one of the most-watched Netflix titles of the week globally.",
    category: "entertainment",
    trendScore: 76,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Netflix", handle: "@netflix", content: "Peaky Blinders: The Immortal Man is NOW on Netflix. Cillian Murphy is back as Tommy Shelby. WWII. Barry Keoghan. Rebecca Ferguson. Tim Roth. By order of the Peaky Blinders.", url: "https://x.com/netflix", timestamp: "5d ago", likes: 94300, reposts: 37800 },
      { platform: "x", author: "New York Times Arts", handle: "@nytimesarts", content: "'The Immortal Man' review: Cillian Murphy is extraordinary. The film is ambitious and visually stunning. But the plot, crammed into a single feature, can't breathe. Worth it for Murphy alone.", url: "https://x.com/nytimesarts", timestamp: "5d ago", likes: 31200, reposts: 12500 },
      { platform: "threads", author: "IMDb", handle: "@imdb", content: "Peaky Blinders: The Immortal Man — starring Cillian Murphy, Barry Keoghan, Rebecca Ferguson, Tim Roth. Now streaming on Netflix. The Shelby family saga concludes in WWII-era Britain.", url: "https://www.threads.net/@imdb", timestamp: "5d ago", likes: 47600, reposts: 19100 },
      { platform: "bluesky", author: "The Guardian", handle: "@guardian.bsky.social", content: "The Peaky Blinders film is here. Murphy is mesmerizing as always. Keoghan and Roth are terrific additions. But the story feels too big for a single film. A flawed but compelling farewell.", url: "https://bsky.app/profile/guardian.bsky.social", timestamp: "6d ago", likes: 18400, reposts: 7400 },
      { platform: "mastodon", author: "Film Updates", handle: "@filmupdates@mastodon.social", content: "Peaky Blinders: The Immortal Man — Cillian Murphy returns in WWII 1940. Barry Keoghan joins the cast. Mixed reviews but it's already a top 10 Netflix title worldwide.", url: "https://mastodon.social/@filmupdates", timestamp: "5d ago", likes: 7200, reposts: 2900 }
    ],
    newsArticles: [
      { title: "'Peaky Blinders: The Immortal Man' review: Murphy shines in flawed but compelling finale", source: "New York Times", url: "https://www.nytimes.com/2026/03/19/movies/peaky-blinders-immortal-man-review-netflix.html", publishedAt: "Mar 19, 2026", snippet: "Cillian Murphy delivers a commanding performance, but the film's ambition outpaces its runtime in this WWII-set conclusion to the Shelby saga." },
      { title: "Peaky Blinders film lands on Netflix: cast, plot, and first reactions", source: "IMDb", url: "https://www.imdb.com/news/ni65200174/peaky-blinders-immortal-man-netflix-cast-plot", publishedAt: "Mar 19, 2026", snippet: "Cillian Murphy, Barry Keoghan, Rebecca Ferguson, and Tim Roth star in the feature film set in 1940 during the Second World War." },
      { title: "'The Immortal Man': Peaky Blinders goes to war — and it mostly works", source: "The Guardian", url: "https://www.theguardian.com/film/2026/mar/19/peaky-blinders-immortal-man-review-netflix-cillian-murphy", publishedAt: "Mar 19, 2026", snippet: "The WWII setting gives the film scope, but a dense plot means characters don't get the space they deserve despite outstanding performances." }
    ]
  },

  {
    title: "Duffer Brothers' New Psychological Thriller 'Something Very Bad Is Going to Happen' Premieres March 26",
    summary: "After the conclusion of 'Stranger Things,' Duffer Brothers Matt and Ross Duffer are premiering their next Netflix series, 'Something Very Bad Is Going to Happen,' on March 26. The show is a psychological thriller about a couple — played by Camila Morrone and Adam DiMarco — in the days before their wedding, as paranoia and dread descend on their relationship. The series is described as a sharp departure from the supernatural nostalgia of Stranger Things, leaning into more grounded psychological horror. Early preview screenings have drawn strong buzz from critics.",
    category: "entertainment",
    trendScore: 67,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Netflix", handle: "@netflix", content: "From the Duffer Brothers. Something Very Bad Is Going to Happen. Premieres March 26 on Netflix. Camila Morrone. Adam DiMarco. You've been warned.", url: "https://x.com/netflix", timestamp: "3d ago", likes: 56700, reposts: 22800 },
      { platform: "x", author: "InsideHook", handle: "@insidehook", content: "After Stranger Things, the Duffer Brothers go psychological. 'Something Very Bad Is Going to Happen' premieres March 26 on Netflix. Morrone and DiMarco star. Early reviews are strong.", url: "https://x.com/insidehook", timestamp: "4d ago", likes: 18400, reposts: 7400 },
      { platform: "threads", author: "Netflix", handle: "@netflix", content: "The Duffer Brothers' next show is almost here. Something Very Bad Is Going to Happen — a psychological thriller about a couple before their wedding. March 26 on Netflix.", url: "https://www.threads.net/@netflix", timestamp: "3d ago", likes: 31200, reposts: 12600 },
      { platform: "bluesky", author: "The Verge", handle: "@verge.bsky.social", content: "The Duffer Brothers' post-Stranger Things project premieres in days. 'Something Very Bad Is Going to Happen' looks like nothing they've done before — intimate, unsettling, adult.", url: "https://bsky.app/profile/verge.bsky.social", timestamp: "4d ago", likes: 14800, reposts: 5900 },
      { platform: "mastodon", author: "TV Insider", handle: "@tvinsider@mastodon.social", content: "Matt and Ross Duffer's next series premieres March 26. 'Something Very Bad Is Going to Happen' stars Camila Morrone and Adam DiMarco. Psychological thriller, not supernatural horror.", url: "https://mastodon.social/@tvinsider", timestamp: "4d ago", likes: 5600, reposts: 2300 }
    ],
    newsArticles: [
      { title: "Duffer Brothers' new Netflix show 'Something Very Bad Is Going to Happen' premieres March 26", source: "InsideHook", url: "https://www.insidehook.com/entertainment/duffer-brothers-netflix-something-very-bad-premiere-march-2026", publishedAt: "Mar 22, 2026", snippet: "After Stranger Things, Matt and Ross Duffer launch a psychological thriller about a couple in the days before their wedding, starring Camila Morrone and Adam DiMarco." },
      { title: "'Something Very Bad Is Going to Happen' — first look at the Duffer Brothers' new Netflix series", source: "Netflix Tudum", url: "https://www.netflix.com/tudum/articles/something-very-bad-is-going-to-happen-duffer-brothers", publishedAt: "Mar 20, 2026", snippet: "The Duffer Brothers' post-Stranger Things series is a psychological thriller premiering March 26." },
      { title: "Duffer Brothers go dark and intimate with new Netflix psychological thriller", source: "Variety", url: "https://variety.com/2026/tv/news/duffer-brothers-something-very-bad-netflix-premiere/", publishedAt: "Mar 21, 2026", snippet: "Early preview screenings have generated strong buzz, with critics noting the Duffers' willingness to work on a smaller, more grounded canvas." }
    ]
  },

  // ─── ENERGY (2 new) ──────────────────────────────────────────────────────────

  {
    title: "Cuba's Power Grid Collapses for Third Time in March, Leaving 10 Million Without Electricity",
    summary: "Cuba's fragile national power grid collapsed again on Monday — the third time this month and the second blackout in a single week — leaving more than 10 million people without electricity. The repeated failures are driven by a combination of decades of deferred infrastructure maintenance, a severe fuel shortage worsened by US sanctions and oil import restrictions, and the collapse of Cuban energy sector investment. The government has been rationing power for months, but the latest total grid failure is the longest unplanned outage the island has experienced in years, with some areas now without power for more than 40 hours.",
    category: "energy",
    trendScore: 80,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "NPR", handle: "@NPR", content: "Cuba's power grid has collapsed AGAIN — the third time in March. 10+ million Cubans without electricity. Decaying infrastructure, US sanctions, and fuel shortages have left the island on its knees.", url: "https://x.com/NPR", timestamp: "8h ago", likes: 31400, reposts: 12600 },
      { platform: "x", author: "Al Jazeera English", handle: "@AJEnglish", content: "Cuba blackout: The national grid has failed for the 3rd time this month. 10 million people without power. The second major outage in under a week. US oil blockade and aging infrastructure blamed.", url: "https://x.com/AJEnglish", timestamp: "9h ago", likes: 22800, reposts: 9200 },
      { platform: "threads", author: "Politico", handle: "@politico", content: "Cuba's power crisis is reaching a breaking point. Third grid collapse in March. 10 million without power. The combination of Trump-era sanctions and collapsing infrastructure is catastrophic.", url: "https://www.threads.net/@politico", timestamp: "10h ago", likes: 16300, reposts: 6500 },
      { platform: "bluesky", author: "Al Jazeera", handle: "@aljazeera.bsky.social", content: "Cuba blackout day 2: Most of the island is still without power. The third grid failure in March. Some areas haven't had electricity in more than 40 hours.", url: "https://bsky.app/profile/aljazeera.bsky.social", timestamp: "11h ago", likes: 9700, reposts: 3900 },
      { platform: "mastodon", author: "Reuters", handle: "@reuters@mastodon.social", content: "Cuba's third power grid collapse of March leaves 10 million without electricity. The combination of fuel scarcity, US sanctions, and aging infrastructure has left the island unable to maintain a stable grid.", url: "https://mastodon.social/@reuters", timestamp: "12h ago", likes: 5100, reposts: 2100 }
    ],
    newsArticles: [
      { title: "Cuba's power grid collapses again, leaving 10 million without electricity", source: "NPR", url: "https://www.npr.org/2026/03/24/nx-s1-5760032/cuba-power-grid-collapse-blackout-march-2026", publishedAt: "Mar 24, 2026", snippet: "The third grid failure this month left over 10 million Cubans without power, with US sanctions and decaying infrastructure fueling the crisis." },
      { title: "Cuba suffers third power grid collapse of March amid fuel crisis", source: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/3/24/cuba-power-grid-collapse-third-march-blackout", publishedAt: "Mar 24, 2026", snippet: "The latest failure comes just days after a second blackout earlier in the week, leaving some areas without power for more than 40 hours." },
      { title: "Cuba's energy crisis deepens as sanctions, fuel shortage trigger third March blackout", source: "Politico", url: "https://www.politico.com/news/2026/03/24/cuba-power-grid-blackout-sanctions-00200182", publishedAt: "Mar 24, 2026", snippet: "Trump-era sanctions on oil imports and decades of deferred infrastructure investment have left Cuba's grid unable to function reliably." }
    ]
  },

  {
    title: "Oil Surges Past $108 as Strait of Hormuz Blockade Continues — Saudi Arabia's Yanbu the Last Outlet",
    summary: "Brent crude oil prices have climbed above $108 per barrel — up 84% for the year — as the Strait of Hormuz remains effectively blocked by the ongoing Iran-US conflict. Saudi Arabia's Yanbu Red Sea terminal is now the only functioning major oil export outlet in the region, dramatically constraining global supply. Retail investors piled $211 million into oil exchange-traded funds in a single trading day as oil ETFs saw record inflows. Analysts warn that if Iran follows through on threats to mine the Persian Gulf, prices could spike past $130 per barrel within days.",
    category: "energy",
    trendScore: 88,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Bloomberg", handle: "@business", content: "Brent crude hits $108/barrel — up 84% for 2026. Strait of Hormuz still blocked. Saudi Yanbu is the ONLY major export outlet left. Retail investors poured $211M into oil ETFs in a single day.", url: "https://x.com/business", timestamp: "5h ago", likes: 37200, reposts: 14900 },
      { platform: "x", author: "CNBC", handle: "@CNBC", content: "Oil at $108. If Iran mines the Persian Gulf, analysts say prices could hit $130 within days. Saudi Yanbu is now the last open oil export route in the entire region.", url: "https://x.com/CNBC", timestamp: "6h ago", likes: 28600, reposts: 11400 },
      { platform: "threads", author: "Wall Street Journal", handle: "@wsj", content: "Oil ETF inflows: $211M in a single trading session as retail investors bet on continued oil price surge. Brent at $108, up 84% for 2026. The energy market is in uncharted territory.", url: "https://www.threads.net/@wsj", timestamp: "7h ago", likes: 19100, reposts: 7600 },
      { platform: "bluesky", author: "WSJ Markets", handle: "@wsjmarkets.bsky.social", content: "Saudi Arabia's Yanbu is the last oil export outlet in the region. With Hormuz blocked and Persian Gulf mining threatened, the global oil supply picture is alarming.", url: "https://bsky.app/profile/wsjmarkets.bsky.social", timestamp: "8h ago", likes: 12400, reposts: 5100 },
      { platform: "mastodon", author: "Reuters Energy", handle: "@reutersenergy@mastodon.social", content: "Brent crude $108, up 84% for the year. Hormuz blocked. Persian Gulf mining threatened. Saudi Yanbu is the sole major export route. This is the most constrained oil market in decades.", url: "https://mastodon.social/@reutersenergy", timestamp: "9h ago", likes: 6800, reposts: 2800 }
    ],
    newsArticles: [
      { title: "Oil surges past $108 as Hormuz blockade continues and Yanbu becomes last export route", source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-24/oil-prices-hormuz-blockade-yanbu-export-route", publishedAt: "Mar 24, 2026", snippet: "Brent crude climbed above $108 per barrel, up 84% for the year, as the Strait of Hormuz remains blocked and Saudi Arabia's Yanbu becomes the region's last functioning oil export terminal." },
      { title: "Retail investors pour record $211M into oil ETFs in single trading session", source: "WSJ", url: "https://www.wsj.com/markets/commodities/oil-etf-inflows-record-211-million-hormuz-2026-03-24", publishedAt: "Mar 24, 2026", snippet: "Individual investors are betting heavily on continued oil price increases as the Strait of Hormuz blockade shows no signs of lifting." },
      { title: "Oil could hit $130 if Iran mines Persian Gulf, analysts warn", source: "CNBC", url: "https://www.cnbc.com/2026/03/24/oil-prices-iran-persian-gulf-mines-130-dollar-forecast.html", publishedAt: "Mar 24, 2026", snippet: "With Brent crude at $108 and Iran threatening to mine the Persian Gulf, energy analysts say prices could spike to $130 within days of any mining operation." }
    ]
  },

  // ─── HEALTH (3 new) ──────────────────────────────────────────────────────────

  {
    title: "FDA Approves World's First Once-Weekly Insulin 'Awiqli' for Type 2 Diabetes",
    summary: "The US Food and Drug Administration has approved Awiqli, developed by Novo Nordisk under the drug name insulin icodec, as the world's first once-weekly basal insulin for adults with Type 2 diabetes. Clinical trials demonstrated Awiqli was superior to daily insulin glargine in controlling blood sugar levels over a 52-week period with a comparable safety profile. The approval is expected to dramatically improve patient adherence, as many people with diabetes struggle to remember daily injections. Novo Nordisk shares rose following the announcement.",
    category: "health",
    trendScore: 77,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "STAT News", handle: "@statnews", content: "BREAKING: FDA approves Awiqli — the world's first once-weekly basal insulin. Novo Nordisk's insulin icodec. For Type 2 diabetes adults. Superior to daily insulin glargine in trials.", url: "https://x.com/statnews", timestamp: "1d ago", likes: 28900, reposts: 11600 },
      { platform: "x", author: "FDA", handle: "@US_FDA", content: "FDA approves Awiqli (insulin icodec injection) — the first once-weekly basal insulin for adults with type 2 diabetes. A major step forward for diabetes management.", url: "https://x.com/US_FDA", timestamp: "1d ago", likes: 19400, reposts: 7800 },
      { platform: "bluesky", author: "STAT News", handle: "@statnews.bsky.social", content: "Awiqli approval: Once a week instead of once a day. For the millions of Type 2 diabetes patients who struggle with daily injection adherence, this could be transformative.", url: "https://bsky.app/profile/statnews.bsky.social", timestamp: "1d ago", likes: 11200, reposts: 4500 },
      { platform: "threads", author: "CNN Health", handle: "@cnnhealth", content: "FDA approves once-weekly insulin Awiqli for Type 2 diabetes. Novo Nordisk's icodec beat daily insulin glargine in 52-week trials. One shot a week could change the game for diabetes management.", url: "https://www.threads.net/@cnnhealth", timestamp: "1d ago", likes: 16700, reposts: 6700 },
      { platform: "mastodon", author: "Medical News Today", handle: "@medicalnewstoday@mastodon.social", content: "World's first once-weekly basal insulin approved by FDA. Awiqli (insulin icodec) by Novo Nordisk outperformed daily glargine in clinical trials. Type 2 diabetes management takes a leap forward.", url: "https://mastodon.social/@medicalnewstoday", timestamp: "2d ago", likes: 6100, reposts: 2500 }
    ],
    newsArticles: [
      { title: "FDA approves Awiqli, the world's first once-weekly insulin for Type 2 diabetes", source: "FDA.gov", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/fda-approves-awiqli-insulin-icodec-type-2-diabetes", publishedAt: "Mar 23, 2026", snippet: "Awiqli (insulin icodec injection) by Novo Nordisk is the first once-weekly basal insulin for adults with Type 2 diabetes, demonstrating superiority to daily insulin glargine in 52-week trials." },
      { title: "Novo Nordisk's Awiqli: Once-weekly insulin gets FDA green light", source: "STAT News", url: "https://www.statnews.com/2026/03/23/fda-approves-awiqli-novo-nordisk-weekly-insulin-type2-diabetes/", publishedAt: "Mar 23, 2026", snippet: "The approval of the world's first once-weekly basal insulin marks a significant milestone in diabetes care, with experts saying improved adherence could save lives." },
      { title: "FDA approves world's first weekly insulin: What patients need to know", source: "Prime Therapeutics", url: "https://www.primetherapeutics.com/news/awiqli-fda-approval-weekly-insulin-diabetes-2026", publishedAt: "Mar 23, 2026", snippet: "Awiqli's once-a-week dosing schedule is expected to significantly improve treatment adherence among the millions of adults with Type 2 diabetes who currently use daily basal insulin." }
    ]
  },

  {
    title: "Gene Therapy for Childhood Hearing Loss Advances to FDA Review — Could Restore Hearing in Deaf Children",
    summary: "Regeneron Pharmaceuticals has advanced DB-OTO, its gene therapy targeting congenital hearing loss caused by mutations in the OTOF gene, to formal FDA review. The therapy, designed to restore hearing function in children born deaf due to this specific genetic mutation, has received both Fast Track and Orphan Drug designation from the agency. Early clinical trial data showed remarkable outcomes, with previously deaf children achieving functional hearing within months of a single treatment. If approved, it would be the first gene therapy authorized to treat deafness in children in the United States.",
    category: "health",
    trendScore: 69,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "STAT News", handle: "@statnews", content: "Regeneron's DB-OTO gene therapy for childhood deafness advances to FDA review. Kids born deaf due to OTOF mutations showed restored hearing in trials. This could be transformative.", url: "https://x.com/statnews", timestamp: "3d ago", likes: 32100, reposts: 12900 },
      { platform: "x", author: "FDA", handle: "@US_FDA", content: "FDA grants Fast Track and Orphan Drug designation to DB-OTO, a gene therapy for congenital hearing loss caused by OTOF gene mutations in children. Now under formal review.", url: "https://x.com/US_FDA", timestamp: "3d ago", likes: 18700, reposts: 7500 },
      { platform: "bluesky", author: "STAT News", handle: "@statnews.bsky.social", content: "DB-OTO gene therapy at FDA: Children born deaf due to OTOF mutations treated in trials were hearing within months. If approved, the first gene therapy for deafness in the US.", url: "https://bsky.app/profile/statnews.bsky.social", timestamp: "3d ago", likes: 14200, reposts: 5800 },
      { platform: "threads", author: "CNN Health", handle: "@cnnhealth", content: "Regeneron's gene therapy for childhood deafness is now in formal FDA review. DB-OTO targets OTOF gene mutations. Deaf children in trials gained functional hearing from a single treatment.", url: "https://www.threads.net/@cnnhealth", timestamp: "3d ago", likes: 21600, reposts: 8700 },
      { platform: "mastodon", author: "Nature Medicine", handle: "@naturemedicine@mastodon.social", content: "DB-OTO gene therapy for OTOF-related childhood deafness enters FDA review. Fast Track designation granted. Early trial data shows remarkable hearing restoration outcomes.", url: "https://mastodon.social/@naturemedicine", timestamp: "4d ago", likes: 7400, reposts: 3100 }
    ],
    newsArticles: [
      { title: "Regeneron's DB-OTO gene therapy for childhood deafness advances to FDA review", source: "FDA.gov", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/db-oto-gene-therapy-congenital-hearing-loss-fda-review", publishedAt: "Mar 21, 2026", snippet: "DB-OTO, targeting congenital hearing loss caused by OTOF gene mutations, has been accepted for formal FDA review with Fast Track and Orphan Drug designations." },
      { title: "Gene therapy that restored hearing in deaf children enters FDA review", source: "STAT News", url: "https://www.statnews.com/2026/03/21/db-oto-gene-therapy-hearing-loss-fda-review-regeneron/", publishedAt: "Mar 21, 2026", snippet: "Children born deaf due to OTOF mutations showed functional hearing restoration within months of receiving a single dose of DB-OTO in clinical trials." },
      { title: "Hearing loss gene therapy DB-OTO: What it means for families with deaf children", source: "Prime Therapeutics", url: "https://www.primetherapeutics.com/news/db-oto-gene-therapy-hearing-loss-fda-review-2026", publishedAt: "Mar 22, 2026", snippet: "If approved, DB-OTO would be the first gene therapy authorized to treat deafness in children in the United States." }
    ]
  },

  {
    title: "FDA Approves Icotyde for Moderate-to-Severe Plaque Psoriasis in Patients 12 and Older",
    summary: "The FDA approved icotrokinra (brand name Icotyde) on March 17, 2026, for the treatment of moderate-to-severe plaque psoriasis in patients aged 12 and older, adding a new option to a field already served by biologics. Icotyde works by blocking the IL-17 receptor pathway, and clinical trials showed it achieved significant skin clearance rates — with over 75% of patients reaching a PASI 90 response at week 16. The drug's approval for adolescents 12 and older is particularly notable, as psoriasis affects an estimated one million teenagers in the United States. The FDA noted the drug had a favorable safety profile with no new warnings required.",
    category: "health",
    trendScore: 58,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "FDA", handle: "@US_FDA", content: "FDA approves Icotyde (icotrokinra) for moderate-to-severe plaque psoriasis in patients 12 and older. New IL-17 pathway blocker shows strong PASI 90 response rates in trials.", url: "https://x.com/US_FDA", timestamp: "1w ago", likes: 12400, reposts: 4900 },
      { platform: "x", author: "STAT News", handle: "@statnews", content: "Icotyde approved: New psoriasis drug for ages 12+. 75%+ PASI 90 response at week 16. The IL-17 pathway blocker is a welcome addition for teens and adults with moderate-to-severe plaque psoriasis.", url: "https://x.com/statnews", timestamp: "1w ago", likes: 8700, reposts: 3500 },
      { platform: "threads", author: "CNN Health", handle: "@cnnhealth", content: "FDA approves Icotyde for psoriasis in patients as young as 12. 75%+ achieved PASI 90 skin clearance at 16 weeks. The approval is especially significant for teens with the condition.", url: "https://www.threads.net/@cnnhealth", timestamp: "1w ago", likes: 9100, reposts: 3700 },
      { platform: "bluesky", author: "Healio", handle: "@healio.bsky.social", content: "Icotyde FDA approval: icotrokinra clears plaque psoriasis in 75%+ of trial patients at PASI 90. Now approved for ages 12 and up — an important milestone for adolescent psoriasis treatment.", url: "https://bsky.app/profile/healio.bsky.social", timestamp: "1w ago", likes: 5200, reposts: 2100 },
      { platform: "mastodon", author: "Medical News Today", handle: "@medicalnewstoday@mastodon.social", content: "FDA approves icotrokinra (Icotyde) March 17, 2026. IL-17 pathway blocker for moderate-to-severe plaque psoriasis ages 12+. Strong efficacy, favorable safety profile in clinical trials.", url: "https://mastodon.social/@medicalnewstoday", timestamp: "1w ago", likes: 3100, reposts: 1200 }
    ],
    newsArticles: [
      { title: "FDA approves Icotyde (icotrokinra) for plaque psoriasis in patients 12 and older", source: "FDA.gov", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/fda-approves-icotyde-icotrokinra-plaque-psoriasis", publishedAt: "Mar 17, 2026", snippet: "Icotrokinra (Icotyde), an IL-17 receptor blocker, was approved March 17, 2026 for moderate-to-severe plaque psoriasis in patients ages 12 and up." },
      { title: "Icotyde approved: New psoriasis drug clears skin in 75% of patients", source: "STAT News", url: "https://www.statnews.com/2026/03/17/fda-approves-icotyde-icotrokinra-psoriasis-12-plus/", publishedAt: "Mar 17, 2026", snippet: "More than 75% of patients achieved PASI 90 skin clearance at week 16 in Phase 3 trials of icotrokinra." },
      { title: "New psoriasis drug Icotyde approved for teens and adults", source: "Prime Therapeutics", url: "https://www.primetherapeutics.com/news/icotyde-icotrokinra-fda-approval-psoriasis-2026", publishedAt: "Mar 18, 2026", snippet: "The approval for patients 12 and older is significant, as psoriasis affects an estimated one million American teenagers." }
    ]
  },

  // ─── CRYPTO (2 new) ──────────────────────────────────────────────────────────

  {
    title: "SEC and CFTC Issue Historic Joint Crypto Regulatory Framework",
    summary: "The Securities and Exchange Commission and Commodity Futures Trading Commission issued their first-ever joint regulatory guidance on the classification and oversight of crypto assets, drawing a clearer line between tokens regulated as securities versus commodities. The framework addresses longstanding industry demands for regulatory clarity, establishing a formal process for projects to self-classify and register with the appropriate agency. The guidance is expected to unlock institutional capital that has been sitting on the sidelines waiting for a regulatory green light. Industry groups cautiously welcomed the move while flagging several areas requiring further clarification.",
    category: "crypto",
    trendScore: 68,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "CNBC", handle: "@CNBC", content: "HISTORIC: SEC and CFTC issue first-ever JOINT crypto regulatory framework. Security vs. commodity classification finally clarified. Industry calls it the 'green light' institutional money has been waiting for.", url: "https://x.com/CNBC", timestamp: "2d ago", likes: 34200, reposts: 13700 },
      { platform: "x", author: "CoinDesk", handle: "@CoinDesk", content: "SEC + CFTC joint guidance drops: The long-awaited regulatory framework for crypto assets is here. Securities vs. commodities classification, registration process, institutional pathways defined.", url: "https://x.com/CoinDesk", timestamp: "2d ago", likes: 27800, reposts: 11100 },
      { platform: "bluesky", author: "CoinDesk", handle: "@coindesk.bsky.social", content: "The SEC-CFTC joint crypto framework is the biggest regulatory development since the Bitcoin ETF approval. Industry groups cautiously positive but want more clarity on edge cases.", url: "https://bsky.app/profile/coindesk.bsky.social", timestamp: "2d ago", likes: 14600, reposts: 5900 },
      { platform: "threads", author: "Bloomberg Crypto", handle: "@bloombergcrypto", content: "SEC and CFTC joint crypto framework: The regulatory clarity crypto has needed for years. Institutions that have been waiting on the sidelines are now expected to move in.", url: "https://www.threads.net/@bloombergcrypto", timestamp: "2d ago", likes: 19200, reposts: 7700 },
      { platform: "mastodon", author: "Crypto Briefing", handle: "@cryptobriefing@mastodon.social", content: "Historic joint SEC-CFTC crypto guidance released. For the first time, regulators have drawn a clear line between crypto securities and commodities. The implications are enormous.", url: "https://mastodon.social/@cryptobriefing", timestamp: "3d ago", likes: 5800, reposts: 2400 }
    ],
    newsArticles: [
      { title: "SEC and CFTC issue first joint crypto regulatory framework", source: "CNBC", url: "https://www.cnbc.com/2026/03/22/sec-cftc-joint-crypto-regulatory-framework-guidance.html", publishedAt: "Mar 22, 2026", snippet: "The joint guidance draws a clearer regulatory line between crypto tokens classified as securities versus commodities, a long-sought distinction from the industry." },
      { title: "SEC-CFTC crypto framework: What it means for Bitcoin, Ethereum, and beyond", source: "CoinDesk", url: "https://www.coindesk.com/policy/2026/03/22/sec-cftc-joint-crypto-framework-regulatory-guidance/", publishedAt: "Mar 22, 2026", snippet: "The historic joint guidance is expected to unlock institutional capital that has been on the sidelines pending regulatory clarity." },
      { title: "Crypto industry reacts to joint SEC-CFTC regulatory guidance", source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-22/sec-cftc-joint-crypto-guidance-industry-reaction", publishedAt: "Mar 22, 2026", snippet: "Industry groups cautiously welcomed the framework while flagging several ambiguities requiring additional clarification from regulators." }
    ]
  },

  {
    title: "Mastercard Acquires BVNK in Major Move to Expand Crypto Payment Infrastructure",
    summary: "Mastercard has agreed to acquire BVNK, a crypto-native payments platform that allows businesses to send and receive payments in stablecoins and cryptocurrencies alongside traditional fiat currencies. The acquisition marks one of the largest moves by a traditional financial services company into cryptocurrency payment infrastructure and signals that major payment networks are committing fully to supporting digital asset transactions. BVNK processed billions in transactions annually and serves hundreds of enterprise clients. The deal is expected to accelerate Mastercard's stablecoin and crypto acceptance across its global network of 90+ million merchants.",
    category: "crypto",
    trendScore: 61,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "Bloomberg", handle: "@business", content: "BREAKING: Mastercard acquires BVNK in a major expansion into crypto payment infrastructure. One of the biggest TradFi moves into crypto payments to date. Deal terms undisclosed.", url: "https://x.com/business", timestamp: "3d ago", likes: 29400, reposts: 11800 },
      { platform: "x", author: "CoinDesk", handle: "@CoinDesk", content: "Mastercard buys BVNK. Crypto payment infrastructure is now inside one of the world's largest payment networks. Stablecoins and digital assets coming to 90M+ merchants.", url: "https://x.com/CoinDesk", timestamp: "3d ago", likes: 22100, reposts: 8900 },
      { platform: "threads", author: "Bloomberg Crypto", handle: "@bloombergcrypto", content: "Mastercard's BVNK acquisition: The payment giant is fully committing to crypto infrastructure. BVNK's stablecoin and crypto rails will now power Mastercard's global merchant network.", url: "https://www.threads.net/@bloombergcrypto", timestamp: "3d ago", likes: 16700, reposts: 6700 },
      { platform: "bluesky", author: "CoinDesk", handle: "@coindesk.bsky.social", content: "Mastercard + BVNK: The acquisition gives the payment network enterprise-grade crypto infrastructure for stablecoins and digital asset transactions across its 90M+ merchant base.", url: "https://bsky.app/profile/coindesk.bsky.social", timestamp: "3d ago", likes: 11300, reposts: 4500 },
      { platform: "mastodon", author: "Crypto Briefing", handle: "@cryptobriefing@mastodon.social", content: "Mastercard acquiring BVNK sends a clear signal: traditional finance isn't just watching crypto — it's buying in. This is a defining moment for crypto payment adoption.", url: "https://mastodon.social/@cryptobriefing", timestamp: "4d ago", likes: 4800, reposts: 1900 }
    ],
    newsArticles: [
      { title: "Mastercard acquires BVNK to expand crypto payment infrastructure", source: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-21/mastercard-acquires-bvnk-crypto-payments", publishedAt: "Mar 21, 2026", snippet: "The acquisition gives Mastercard enterprise-grade infrastructure to process cryptocurrency and stablecoin payments across its global merchant network." },
      { title: "Mastercard buys crypto payments firm BVNK", source: "CoinDesk", url: "https://www.coindesk.com/business/2026/03/21/mastercard-acquires-bvnk-crypto-stablecoin-payments/", publishedAt: "Mar 21, 2026", snippet: "BVNK processed billions annually and serves hundreds of enterprise clients using stablecoins and crypto alongside fiat currencies." },
      { title: "Why Mastercard's BVNK acquisition is a turning point for crypto payments", source: "CNBC", url: "https://www.cnbc.com/2026/03/21/mastercard-bvnk-acquisition-crypto-payments-stablecoin.html", publishedAt: "Mar 21, 2026", snippet: "The deal accelerates crypto acceptance across Mastercard's network of over 90 million merchants worldwide, a major milestone for digital asset adoption." }
    ]
  },

  // ─── SPORTS (2 new) ──────────────────────────────────────────────────────────

  {
    title: "NBA Playoff Race Heats Up With Two Weeks Left in the Regular Season",
    summary: "With just two weeks remaining in the NBA regular season, the playoff picture in both conferences remains unusually competitive. In the Eastern Conference, five teams are separated by just two games in the fight for the 4th through 8th seeds. The Western Conference play-in race is similarly tight, with three teams battling for two spots. Several marquee games are scheduled for this week that could significantly reshape the seeding landscape before the playoffs begin. Injuries and late-season fatigue are becoming key factors as franchises jostle for positioning and home-court advantage.",
    category: "sports",
    trendScore: 72,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "ESPN", handle: "@ESPN", content: "NBA playoff picture with 2 weeks left: Eastern Conference 4-8 seeds separated by 2 games. Western play-in is a 3-team battle for 2 spots. Every game matters from here.", url: "https://x.com/ESPN", timestamp: "10h ago", likes: 43200, reposts: 17300 },
      { platform: "x", author: "NBA", handle: "@NBA", content: "The race to the playoffs is on. 14 days left in the regular season. Multiple games this week with major seeding implications in both conferences. Stay locked in.", url: "https://x.com/NBA", timestamp: "11h ago", likes: 61400, reposts: 24600 },
      { platform: "threads", author: "Bleacher Report", handle: "@bleacherreport", content: "NBA playoff race update: Five Eastern teams within 2 games of each other for seeds 4-8. Injuries are starting to matter. The next two weeks are must-watch basketball.", url: "https://www.threads.net/@bleacherreport", timestamp: "12h ago", likes: 24800, reposts: 9900 },
      { platform: "bluesky", author: "The Athletic", handle: "@theathletic.bsky.social", content: "NBA end-of-season chaos incoming. Play-in tournament spots are genuinely undecided in both conferences with 2 weeks to go. This is the most compelling late-season race in years.", url: "https://bsky.app/profile/theathletic.bsky.social", timestamp: "12h ago", likes: 14600, reposts: 5800 },
      { platform: "mastodon", author: "Hoops Hype", handle: "@hoopshype@mastodon.social", content: "NBA two weeks out: Eastern Conference 4-8 is mayhem. Western play-in is a battle royale. Multiple 3-game road trips for contenders finishing the season. Fatigue will be a major factor.", url: "https://mastodon.social/@hoopshype", timestamp: "13h ago", likes: 5100, reposts: 2100 }
    ],
    newsArticles: [
      { title: "NBA playoff race: Every team's standing with two weeks to go", source: "ESPN", url: "https://www.espn.com/nba/story/_/id/40200182/nba-playoff-race-standings-two-weeks-regular-season-2026", publishedAt: "Mar 24, 2026", snippet: "Five teams are separated by two games in the Eastern Conference 4-8 seed race, while three Western teams are battling for two play-in spots." },
      { title: "NBA playoff picture: Updated seedings and critical games ahead", source: "NBA.com", url: "https://www.nba.com/news/nba-playoff-picture-standings-march-24-2026", publishedAt: "Mar 24, 2026", snippet: "The most competitive late-season race in years has both conference playoff pictures unresolved with 14 days left in the regular season." },
      { title: "Injuries and fatigue complicating NBA playoff push for contenders", source: "The Athletic", url: "https://theathletic.com/nba/2026/03/24/nba-playoffs-race-injuries-fatigue-final-two-weeks/", publishedAt: "Mar 24, 2026", snippet: "Multiple playoff contenders are managing key injuries down the stretch, adding another layer of uncertainty to an already chaotic seeding race." }
    ]
  },

  {
    title: "NFL Free Agency 2026: Record Deals Reshape League as Offseason Spending Hits New Highs",
    summary: "The 2026 NFL free agency period has been defined by record-setting contracts across multiple positions, with total league spending already surpassing 2025 figures in just the first two weeks. Several marquee quarterbacks changed teams, with at least three starting-caliber signal-callers signing deals exceeding $50 million per year. Wide receiver and edge rusher markets also saw historic contract values. Small-market teams have been particularly aggressive, with several franchises resetting positional markets. The offseason reshuffling sets up what analysts say could be one of the most evenly competitive seasons in recent memory.",
    category: "sports",
    trendScore: 65,
    imageUrl: null,
    socialPosts: [
      { platform: "x", author: "NFL", handle: "@NFL", content: "NFL free agency 2026: Record spending. Multiple QBs at $50M+/year. Receiver and edge rusher markets exploding. Several smaller-market teams going all-in. The league is being reshuffled.", url: "https://x.com/NFL", timestamp: "5d ago", likes: 58300, reposts: 23300 },
      { platform: "x", author: "ESPN NFL", handle: "@ESPNNFL", content: "2026 NFL free agency has already broken total spending records from 2025. Three $50M+ QB deals. Position markets at wide receiver and edge rusher are at historic levels.", url: "https://x.com/ESPNNFL", timestamp: "5d ago", likes: 41700, reposts: 16700 },
      { platform: "threads", author: "NFL Network", handle: "@nflnetwork", content: "NFL FA 2026: The offseason reshuffling is unprecedented. Multiple marquee QBs moved. Record contracts across positions. Analysts say 2026 could be the most competitive season in 10 years.", url: "https://www.threads.net/@nflnetwork", timestamp: "5d ago", likes: 26400, reposts: 10600 },
      { platform: "bluesky", author: "Pro Football Talk", handle: "@pftovernight.bsky.social", content: "NFL free agency spending in 2026 has already surpassed all of 2025 with two weeks still to go. The quarterback market is redefining what $50M per year means.", url: "https://bsky.app/profile/pftovernight.bsky.social", timestamp: "5d ago", likes: 17800, reposts: 7100 },
      { platform: "mastodon", author: "Sports Reference", handle: "@sportsref@mastodon.social", content: "2026 NFL free agency historical context: The total contract value of deals signed in the first 2 weeks is already a league record. Multiple positions are seeing unprecedented market resets.", url: "https://mastodon.social/@sportsref", timestamp: "6d ago", likes: 5900, reposts: 2400 }
    ],
    newsArticles: [
      { title: "NFL free agency 2026: Record spending as multiple QBs land $50M+ deals", source: "ESPN", url: "https://www.espn.com/nfl/story/_/id/40200190/nfl-free-agency-2026-record-spending-quarterback-deals", publishedAt: "Mar 19, 2026", snippet: "Total NFL free agency spending in 2026 has already surpassed 2025 figures in under two weeks, with at least three quarterback deals exceeding $50 million per year." },
      { title: "NFL free agency tracker 2026: Every major signing and what it means", source: "NFL.com", url: "https://www.nfl.com/news/nfl-free-agency-tracker-2026-major-signings", publishedAt: "Mar 20, 2026", snippet: "From marquee quarterback moves to historic receiver and edge rusher contracts, 2026 NFL free agency is reshaping the league's competitive landscape." },
      { title: "2026 NFL free agency: Why this offseason reshuffling could make the season the most competitive in a decade", source: "The Athletic", url: "https://theathletic.com/nfl/2026/03/20/2026-nfl-free-agency-record-spending-competitive-season/", publishedAt: "Mar 20, 2026", snippet: "Analysts predict the 2026 distribution of top talent across teams could result in one of the most evenly competitive NFL seasons in recent memory." }
    ]
  }
  ];

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
