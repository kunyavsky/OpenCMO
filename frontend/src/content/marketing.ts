import type { TranslationKey } from "../i18n";

export type PublicNavItem = {
  href: string;
  label: TranslationKey;
};

export type MarketingItem = {
  title: TranslationKey;
  description: TranslationKey;
};

export type BlogArticle = {
  slug: string;
  index: string;
  category: TranslationKey;
  title: TranslationKey;
  summary: TranslationKey;
  readTime: TranslationKey;
  highlight: TranslationKey;
  audience: TranslationKey;
  thesis: TranslationKey;
  takeawayKeys: TranslationKey[];
  sections: Array<{
    title: TranslationKey;
    body: TranslationKey;
  }>;
  accentClass: string;
};

export const PUBLIC_HOME_NAV: PublicNavItem[] = [
  { href: "#platform", label: "landing.navPlatform" },
  { href: "#workflow", label: "landing.navWorkflow" },
  { href: "/blog", label: "landing.navBlog" },
  { href: "#faq", label: "landing.navFaq" },
];

export const PUBLIC_BLOG_NAV: PublicNavItem[] = [
  { href: "/", label: "blog.homeCta" },
  { href: "/blog", label: "landing.navBlog" },
];

export const LANDING_PLATFORM_ITEMS: MarketingItem[] = [
  {
    title: "landing.platform1Title",
    description: "landing.platform1Desc",
  },
  {
    title: "landing.platform2Title",
    description: "landing.platform2Desc",
  },
  {
    title: "landing.platform3Title",
    description: "landing.platform3Desc",
  },
];

export const LANDING_WORKFLOW_STEPS: MarketingItem[] = [
  {
    title: "landing.workflow1Title",
    description: "landing.workflow1Desc",
  },
  {
    title: "landing.workflow2Title",
    description: "landing.workflow2Desc",
  },
  {
    title: "landing.workflow3Title",
    description: "landing.workflow3Desc",
  },
  {
    title: "landing.workflow4Title",
    description: "landing.workflow4Desc",
  },
];

export const LANDING_FAQS: Array<{ question: TranslationKey; answer: TranslationKey }> = [
  {
    question: "landing.faq1Question",
    answer: "landing.faq1Answer",
  },
  {
    question: "landing.faq2Question",
    answer: "landing.faq2Answer",
  },
  {
    question: "landing.faq3Question",
    answer: "landing.faq3Answer",
  },
];

export const BLOG_PRINCIPLES: MarketingItem[] = [
  {
    title: "blog.principle1Title",
    description: "blog.principle1Desc",
  },
  {
    title: "blog.principle2Title",
    description: "blog.principle2Desc",
  },
  {
    title: "blog.principle3Title",
    description: "blog.principle3Desc",
  },
];

export const BLOG_READER_PATHS: MarketingItem[] = [
  {
    title: "blog.reader1Title",
    description: "blog.reader1Desc",
  },
  {
    title: "blog.reader2Title",
    description: "blog.reader2Desc",
  },
  {
    title: "blog.reader3Title",
    description: "blog.reader3Desc",
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "ai-cmo-workspace",
    index: "01",
    category: "blog.post1.category",
    title: "blog.post1.title",
    summary: "blog.post1.summary",
    readTime: "blog.post1.readTime",
    highlight: "blog.post1.highlight",
    audience: "blog.post1.audience",
    thesis: "blog.post1.thesis",
    takeawayKeys: ["blog.post1.point1", "blog.post1.point2", "blog.post1.point3"],
    sections: [
      {
        title: "blog.post1.section1Title",
        body: "blog.post1.section1Body",
      },
      {
        title: "blog.post1.section2Title",
        body: "blog.post1.section2Body",
      },
      {
        title: "blog.post1.section3Title",
        body: "blog.post1.section3Body",
      },
      {
        title: "blog.post1.section4Title",
        body: "blog.post1.section4Body",
      },
    ],
    accentClass:
      "from-[#c96f45]/20 via-[#f7ecde] to-[#86c8bc]/20",
  },
  {
    slug: "visibility-operating-system",
    index: "02",
    category: "blog.post2.category",
    title: "blog.post2.title",
    summary: "blog.post2.summary",
    readTime: "blog.post2.readTime",
    highlight: "blog.post2.highlight",
    audience: "blog.post2.audience",
    thesis: "blog.post2.thesis",
    takeawayKeys: ["blog.post2.point1", "blog.post2.point2", "blog.post2.point3"],
    sections: [
      {
        title: "blog.post2.section1Title",
        body: "blog.post2.section1Body",
      },
      {
        title: "blog.post2.section2Title",
        body: "blog.post2.section2Body",
      },
      {
        title: "blog.post2.section3Title",
        body: "blog.post2.section3Body",
      },
      {
        title: "blog.post2.section4Title",
        body: "blog.post2.section4Body",
      },
    ],
    accentClass:
      "from-[#86c8bc]/25 via-[#eff7f5] to-[#082032]/8",
  },
  {
    slug: "crawler-readable-brand-surface",
    index: "03",
    category: "blog.post3.category",
    title: "blog.post3.title",
    summary: "blog.post3.summary",
    readTime: "blog.post3.readTime",
    highlight: "blog.post3.highlight",
    audience: "blog.post3.audience",
    thesis: "blog.post3.thesis",
    takeawayKeys: ["blog.post3.point1", "blog.post3.point2", "blog.post3.point3"],
    sections: [
      {
        title: "blog.post3.section1Title",
        body: "blog.post3.section1Body",
      },
      {
        title: "blog.post3.section2Title",
        body: "blog.post3.section2Body",
      },
      {
        title: "blog.post3.section3Title",
        body: "blog.post3.section3Body",
      },
      {
        title: "blog.post3.section4Title",
        body: "blog.post3.section4Body",
      },
    ],
    accentClass:
      "from-[#082032]/10 via-[#edf2f7] to-[#c96f45]/16",
  },
  {
    slug: "inside-opencmo-workspace",
    index: "04",
    category: "blog.post4.category",
    title: "blog.post4.title",
    summary: "blog.post4.summary",
    readTime: "blog.post4.readTime",
    highlight: "blog.post4.highlight",
    audience: "blog.post4.audience",
    thesis: "blog.post4.thesis",
    takeawayKeys: ["blog.post4.point1", "blog.post4.point2", "blog.post4.point3"],
    sections: [
      {
        title: "blog.post4.section1Title",
        body: "blog.post4.section1Body",
      },
      {
        title: "blog.post4.section2Title",
        body: "blog.post4.section2Body",
      },
      {
        title: "blog.post4.section3Title",
        body: "blog.post4.section3Body",
      },
      {
        title: "blog.post4.section4Title",
        body: "blog.post4.section4Body",
      },
    ],
    accentClass:
      "from-[#f3dcc9]/55 via-[#f7ecde] to-[#86c8bc]/18",
  },
];
