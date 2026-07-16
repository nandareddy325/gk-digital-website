export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  summary: string;
  logo?: string; // optional path in /public if you have client logos
  coverImage?: string; // optional path in /public
  timeline: string; // e.g. "4 months"
  stats: {
    label: string;
    value: string; // e.g. "+180%", "3.2x", "₹12L"
  }[];
  challenge: string;
  approach: string[]; // bullet points of what you did
  results: string; // narrative summary of outcome
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

// ⚠️ PLACEHOLDER DATA — replace every stat, quote, and description below
// with real numbers and client-approved language before publishing.
// Publishing fabricated results is a legal/trust risk — get sign-off
// from each client before using their name and figures publicly.

export const caseStudies: CaseStudy[] = [
  {
    slug: "epos-audio",
    client: "EPOS Audio",
    industry: "Consumer Electronics / D2C",
    services: ["Meta Ads", "Website Design", "SEO"],
    summary:
      "Rebuilt the ad funnel and website experience to reduce cost-per-lead and improve conversion rate for a growing audio brand.",
    timeline: "3 months",
    stats: [
      { label: "Cost per lead", value: "-42%" },
      { label: "Conversion rate", value: "+65%" },
      { label: "Monthly leads", value: "3.1x" },
    ],
    challenge:
      "EPOS Audio had steady ad spend but leads were expensive and the website wasn't converting visitors who did click through.",
    approach: [
      "Rebuilt Meta Ads campaign structure around 3 core audience segments",
      "Redesigned landing pages with clearer product benefits and faster load times",
      "Set up conversion tracking to identify which creatives actually drove sales",
      "Introduced weekly creative testing cycle",
    ],
    results:
      "Within 3 months, cost per lead dropped significantly while lead volume grew, giving the brand a repeatable, predictable acquisition channel.",
  },
  {
    slug: "vardhan-infra",
    client: "Vardhan Infra",
    industry: "Real Estate / Construction",
    services: ["Google Ads", "Lead Generation", "SEO"],
    summary:
      "Built a local lead-generation engine to fill the sales pipeline for ongoing residential projects.",
    timeline: "4 months",
    stats: [
      { label: "Qualified leads/month", value: "+210%" },
      { label: "Cost per lead", value: "-38%" },
      { label: "Organic traffic", value: "2.4x" },
    ],
    challenge:
      "Vardhan Infra relied heavily on referrals and had no consistent digital pipeline for new project enquiries.",
    approach: [
      "Launched location-targeted Google Ads campaigns for active project sites",
      "Built dedicated landing pages per project with clear CTAs",
      "Set up WhatsApp-based lead follow-up for faster response times",
      "Ongoing local SEO to rank for project + area keywords",
    ],
    results:
      "A steady, trackable stream of qualified enquiries replaced the unpredictable referral-only pipeline.",
  },
  {
    slug: "swarga-balcony-makeovers",
    client: "Swarga Balcony Makeovers",
    industry: "Home Improvement / Interior Design",
    services: ["Meta Ads", "Branding", "Social Media Marketing"],
    summary:
      "Positioned a niche balcony-design service as a premium, trustworthy brand and scaled lead volume ahead of a franchise expansion.",
    timeline: "6 months",
    stats: [
      { label: "Monthly leads", value: "+175%" },
      { label: "Instagram engagement", value: "3.8x" },
      { label: "Franchise enquiries", value: "+90%" },
    ],
    challenge:
      "As a relatively new category, Swarga needed to build awareness and trust before it could scale lead generation or franchise interest.",
    approach: [
      "Developed a consistent brand identity and content style across social channels",
      "Ran a mix of awareness and conversion Meta Ads campaigns",
      "Built a franchise-expansion blueprint and dedicated landing page",
      "Produced before/after transformation content to build social proof",
    ],
    results:
      "Grew from a local service into a brand fielding franchise enquiries from multiple cities.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}