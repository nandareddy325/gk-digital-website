export type ServiceDetail = {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  included: string[];
  metaTitle: string;
  metaDescription: string;
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
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
