export type ServiceFaq = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  included: string[];
  metaTitle: string;
  metaDescription: string;
  image?: string;
  // Optional — when present, ServiceDetailTemplate uses these instead of
  // the generic fallback FAQ list, so each service page can answer the
  // questions that are actually specific to it.
  faqs?: ServiceFaq[];
};

export const services: ServiceDetail[] = [
  {
    slug: "seo",
    title: "SEO",
    headline: "Rank Higher. Get Found. Grow Organically.",
    intro:
      "Our SEO services are built to increase your visibility on Google and drive consistent, high-quality organic traffic — without paying for every click. We handle everything from technical SEO fixes to on-page optimization, content strategy, and authoritative link building.",
    included: [
      "Keyword research",
      "On-page SEO",
      "Technical SEO audits",
      "Content optimization",
      "Link building",
      "Competitor gap analysis",
      "Monthly ranking reports",
    ],
    metaTitle: "SEO Services | GK Digital Solutions",
    metaDescription:
      "Rank higher on Google with GK Digital Solutions' SEO services — keyword research, technical audits, content optimization and link building.",
    image: "/service-seo.png",
    faqs: [
      { q: "How long does SEO take to show results?", a: "Most sites see early movement — impressions, new keyword rankings — within 6–8 weeks. Meaningful traffic and lead growth usually compounds over 3–6 months, since Google needs time to trust a changing site." },
      { q: "Do you guarantee a #1 ranking?", a: "No, and be cautious of anyone who does — no one controls Google's algorithm. What we commit to is a documented process, monthly reporting, and rankings that trend up over time." },
      { q: "Will SEO work replace my Google Ads spend?", a: "Eventually it reduces reliance on paid clicks for the keywords you rank for, but the two work best together in the short term — ads for immediate visibility while SEO builds." },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads (PPC)",
    headline: "Instant Visibility. High-Intent Traffic. Measurable ROI.",
    intro:
      "We create and manage Google Ads campaigns that put your business in front of customers exactly when they're searching for what you offer. Our PPC specialists focus on maximizing conversions while minimizing wasted ad spend.",
    included: [
      "Campaign strategy",
      "Keyword bidding",
      "Ad copywriting",
      "Landing page recommendations",
      "A/B testing",
      "Conversion tracking",
      "Budget optimization",
    ],
    metaTitle: "Google Ads (PPC) Management | GK Digital Solutions",
    metaDescription:
      "GK Digital Solutions builds and manages Google Ads campaigns that maximize conversions and minimize wasted ad spend.",
    image: "/service-ads.png",
    faqs: [
      { q: "What's a realistic minimum budget?", a: "For most Hyderabad categories, ₹30,000–₹40,000/month in ad spend is enough to get a statistically useful read within the first month. Below that, results get noisy and hard to optimize." },
      { q: "How fast can a campaign go live?", a: "Once accounts, tracking and creative are ready, campaigns typically launch within 5–7 working days of the audit." },
      { q: "Do you manage the budget or just the setup?", a: "We manage it end-to-end — bidding, budget shifts between ad groups, and weekly optimization against conversion data, not just a one-time setup." },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta & Instagram Ads",
    headline: "Reach the Right Audience. Every Time.",
    intro:
      "We design and manage Facebook and Instagram ad campaigns that combine sharp targeting with scroll-stopping creative — turning social scrolling into real business growth.",
    included: [
      "Audience research & targeting",
      "Creative design",
      "Ad copywriting",
      "Retargeting funnels",
      "A/B testing",
      "Performance tracking",
    ],
    metaTitle: "Meta & Instagram Ads | GK Digital Solutions",
    metaDescription:
      "Facebook and Instagram ad campaigns built on sharp targeting and scroll-stopping creative, managed by GK Digital Solutions.",
    image: "/service-ads.png",
    faqs: [
      { q: "How many creatives do I need to supply?", a: "None — our team shoots and designs the creative as part of the service. If you have existing brand photography or footage, we can work that in too." },
      { q: "Instagram or Facebook — which matters more?", a: "It depends on your audience's age and category, but most campaigns run across both from the same ad set, since Meta's delivery optimizes across placements automatically." },
      { q: "How is this different from boosting a post?", a: "Boosting optimizes for engagement on one post. A managed campaign is built around a conversion goal — leads, bookings, sales — with proper targeting, retargeting and tracking behind it." },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    headline: "Build a Brand People Actually Follow",
    intro:
      "We manage your social media presence with a content strategy designed to grow your audience, boost engagement, and build long-term brand trust — across Instagram, Facebook, LinkedIn, and more.",
    included: [
      "Content calendar",
      "Graphic & video content",
      "Caption writing",
      "Hashtag strategy",
      "Community management",
      "Monthly analytics",
    ],
    metaTitle: "Social Media Marketing | GK Digital Solutions",
    metaDescription:
      "Grow your audience and build long-term brand trust with GK Digital Solutions' social media marketing services.",
    faqs: [
      { q: "How many posts per week are included?", a: "Cadence is scoped to your category and goals during the audit — typically 3–5 feed posts and daily stories for an active brand presence." },
      { q: "Do you handle replies to comments and DMs?", a: "Yes, community management is included — we respond within business hours and flag anything sales-relevant for your team." },
      { q: "Does this include paid promotion?", a: "This service covers organic content and growth. Paid promotion is scoped separately under Meta & Instagram Ads, since the strategy and budget work differently." },
    ],
  },
  {
    slug: "website-design",
    title: "Website Design & Development",
    headline: "Fast, Modern Websites Built to Convert",
    intro:
      "Your website is your digital storefront. We design and build responsive, high-performance websites that look premium, load fast, and are optimized to turn visitors into customers.",
    included: [
      "UI/UX design",
      "Responsive development",
      "SEO-friendly structure",
      "Speed optimization",
      "CMS setup",
      "Mobile optimization",
      "E-commerce integration (if needed)",
    ],
    metaTitle: "Website Design & Development | GK Digital Solutions",
    metaDescription:
      "Responsive, high-performance websites designed and built by GK Digital Solutions to convert visitors into customers.",
    image: "/service-website-design.png",
    faqs: [
      { q: "How long does a website build take?", a: "A typical business website takes 3–5 weeks from approved design to launch; e-commerce or larger sites run 6–8 weeks depending on catalog size." },
      { q: "Will I be able to update content myself?", a: "Yes — sites are built on a CMS so you can update text, images and basic pages without needing a developer for every change." },
      { q: "Do you handle hosting and domain setup too?", a: "We can set both up and hand over access, or work with hosting you already have — either way, you retain ownership of the domain and hosting account." },
    ],
  },
  {
    slug: "branding",
    title: "Branding & Graphic Design",
    headline: "A Visual Identity That Makes You Unforgettable",
    intro:
      "From logos to complete brand guidelines, we craft visual identities that communicate your brand's personality and build instant trust with your audience.",
    included: [
      "Logo design",
      "Brand color & typography systems",
      "Brand guidelines",
      "Business collateral",
      "Social media templates",
      "Packaging design",
    ],
    metaTitle: "Branding & Graphic Design | GK Digital Solutions",
    metaDescription:
      "Visual identities that build instant trust — logo design, brand guidelines and collateral from GK Digital Solutions.",
    faqs: [
      { q: "How many logo concepts do I get to choose from?", a: "Typically 2–3 distinct directions in the first round, refined into a final logo based on your feedback — not endless revisions on one idea." },
      { q: "Do I own the final files?", a: "Yes — once the project is complete, you receive full source files and usage rights. The brand is yours, not licensed back to us." },
      { q: "Can you rebrand an existing business, not just start from scratch?", a: "Yes — rebrands are common. We start by auditing what's working in your current identity before deciding what to keep versus replace." },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    headline: "Content That Builds Authority and Drives Traffic",
    intro:
      "We create blog posts, articles, videos, and downloadable resources that position your brand as an industry authority while feeding your SEO and social strategy.",
    included: [
      "Content strategy",
      "Blog writing",
      "SEO content optimization",
      "Infographics",
      "Video scripts",
      "Content distribution",
    ],
    metaTitle: "Content Marketing | GK Digital Solutions",
    metaDescription:
      "Blog posts, articles and resources that build authority and drive organic traffic, created by GK Digital Solutions.",
    faqs: [
      { q: "Who writes the content — AI or a real person?", a: "A strategist scopes the topics and outline based on real search and customer questions; writing is reviewed and edited by our team before it goes live, not published unedited." },
      { q: "How does this connect to SEO?", a: "Content topics are chosen from actual keyword and competitor gaps, so this service feeds directly into your SEO rankings rather than running as a separate stream." },
      { q: "Can you write for a niche or technical industry?", a: "Yes — the strategy phase includes learning your specific category so the content reads as informed, not generic filler." },
    ],
  },
  {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    headline: "Direct, Personal, High-Converting Communication",
    intro:
      "We help businesses use WhatsApp Business tools to nurture leads, send updates, and close sales through direct, personalized communication at scale.",
    included: [
      "WhatsApp Business setup",
      "Broadcast campaigns",
      "Automated chatbots",
      "Catalog integration",
      "Lead nurturing sequences",
    ],
    metaTitle: "WhatsApp Marketing | GK Digital Solutions",
    metaDescription:
      "Nurture leads and close sales with WhatsApp Business automation, broadcasts and chatbots from GK Digital Solutions.",
    image: "/service-leadgen-whatsapp.png",
    faqs: [
      { q: "Do I need the WhatsApp Business API, or is the app enough?", a: "For basic broadcasts and catalogs, the free WhatsApp Business app can work. For automated chatbots and CRM-triggered messages at scale, the Business API is required — we'll tell you which fits your volume." },
      { q: "Will messages feel spammy to customers?", a: "Only if broadcasts go to an unsegmented, non-opted-in list. We build lists and message cadence to stay useful rather than promotional-only, which is what keeps open rates high." },
      { q: "Does this connect to the CRM?", a: "Yes — leads that come in through WhatsApp are tagged and routed into your CRM pipeline the same way as ad or website leads." },
    ],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    headline: "Turn Your Email List Into a Revenue Channel",
    intro:
      "We design and manage email campaigns that nurture leads, retain customers, and drive repeat sales — from welcome sequences to promotional campaigns.",
    included: [
      "Email strategy",
      "Template design",
      "Automation workflows",
      "List segmentation",
      "A/B testing",
      "Performance analytics",
    ],
    metaTitle: "Email Marketing | GK Digital Solutions",
    metaDescription:
      "Email campaigns that nurture leads and drive repeat sales, designed and managed by GK Digital Solutions.",
    faqs: [
      { q: "I don't have an email list yet — can you help build one?", a: "Yes — list-building (opt-in forms, lead magnets) is scoped alongside the campaign strategy if you're starting from zero." },
      { q: "How often should we email our list?", a: "Cadence depends on your category, but most brands land between weekly and bi-weekly — frequent enough to stay top-of-mind, not so often it drives unsubscribes." },
      { q: "Which platform do you use?", a: "We work with whatever your business already has (Mailchimp, Klaviyo, etc.) or recommend a platform based on your CRM and list size if you're starting fresh." },
    ],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    headline: "A Predictable Pipeline of Qualified Prospects",
    intro:
      "We build lead generation systems that combine paid ads, landing pages, and follow-up automation to consistently deliver qualified prospects to your sales team.",
    included: [
      "Landing page design",
      "Lead magnets",
      "Ad campaigns",
      "CRM integration",
      "Lead scoring",
      "Follow-up automation",
    ],
    metaTitle: "Lead Generation Services | GK Digital Solutions",
    metaDescription:
      "Predictable pipelines of qualified prospects built with paid ads, landing pages and CRM integration.",
    image: "/service-leadgen-whatsapp.png",
    faqs: [
      { q: "How is this different from just running ads?", a: "Ads are one input. This service also covers the landing page, lead scoring, and CRM-triggered follow-up — the parts that decide whether a click actually becomes a qualified lead." },
      { q: "What counts as a \"qualified\" lead?", a: "Defined together in the audit, based on budget, timeline and fit signals specific to your business — not just a form submission." },
      { q: "Do I need my own CRM for this?", a: "No — if you don't have one, we can set up a lightweight pipeline as part of this service so leads aren't tracked in a spreadsheet." },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO & Google Business Profile",
    headline: "Dominate Local Search and Google Maps",
    intro:
      "We optimize your Google Business Profile and local SEO presence to help you show up in local searches and the Google Maps 3-pack — right when nearby customers are ready to buy.",
    included: [
      "GBP optimization",
      "Local citations",
      "Review management strategy",
      "Local keyword targeting",
      "Local landing pages",
    ],
    metaTitle: "Local SEO & GBP Optimization | GK Digital Solutions",
    metaDescription:
      "Show up in local search and the Google Maps 3-pack with GK Digital Solutions' local SEO and GBP optimization.",
    faqs: [
      { q: "I already have a Google Business Profile — is this still useful?", a: "Yes — most existing profiles are incomplete or miscategorized. The first step is always an audit of what's there before adding anything new." },
      { q: "How do you handle negative reviews?", a: "We can't remove genuine reviews, but we set up a response strategy and a process to proactively request reviews from happy customers, which shifts the average over time." },
      { q: "Does this help if I have multiple branches?", a: "Yes — multi-location businesses need a profile and local landing page per branch; we scope this per location during the audit." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}