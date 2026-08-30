import type { LucideIcon } from "lucide-react";
import { HeartPulse, GraduationCap, Trophy, Leaf, Scale } from "lucide-react";

export type Programme = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  rationale: string;
  activities: string[];
  targets: string[];
  impactFocus: string;
  nst2: string;
  vision2050: string;
  sdgs: string;
};

export const programmes: Programme[] = [
  {
    slug: "health",
    name: "Health & Socio-Economic Development",
    shortName: "Health & Livelihoods",
    icon: HeartPulse,
    tagline: "Healthy, food-secure households with diversified income.",
    rationale:
      "Healthy, food-secure households with diversified income are the foundation of community resilience. This component pairs preventive health and nutrition with livelihood support.",
    activities: [
      "Community health-awareness and behaviour-change campaigns",
      "Kitchen garden and targeted nutrition/feeding programmes",
      "Hygiene and sanitation promotion at household and community level",
      "Enrolment facilitation in community-based health insurance (mutuelle)",
      "Income-generating activity (IGA) and savings group formation and support",
      "Annual health/livelihoods impact assessment",
    ],
    targets: [
      "5,000 individuals reached with health, nutrition and livelihood awareness",
      "1,000 households supported with nutrition and IGA",
      "12 sectors covered with hygiene and sanitation promotion",
      "1,000 households enrolled in community health insurance",
      "30+ savings and IGA groups formed and operational",
    ],
    impactFocus:
      "Reduced malnutrition, improved household income diversification, and stronger access to preventive health services.",
    nst2: "Social & Economic Transformation",
    vision2050: "High quality of life",
    sdgs: "1, 2, 3",
  },
  {
    slug: "education",
    name: "Education & Skills Development",
    shortName: "Education & Skills",
    icon: GraduationCap,
    tagline: "Quality education and market-relevant skills for all ages.",
    rationale:
      "Quality education and market-relevant skills are the surest route out of poverty and the core of NST2's human-development agenda.",
    activities: [
      "Establishment and operation of two Early Childhood Development (ECD) centres",
      "Vocational skills training in ICT, tailoring and carpentry",
      "Digital skills training cohorts for youth",
      "Adult and functional literacy programmes",
      "Scholarships and learning support for vulnerable learners",
    ],
    targets: [
      "2 ECD centres established and operational",
      "2,000 beneficiaries trained in vocational skills",
      "500+ youth trained in digital/ICT skills",
      "500 adults reached through literacy programmes",
      "200 vulnerable learners supported with scholarships",
    ],
    impactFocus:
      "Higher school readiness, improved literacy, and stronger pathways from training into employment or self-employment.",
    nst2: "Social Transformation",
    vision2050: "Human development",
    sdgs: "4, 8",
  },
  {
    slug: "talent",
    name: "Talent Development",
    shortName: "Talent Development",
    icon: Trophy,
    tagline: "Identifying and nurturing Gatsibo's greatest asset — its youth.",
    rationale:
      "Gatsibo's youthful population is its greatest asset. This component identifies and nurtures talent in sports, arts, innovation and enterprise.",
    activities: [
      "Talent identification and profiling among youth",
      "Sports and arts academies with structured mentorship",
      "Competitions, exhibitions and talent showcases",
      "Innovation, entrepreneurship and start-up mentorship",
      "Health and well-being support for talent participants",
    ],
    targets: [
      "3,000 youth identified and profiled",
      "2 sports and arts academies operational",
      "3 showcases or competitions held",
      "100 enterprises/start-ups supported",
      "All enrolled youth supported with health and well-being services",
    ],
    impactFocus:
      "Youth confidence, new enterprises and jobs created, and visible platforms for talent to be recognised.",
    nst2: "Economic Transformation",
    vision2050: "Economic growth & prosperity",
    sdgs: "4, 8, 9",
  },
  {
    slug: "environment",
    name: "Environment & Climate Resilience",
    shortName: "Environment & Climate",
    icon: Leaf,
    tagline: "Restoring landscapes and building climate-resilient livelihoods.",
    rationale:
      "Gatsibo's semi-arid climate and degraded soils threaten agricultural livelihoods. This component builds environmental resilience alongside community preparedness.",
    activities: [
      "Tree-planting and agroforestry campaigns",
      "Climate-smart agriculture (CSA) training for farming households",
      "Formation and training of disaster preparedness committees",
      "Community environmental awareness campaigns",
    ],
    targets: [
      "100,000 trees planted with ≥80% survival rate",
      "Climate-smart agriculture practices adopted across target sectors",
      "Disaster preparedness committees established in target sectors",
    ],
    impactFocus:
      "Restored tree cover, more resilient farming practices, and communities better prepared for climate shocks.",
    nst2: "Economic Transformation (green growth)",
    vision2050: "Sustainable growth",
    sdgs: "6, 13, 15",
  },
  {
    slug: "advocacy",
    name: "Advocacy & Social Protection",
    shortName: "Advocacy & Protection",
    icon: Scale,
    tagline: "Protecting rights and connecting the most vulnerable to services.",
    rationale:
      "Orphans, persons with disabilities and child-headed households are too often excluded from services. This component strengthens rights awareness and links vulnerable groups to protection and justice.",
    activities: [
      "Rights awareness and civic education campaigns",
      "Gender equality and gender-based violence (GBV) prevention activities",
      "Vulnerable group mapping and targeted support",
      "Facilitation of access to social protection services and justice",
    ],
    targets: [
      "Vulnerable groups mapped and registered across target sectors",
      "Rights awareness and GBV prevention sessions delivered community-wide",
      "Vulnerable individuals linked to social protection and justice services",
    ],
    impactFocus:
      "Greater awareness of rights, reduced GBV, and stronger linkages between vulnerable households and government protection services.",
    nst2: "Social Transformation & Governance",
    vision2050: "High quality of life",
    sdgs: "1, 5, 10, 16",
  },
];

export function getProgrammeBySlug(slug: string) {
  return programmes.find((p) => p.slug === slug);
}
