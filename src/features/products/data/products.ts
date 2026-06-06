import type { Product } from "@/features/products/types/product";

const now = "2026-01-01T00:00:00.000Z";

export const products: Product[] = [
  {
    id: "prod_beetroot_001",
    slug: "organic-beetroot-powder",
    name: "Organic Beetroot Powder",
    tagline: "Antioxidant Rich",
    shortDescription:
      "Rich in antioxidants, supports stamina and wellness. A natural source of essential nutrients.",
    description:
      "Our Organic Beetroot Powder is sourced from premium-grade beets grown using chemical-free cultivation. Rich in nitrates and antioxidants, it naturally supports cardiovascular health, stamina, and detoxification. Each batch is lab-tested for purity and potency.",
    category: "antioxidants",
    accentColor: "beetroot",
    benefits: [
      { label: "Boosts Nitric Oxide", icon: "check_circle" },
      { label: "Natural Detoxifier", icon: "check_circle" },
    ],
    features: [
      "100% organic beetroot",
      "No fillers or additives",
      "Cold-processed for nutrient retention",
      "FSSAI compliant",
    ],
    nutrition: {
      servingSize: "5g (1 teaspoon)",
      nutrients: [
        { name: "Dietary Fiber", value: "1.2g" },
        { name: "Iron", value: "0.8mg" },
        { name: "Potassium", value: "160mg" },
        { name: "Nitrates", value: "250mg" },
      ],
    },
    certifications: ["Organic", "Non-GMO", "Lab Tested", "FSSAI"],
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9H3dTHVv2AbeFqmbHTdWUbHvxtrGupWxOIkT4n3buhvHIMrfTKf5vBZ_ZvvCj_7k9en9TfdqArTUurorQkMCSjxHzqvASTXi6vwGHM3oKvENyg7J6Ph3emy_4Ns8iaPJikefTxYEItVcAfPZggmERT4qxafGI60y67uXYCV5ypb0hyCd8_dGgD8g1lV0Ex8RB3aVOUgUB8w5xeHJ5aUv3t_KtFr_pQmX4EByB4e87zZhSbH1cyI-dhAcy05HStFiC3Ucim8-ryg",
      gallery: [],
      alt: "Organic Beetroot Powder in a premium glass jar with fresh beet slices",
    },
    seo: {
      title: "Organic Beetroot Powder | Da Sabarr",
      description:
        "Premium organic beetroot powder rich in antioxidants and nitrates. Supports stamina, cardiovascular health, and natural detoxification.",
      keywords: ["beetroot powder", "organic beetroot", "nitric oxide", "antioxidants"],
    },
    pricing: {
      basePrice: { amount: 599, currency: "INR" },
      variants: [
        { id: "var_beet_100", sku: "DS-BEET-100", name: "100g", weightGrams: 100, price: { amount: 599, currency: "INR" } },
        { id: "var_beet_250", sku: "DS-BEET-250", name: "250g", weightGrams: 250, price: { amount: 1299, currency: "INR" } },
      ],
    },
    inventory: { status: "in_stock", totalStock: 500 },
    isFeatured: true,
    isPublished: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prod_moringa_001",
    slug: "moringa-powder",
    name: "Moringa Powder",
    tagline: "Superfood Essential",
    shortDescription:
      "Nutrient-rich superfood that supports immunity. Dense with essential vitamins and minerals.",
    description:
      "Moringa oleifera, known as the 'miracle tree', delivers one of nature's most complete nutritional profiles. Our Moringa Powder is shade-dried to preserve vitamins A, C, and E, along with essential minerals. A daily staple for immune support and overall vitality.",
    category: "immunity",
    accentColor: "moringa",
    benefits: [
      { label: "Immune System Support", icon: "check_circle" },
      { label: "High in Vitamin A & C", icon: "check_circle" },
    ],
    features: [
      "Wild-harvested moringa leaves",
      "Shade-dried processing",
      "Rich in plant protein",
      "No preservatives",
    ],
    nutrition: {
      servingSize: "5g (1 teaspoon)",
      nutrients: [
        { name: "Protein", value: "1.5g" },
        { name: "Vitamin A", value: "378μg" },
        { name: "Vitamin C", value: "8.2mg" },
        { name: "Calcium", value: "50mg" },
      ],
    },
    certifications: ["Organic", "Non-GMO", "Lab Tested", "FSSAI"],
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiOn8r8btl4TR8S_C-a6yW88fBlZu2kYHKJOy2s_VH3vdwtAhCUO2Wq5U9RrRHHmVpphrTqsELljPrtfUdBMC3TRmVpHnHMSdW0_KSzcDDhg47EuGBV1uwGY5TYYGwaVXRA6Jf5jthzDF8G7IA56P8RyNcchYj_UMxRiB0BRb0Hu0hBh9NvljPCQq6jL8jiiUkQnb4LdOmKfWHFGGj5VqXzBv_8LDEuZvPLJwJ_w1EiguipMUqo107hDyP_qCCK-CvNPzIyY2g2w",
      gallery: [],
      alt: "Moringa Powder in a minimalist glass jar with fresh moringa leaves",
    },
    seo: {
      title: "Moringa Powder | Da Sabarr",
      description:
        "Nutrient-dense moringa powder for immune support. Rich in vitamins A, C, and essential minerals.",
      keywords: ["moringa powder", "superfood", "immunity", "vitamin C"],
    },
    pricing: {
      basePrice: { amount: 549, currency: "INR" },
      variants: [
        { id: "var_mor_100", sku: "DS-MOR-100", name: "100g", weightGrams: 100, price: { amount: 549, currency: "INR" } },
        { id: "var_mor_250", sku: "DS-MOR-250", name: "250g", weightGrams: 250, price: { amount: 1199, currency: "INR" } },
      ],
    },
    inventory: { status: "in_stock", totalStock: 750 },
    isFeatured: true,
    isPublished: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prod_turmeric_001",
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    tagline: "Anti-Inflammatory",
    shortDescription:
      "Natural antioxidant that supports overall wellness with time-tested traditional health benefits.",
    description:
      "Our Turmeric Powder is crafted from high-curcumin turmeric rhizomes, sun-dried and stone-ground using traditional methods. Known for its anti-inflammatory and antioxidant properties, it supports joint health, digestion, and holistic wellness.",
    category: "wellness",
    accentColor: "turmeric",
    benefits: [
      { label: "Joint Health Support", icon: "check_circle" },
      { label: "Digestive Wellness", icon: "check_circle" },
    ],
    features: [
      "High curcumin content",
      "Traditional stone-ground",
      "No artificial colors",
      "Sustainably sourced",
    ],
    nutrition: {
      servingSize: "5g (1 teaspoon)",
      nutrients: [
        { name: "Curcumin", value: "150mg" },
        { name: "Iron", value: "2.5mg" },
        { name: "Manganese", value: "0.5mg" },
        { name: "Dietary Fiber", value: "1.0g" },
      ],
    },
    certifications: ["Organic", "Non-GMO", "Lab Tested", "FSSAI"],
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC61IYdyiTTKwy9rUWPQiTdTKo6cWJ7Pd6dVPR7Z-VK5I1nTO_hqADqS6rGivR3K60nmBi3v-kjrL0BUxcE2FxUloCMVq7pVxmb0HjZ1VSMBKci7BWr6fAst_aTd9gORsvoRm-awwnIOI1ip1aukxuVewk648U5SUd8K1QK__wU2wc70AsuECQEUNrjzFlDMzNg0IN6mJRDp8cUrIgaDPTVxN2XguieRUiRE7TavUiw98nmL6YPtLf4hIRGF-ForevzDpbQ4AhqIg",
      gallery: [],
      alt: "Golden turmeric powder in a clear glass jar with raw turmeric roots",
    },
    seo: {
      title: "Turmeric Powder | Da Sabarr",
      description:
        "Premium organic turmeric powder with high curcumin content. Supports joint health, digestion, and anti-inflammatory wellness.",
      keywords: ["turmeric powder", "curcumin", "anti-inflammatory", "organic turmeric"],
    },
    pricing: {
      basePrice: { amount: 449, currency: "INR" },
      variants: [
        { id: "var_tur_100", sku: "DS-TUR-100", name: "100g", weightGrams: 100, price: { amount: 449, currency: "INR" } },
        { id: "var_tur_250", sku: "DS-TUR-250", name: "250g", weightGrams: 250, price: { amount: 999, currency: "INR" } },
      ],
    },
    inventory: { status: "in_stock", totalStock: 600 },
    isFeatured: true,
    isPublished: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "prod_amla_001",
    slug: "amla-powder",
    name: "Amla Powder",
    tagline: "Vitamin C Boost",
    shortDescription:
      "Rich source of Vitamin C. A natural wellness supplement that strengthens immunity from within.",
    description:
      "Amla (Indian Gooseberry) is one of the richest natural sources of Vitamin C. Our Amla Powder is made from sun-dried amla fruits, preserving powerful bioflavonoids that support skin health, hair vitality, and immune function.",
    category: "immunity",
    accentColor: "amla",
    benefits: [
      { label: "Skin & Hair Health", icon: "check_circle" },
      { label: "Powerful Bioflavonoids", icon: "check_circle" },
    ],
    features: [
      "Sun-dried amla fruits",
      "20x Vitamin C of oranges",
      "Supports collagen production",
      "Ayurvedic heritage ingredient",
    ],
    nutrition: {
      servingSize: "5g (1 teaspoon)",
      nutrients: [
        { name: "Vitamin C", value: "300mg" },
        { name: "Iron", value: "1.2mg" },
        { name: "Calcium", value: "25mg" },
        { name: "Antioxidants", value: "High" },
      ],
    },
    certifications: ["Organic", "Non-GMO", "Lab Tested", "FSSAI"],
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXOF_q-QQOTIYbRJAJFJtyszfNiKQI_-2VusLqFxbUxhzivtRZZ7T6DNxD73NMmn6meuUBIbhcysitfbDpgg3STFhP3AV7VHMYdPlimSq7mQoO5vUygT5hSs8iSUSdHVwKcoXIGvVQur3PQLYTaPMmPadDc4YxyKQv6w9NqUM2rUclyTA6ttNV-a4OhpKQ3CuYYZZnJZO1XaG6-m1Gq_wt6GNE6jHbv_fdn0vTfDCSrTe6ovgwxwmGVFsRB4hPlcVapWrSBSgLMQ",
      gallery: [],
      alt: "Amla berry powder in a wooden-capped glass jar with dried gooseberries",
    },
    seo: {
      title: "Amla Powder | Da Sabarr",
      description:
        "Organic amla powder rich in Vitamin C and bioflavonoids. Supports immunity, skin health, and hair vitality.",
      keywords: ["amla powder", "indian gooseberry", "vitamin C", "immunity"],
    },
    pricing: {
      basePrice: { amount: 499, currency: "INR" },
      variants: [
        { id: "var_aml_100", sku: "DS-AML-100", name: "100g", weightGrams: 100, price: { amount: 499, currency: "INR" } },
        { id: "var_aml_250", sku: "DS-AML-250", name: "250g", weightGrams: 250, price: { amount: 1099, currency: "INR" } },
      ],
    },
    inventory: { status: "in_stock", totalStock: 400 },
    isFeatured: true,
    isPublished: true,
    createdAt: now,
    updatedAt: now,
  },
];
