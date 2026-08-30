// Central, single-source-of-truth content for the ADESEN website.
// Figures and language are drawn from the official ADESEN Action Plan
// 2026-2028 and Annual Report 2026. Anything marked "placeholder" is not
// yet confirmed in the source documents and should be replaced before launch.

export const org = {
  shortName: "ADESEN",
  fullName:
    "Action pour le Développement Socioéconomique, la Promotion de l'Éducation et la Protection de l'Environnement",
  tagline: "Building resilient, self-reliant communities in Gatsibo District",
  type: "Rwandan Non-Governmental Organisation",
  legalStatus:
    "Registered under Law No. 058/2024 of 20 June 2024 (General Public Interest category). Statutes adopted 20 June 2026.",
  hq: {
    label: "Head Office",
    lines: ["Kigali City", "Gasabo District, Remera Sector", "Rwanda"],
  },
  programmeOffice: {
    label: "Programme Office",
    lines: ["Gatsibo District", "Eastern Province, Rwanda"],
  },
  operatingArea: "Gatsibo District, Eastern Province — all 14 sectors",
  programmePeriod: "January 2026 – December 2028",
  budget: "RWF 630 million",
  budgetPhasing: [
    { year: "Year 1 (2026)", focus: "Establishment & baseline", amount: "≈ RWF 102 million" },
    { year: "Year 2 (2027)", focus: "Scale-up", amount: "≈ RWF 92 million" },
    { year: "Year 3 (2028)", focus: "Consolidation, evaluation & handover", amount: "≈ RWF 78 million" },
  ],
  // Placeholder contact details — not found in source documents. Replace with confirmed details.
  contact: {
    email: "info@adesen.rw",
    phone: "+250 7XX XXX XXX",
    isPlaceholder: true,
  },
  social: {
    facebook: "#",
    x: "#",
    linkedin: "#",
    instagram: "#",
    isPlaceholder: true,
  },
};

export const vision =
  "Resilient, self-reliant communities in which every person — particularly the most vulnerable — can access opportunity and live in dignity.";

export const mission =
  "To improve the well-being of vulnerable populations through integrated, community-driven programmes in health, education, talent development, environmental protection and social protection, delivered in partnership with local government and citizens.";

export const coreValues = [
  {
    name: "Community ownership",
    description: "Communities lead the identification and delivery of solutions.",
  },
  {
    name: "Inclusion and equity",
    description:
      "Deliberate prioritisation of women, youth, persons with disabilities and the poorest households.",
  },
  {
    name: "Sustainability",
    description: "Results that endure beyond the life of the programme.",
  },
  {
    name: "Accountability and transparency",
    description: "Rigorous monitoring, reporting and stewardship of resources.",
  },
  {
    name: "Partnership",
    description:
      "Alignment and collaboration with Government, the private sector and development partners.",
  },
];

export const keyStats = [
  { value: "10,000+", label: "Direct beneficiaries", detail: "Women, youth and vulnerable households prioritised" },
  { value: "1,000", label: "Vulnerable households supported" },
  { value: "2", label: "ECD centres established" },
  { value: "3,000", label: "Young people engaged" },
  { value: "100,000", label: "Trees planted", detail: "≥80% survival target" },
];

export const theoryOfChange = {
  ifs: [
    "vulnerable households gain better health, nutrition and income",
    "children, youth and adults access quality education and relevant skills",
    "young people's talents and enterprises are nurtured",
    "communities adopt climate-resilient and environmentally sound practices",
    "the most vulnerable are protected and able to claim their rights",
  ],
  then:
    "communities in Gatsibo will become more prosperous, healthy, skilled and resilient",
  soThat:
    "the District advances measurably towards the transformation goals of NST2 and Vision 2050.",
  assumptions:
    "Continued political and macroeconomic stability; sustained community participation; effective coordination with the District; timely availability of funding; and a manageable climate-risk environment.",
};

export const strategicAlignment = [
  {
    component: "Health & Socio-Economic Development",
    nst2: "Social & Economic Transformation",
    vision2050: "High quality of life",
    sdgs: "1, 2, 3",
  },
  {
    component: "Education & Skills Development",
    nst2: "Social Transformation",
    vision2050: "Human development",
    sdgs: "4, 8",
  },
  {
    component: "Talent Development",
    nst2: "Economic Transformation",
    vision2050: "Economic growth & prosperity",
    sdgs: "4, 8, 9",
  },
  {
    component: "Environment & Climate Resilience",
    nst2: "Economic Transformation (green growth)",
    vision2050: "Sustainable growth",
    sdgs: "6, 13, 15",
  },
  {
    component: "Advocacy & Social Protection",
    nst2: "Social Transformation & Governance",
    vision2050: "High quality of life",
    sdgs: "1, 5, 10, 16",
  },
];

export const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Our Programmes" },
  { href: "/impact", label: "Impact & Results" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const footerLegal =
  "ADESEN is a Rwandan non-governmental organisation registered under Law No. 058/2024, General Public Interest category. Head Office: Kigali City, Gasabo District, Remera Sector.";
