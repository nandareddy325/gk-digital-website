export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-mistakes-costing-you-traffic",
    title: "10 SEO Mistakes That Are Costing Your Business Traffic",
    excerpt:
      "Most SEO problems aren't exotic — they're basic technical and content issues that quietly bleed traffic month after month. Here's what to fix first.",
    category: "SEO",
    date: "2026-06-02",
    readTime: "6 min read",
    image: "/blog-seo-mistakes.png",
    content: [
      "Most businesses don't lose search traffic because of some advanced algorithm change — they lose it to the same handful of avoidable mistakes. Slow page load times top the list. If your site takes more than three seconds to load, a meaningful share of visitors leave before it finishes, and Google notices that bounce.",
      "Missing or duplicate title tags are another common issue. Every page needs a unique, descriptive title that tells both users and search engines what the page is about — generic titles like 'Home' or 'Services' waste valuable ranking real estate.",
      "Thin content is a quiet traffic killer too. Pages with a few sentences and no real depth struggle to rank for anything competitive. Google increasingly rewards pages that thoroughly answer a searcher's question.",
      "Other frequent culprits: broken internal links, no mobile optimization, ignoring Google Business Profile, keyword stuffing, missing alt text on images, and simply never updating old content. None of these require a redesign — just a systematic audit and steady fixes over a few weeks.",
      "The good news is that these are all fixable without a full rebuild. A focused technical and content audit usually uncovers 80% of the traffic leakage in the first pass.",
    ],
  },
  {
    slug: "google-ads-vs-facebook-ads",
    title: "Google Ads vs. Facebook Ads: Which One Is Right for Your Business?",
    excerpt:
      "Both platforms can drive real revenue, but they work on completely different logic — intent versus interest. Here's how to decide where your budget should go first.",
    category: "Paid Ads",
    date: "2026-06-09",
    readTime: "5 min read",
    image: "/blog-ads-comparison.png",
    content: [
      "Google Ads captures demand that already exists. Someone searching 'interior designer near me' has already decided they want the service — your ad just needs to convince them you're the right choice. This makes Google Ads especially strong for high-intent, transactional searches.",
      "Facebook and Instagram Ads work differently — they create demand by interrupting a scroll with something visually compelling. Nobody is actively searching, so the creative and targeting have to do more work to spark interest.",
      "As a rule of thumb, businesses with a clear, searchable need (real estate, healthcare, legal, home services) tend to see faster returns from Google Ads. Businesses that sell on visual appeal or lifestyle (fashion, interiors, food, fitness) often get more traction from Meta's ad formats.",
      "In practice, the strongest performing accounts we manage use both — Google Ads to capture people already looking, and Meta Ads to build awareness and retarget people who visited but didn't convert. The channels complement each other more than they compete.",
    ],
  },
  {
    slug: "optimize-google-business-profile-local-search",
    title: "How to Optimize Your Google Business Profile for Local Search",
    excerpt:
      "Your Google Business Profile is often the first thing a local customer sees. A few overlooked settings can be the difference between showing up in the map pack or not.",
    category: "Local SEO",
    date: "2026-06-16",
    readTime: "5 min read",
    image: "/blog-google-business-profile.png",
    content: [
      "Start with completeness. Every field Google gives you — business category, service area, hours, attributes, products — should be filled in accurately. Incomplete profiles are a common reason businesses don't show up in the local 3-pack.",
      "Category selection matters more than most businesses realize. Choose the most specific primary category available, and add relevant secondary categories rather than relying on one broad label.",
      "Reviews are a major ranking signal and a trust signal at the same time. A steady flow of recent, genuine reviews — and thoughtful responses to each one — tends to outperform a large pile of old reviews with no engagement.",
      "Photos matter too. Profiles with regularly updated, high-quality photos of the actual business, team, and work get more clicks than those using stock imagery or nothing at all.",
      "Finally, keep your Posts feature active. Weekly updates about offers, projects, or announcements signal an active business to both customers and Google's local algorithm.",
    ],
  },
  {
    slug: "lead-generation-funnel-guide",
    title: "The Ultimate Guide to Building a Lead Generation Funnel That Converts",
    excerpt:
      "A lead generation funnel isn't just an ad and a form — it's a connected system from first click to closed deal. Here's how the pieces fit together.",
    category: "Lead Generation",
    date: "2026-06-23",
    readTime: "7 min read",
    image: "/blog-lead-funnel-guide.png",
    content: [
      "A working lead funnel has four connected parts: an ad or organic entry point, a landing page built for one specific action, a follow-up sequence, and a tracking system that shows what actually closes — not just what generates clicks.",
      "The landing page is where most funnels fail. A page trying to explain everything about a business rarely converts as well as a page focused on one offer, one form, and one clear next step.",
      "Speed of follow-up is underrated. Leads contacted within five minutes convert dramatically better than leads contacted after an hour, simply because interest fades fast. This is where WhatsApp automation and CRM-triggered follow-ups earn their keep.",
      "Lead scoring helps sales teams prioritize — not every form fill deserves the same urgency. Budget, timeline, and service fit should all factor into how quickly and how a lead gets contacted.",
      "Finally, none of this matters without a CRM tying it together. Without a system that tracks a lead from first click to closed deal, you're optimizing for form fills instead of the thing that actually matters — revenue.",
    ],
  },
  {
    slug: "signs-your-website-needs-a-redesign",
    title: "5 Signs Your Website Needs a Redesign (And What to Do About It)",
    excerpt:
      "A website doesn't have to look broken to be costing you business. These are the quieter signals that it's time for an update.",
    category: "Web Design",
    date: "2026-06-30",
    readTime: "4 min read",
    image: "/blog-website-redesign.png",
    content: [
      "If your bounce rate is climbing on mobile specifically, that's usually a design and speed problem, not a content problem. Over half of web traffic is mobile now, and a site that isn't built mobile-first will keep losing visitors.",
      "A second sign is stagnant or falling conversion rates even as traffic holds steady — visitors are arriving but not taking action, which often points to unclear calls-to-action or a confusing layout.",
      "If your last redesign predates current design conventions (clunky navigation, small fonts, no clear visual hierarchy), visitors subconsciously read that as outdated — and extend that impression to your business.",
      "Slow load times are a fourth signal worth acting on immediately, since speed affects both user experience and search rankings.",
      "Lastly, if your site can't easily support what your business does today — new services, an updated brand, e-commerce — it's holding growth back rather than supporting it. A redesign at that point isn't cosmetic, it's overdue infrastructure work.",
    ],
  },
  {
    slug: "whatsapp-marketing-101",
    title: "WhatsApp Marketing 101: How to Turn Conversations Into Conversions",
    excerpt:
      "WhatsApp has some of the highest open rates of any channel, but most businesses use it like a support inbox instead of a growth channel. Here's how to change that.",
    category: "WhatsApp Marketing",
    date: "2026-07-07",
    readTime: "5 min read",
    image: "/blog-whatsapp-marketing.png",
    content: [
      "WhatsApp messages get opened at a much higher rate than email, and far faster too — most get read within minutes. That makes it a strong channel for time-sensitive offers, appointment reminders, and lead follow-up.",
      "The foundation is a WhatsApp Business account with a complete catalog, business hours, and quick-reply templates — small details that make the account feel professional rather than like a personal chat.",
      "Automated first responses matter more than most businesses expect. A lead who messages and waits hours for a reply cools off fast; an instant acknowledgment plus a same-day human follow-up keeps the conversation warm.",
      "Broadcast lists let you reach existing customers with updates or offers without needing a group, but they only work well when the list is opted-in and segmented — a broadcast to everyone about everything gets ignored fast.",
      "Used well, WhatsApp becomes less of a support channel and more of a lightweight CRM touchpoint — nurturing leads and existing customers with far less friction than email or calls.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}