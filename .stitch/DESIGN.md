---
name: Ethnobotanical Purity
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434843'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#6b5c4c'
  on-secondary: '#ffffff'
  secondary-container: '#f4dfcb'
  on-secondary-container: '#716252'
  tertiary: '#171815'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b2c29'
  on-tertiary-container: '#94938f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#f4dfcb'
  secondary-fixed-dim: '#d7c3b0'
  on-secondary-fixed: '#241a0e'
  on-secondary-fixed-variant: '#524436'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is centered on the intersection of West African indigenous wisdom and contemporary global wellness. It prioritizes a "Raw Purity" aesthetic—minimalist, sophisticated, and deeply rooted in the earth. The UI must evoke a sense of calm authority and chromatic nutrition, balancing the raw textures of natural ingredients with the precision of premium health science.

The style is **Modern Minimalist with Tactile accents**. It leverages heavy whitespace to allow the vibrant, natural colors of the superfood powders to stand out. Visual elements should feel intentional and grounded, avoiding unnecessary decoration in favor of structural clarity and high-quality editorial presentation.

## Colors

The palette is a tribute to the Sahel and tropical landscapes of West Africa. 

- **Primary (Forest Green):** Used for primary actions, navigation backgrounds, and deep structural elements. It represents the source of the botanicals.
- **Secondary (Earthy Beige):** Used for surface containers, subtle dividers, and background layering to provide warmth against the white.
- **Background (Off-White):** The primary canvas, ensuring the "Raw Purity" aesthetic remains breathable and clean.
- **Product Accents:** Beetroot Red, Turmeric Gold, and Moringa Green are reserved exclusively for product-specific signaling, category labels, and focused data visualization. They should never overwhelm the primary brand green.

## Typography

This design system utilizes a high-contrast typographic pairing to bridge tradition and modern science.

- **Headlines (Playfair Display):** Should be used for all primary titles and section headers. The serif nature conveys the "Indigenous Wisdom" and historical depth of the ingredients.
- **Body & UI (Inter):** A systematic, neutral sans-serif for high legibility in product descriptions, nutritional facts, and functional UI components.
- **Scaling:** On mobile devices, display sizes must be reduced significantly to maintain elegance without overcrowding the viewport.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium, editorial feel, while transitioning to a fluid model for mobile. 

- **Vertical Rhythm:** A strict 8px baseline grid is used. Section gaps are intentionally large (120px+) to create a "gallery" feel for the product showcases.
- **Desktop:** 12-column grid with generous outer margins. 
- **Mobile:** 4-column grid with 20px margins. Content should be stacked with significant padding between modules to avoid a cluttered "discount" look.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** and **Subtle Ambient Shadows** rather than heavy skeuomorphism.

- **Surfaces:** Use the secondary Earthy Beige to create "sunken" or "raised" sections against the Off-White background. 
- **Shadows:** Shadows should be ultra-diffused (32px - 64px blur) with very low opacity (5-8%) and a slight tint of the Primary Forest Green. This creates a soft, organic lift that feels like natural light hitting a matte surface.
- **Glassmorphism:** Use sparingly for navigation overlays, employing a heavy backdrop blur (20px) to maintain the focus on the organic textures behind the UI.

## Shapes

The shape language is "Soft-Organic." We avoid sharp 90-degree corners to reflect the natural, unrefined state of the botanical products.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Featured Cards:** Large product cards or imagery containers use a 1rem (16px) radius.
- **Interactive Elements:** Use pill-shapes only for secondary tags or "add to cart" indicators to maintain a professional, high-end supplement aesthetic.

## Components

- **Buttons:** Primary buttons are solid Forest Green with white Inter medium text. Secondary buttons are Earthy Beige outlines with no fill.
- **Inputs:** Minimalist bottom-border only or very light grey outlines. Focused states use the accent color corresponding to the product currently being viewed (e.g., Turmeric Gold focus for Turmeric product page).
- **Cards:** Product cards should feature high-resolution macro photography of the powder texture. Text should be bottom-aligned with a subtle gradient overlay for legibility.
- **Nutritional Tables:** Clean, tabular layouts using Inter with light Earthy Beige row highlights. Avoid heavy borders.
- **Chips/Labels:** Used for benefits (e.g., "Organic," "Non-GMO"). These should use the Label-Caps typographic style and very light tinted backgrounds of the primary green.