export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  painPoints: string[];
  services: { title: string; desc: string }[];
  whyUs: string[];
};

export const industries: Industry[] = [
  {
    slug: "interior-design",
    name: "Interior Design",
    tagline: "Fill your project pipeline with qualified, ready-to-spend leads.",
    summary:
      "Interior design is a high-consideration, high-ticket category — buyers research for weeks before reaching out. We build the ad campaigns, landing pages, and follow-up systems that turn that research phase into booked site visits.",
    painPoints: [
      "Leads that ghost after the first WhatsApp message",
      "Ad spend going to people who were 'just browsing'",
      "No visibility into which platform actually drives site visits vs. tyre-kickers",
      "Portfolio work not translating into enquiries",
    ],
    services: [
      {
        title: "Meta & Google Ads for interior design",
        desc: "Budget and room-type targeted campaigns that filter for serious, ready-to-hire homeowners.",
      },
      {
        title: "Portfolio-driven website & landing pages",
        desc: "Project galleries and budget calculators designed to convert browsers into enquiries.",
      },
      {
        title: "CRM & lead pipeline setup",
        desc: "Every lead tracked from first contact to site visit to signed quotation — nothing falls through.",
      },
      {
        title: "WhatsApp automation & follow-up",
        desc: "Instant response to new enquiries so you're never the second call they make.",
      },
    ],
    whyUs: [
      "We run our own interior design brand's marketing (GK Home Interiors) — we've tested what we recommend",
      "Built a purpose-made CRM for the interior design sales pipeline",
      "We understand long sales cycles and multi-touch follow-up, not just one-time lead capture",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Predictable, location-targeted enquiries for your active projects.",
    summary:
      "Real estate marketing lives and dies on speed and targeting — the right ad, to the right buyer, for the right project, at the right time. We build project-specific campaigns that generate qualified site-visit requests, not just form fills.",
    painPoints: [
      "Over-reliance on broker referrals with no digital pipeline",
      "Generic ads that don't map to a specific project or location",
      "Slow lead response times losing hot enquiries to competitors",
      "No way to know which project or channel is actually converting",
    ],
    services: [
      {
        title: "Project-specific Google & Meta Ads",
        desc: "Location and budget-targeted campaigns built around each active project, not a generic brand ad.",
      },
      {
        title: "Landing pages per project",
        desc: "Dedicated pages with floor plans, pricing ranges, and clear site-visit CTAs.",
      },
      {
        title: "Local SEO",
        desc: "Rank for '[project type] in [area]' searches where serious buyers are already looking.",
      },
      {
        title: "Fast-response lead routing",
        desc: "WhatsApp and call-routing setup so enquiries reach your sales team within minutes, not hours.",
      },
    ],
    whyUs: [
      "Experience running location-targeted campaigns for active construction projects",
      "Built lead-generation systems for real estate and infra clients",
      "Focus on qualified site-visit requests, not vanity lead counts",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    tagline: "Build patient trust online and fill appointment calendars.",
    summary:
      "Healthcare marketing requires a different approach — trust, accuracy, and compliance matter as much as conversion. We help clinics and hospitals build a credible online presence that turns searches into booked appointments.",
    painPoints: [
      "Low visibility for local 'doctor near me' or specialty searches",
      "Website that doesn't build trust or make booking easy",
      "No consistent patient-acquisition channel beyond walk-ins and referrals",
      "Reviews and reputation scattered or poorly managed",
    ],
    services: [
      {
        title: "Local SEO for clinics & hospitals",
        desc: "Rank for specialty and location-based searches; optimized Google Business Profile management.",
      },
      {
        title: "Google Ads for appointment bookings",
        desc: "Targeted campaigns for high-intent searches like specific treatments or specialists.",
      },
      {
        title: "Trust-first website design",
        desc: "Clear doctor profiles, credentials, and a simple appointment-booking flow.",
      },
      {
        title: "Reputation & review management",
        desc: "Systems to collect and showcase genuine patient reviews across platforms.",
      },
    ],
    whyUs: [
      "Careful, accuracy-first approach to healthcare messaging and claims",
      "Focus on trust-building content, not aggressive sales tactics",
      "Local SEO expertise for location-based patient searches",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}