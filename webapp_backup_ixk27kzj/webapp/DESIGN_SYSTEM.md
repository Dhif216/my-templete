# Läenlammen Tila Design System

## Color Palette

### Primary Colors
```css
--arctic-blue: #1e3a5f     /* Primary brand color, headers, navigation */
--ice-blue: #a8d5e2        /* Secondary accent, subtle backgrounds */
--snow-white: #f8fafb      /* Light backgrounds, cards */
--lapland-earth: #4a5859   /* Dark earth tones, text accents */
```

### Accent Colors
```css
--aurora-green: #00ff88    /* Success states, trust badges */
--brand-primary: #d4a574   /* Premium gold accent */
--brand-accent: #ff6b35    /* Primary CTA color, high contrast */
```

### Usage Guidelines
- **Arctic Blue**: Use for primary headers, navigation text, and main brand elements
- **Brand Accent (#ff6b35)**: ONLY for primary "Book Now" CTAs and critical conversion buttons
- **Aurora Green**: Trust indicators, certifications, positive messaging
- **Ice Blue**: Subtle backgrounds, hover states, secondary elements

## Typography

### Font Families
```css
font-serif: 'Playfair Display', serif    /* Headlines, hero text */
font-sans: 'Inter', sans-serif           /* Body text, UI elements */
```

### Type Scale
```
H1: text-4xl md:text-5xl lg:text-6xl (36/48/60px)
H2: text-3xl md:text-4xl lg:text-5xl (30/36/48px)
H3: text-2xl md:text-3xl (24/30px)
H4: text-xl md:text-2xl (20/24px)
Body: text-base lg:text-lg (16/18px)
Small: text-sm (14px)
```

### Font Weights
- Light: 300 (decorative text)
- Regular: 400 (body text)
- Medium: 500 (UI elements)
- Semibold: 600 (emphasis)
- Bold: 700 (headings, CTAs)

## Spacing System

### Scale (Tailwind)
```
0.5 = 2px   (tight spacing)
1 = 4px     (minimal spacing)
2 = 8px     (compact)
3 = 12px    (cozy)
4 = 16px    (comfortable - default)
6 = 24px    (spacious)
8 = 32px    (generous)
12 = 48px   (section padding)
16 = 64px   (major sections)
24 = 96px   (hero sections)
```

### Responsive Spacing
- **Mobile**: Use smaller spacing (p-4, py-8, mb-6)
- **Tablet**: Medium spacing (p-6, py-12, mb-8)
- **Desktop**: Generous spacing (p-8, py-16, mb-12)

## Component Patterns

### Buttons

#### Primary CTA (Book Now)
```html
<a href="#booking" 
   class="inline-flex items-center px-8 py-3 bg-brand-accent text-white font-semibold rounded-full hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:scale-105">
  <i class="fas fa-calendar-check mr-2"></i>
  Book Now
</a>
```

#### Secondary Button
```html
<a href="#" 
   class="inline-flex items-center px-8 py-3 bg-arctic-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">
  Learn More
  <i class="fas fa-arrow-right ml-2"></i>
</a>
```

#### Outline Button
```html
<a href="#" 
   class="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition border-2 border-white/30">
  Explore
</a>
```

### Cards

#### Standard Card
```html
<div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
  <div class="aspect-video bg-cover bg-center"></div>
  <div class="p-6">
    <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Title</h3>
    <p class="text-gray-700 mb-4">Content</p>
  </div>
</div>
```

#### Tour Card
```html
<div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
  <!-- Image with badge -->
  <div class="relative aspect-[4/3] overflow-hidden">
    <div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
    <div class="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
      Most Popular
    </div>
  </div>
  <!-- Content with pricing -->
  <div class="p-6">
    <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Tour Name</h3>
    <p class="text-gray-600 mb-4">Description</p>
    <div class="flex items-center justify-between">
      <div>
        <div class="text-2xl font-bold text-arctic-blue">€125</div>
        <div class="text-sm text-gray-500">per person</div>
      </div>
      <a href="#" class="px-6 py-3 bg-arctic-blue text-white font-semibold rounded-full">
        View Details
      </a>
    </div>
  </div>
</div>
```

### Hero Sections

#### Full-Screen Hero
```html
<section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-arctic-blue via-lapland-earth to-arctic-blue">
    <div class="absolute inset-0 bg-cover bg-center opacity-60"></div>
  </div>
  
  <!-- Content -->
  <div class="relative z-10 container mx-auto px-4 text-center text-white">
    <h1 class="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
      Headline Text
    </h1>
    <p class="text-lg md:text-xl text-ice-blue mb-8">Subheadline</p>
    <a href="#" class="inline-flex items-center px-10 py-4 bg-brand-accent text-white font-bold text-lg rounded-full">
      Primary CTA
    </a>
  </div>
</section>
```

#### Half-Height Hero
```html
<section class="relative h-[60vh] md:h-[70vh] min-h-[400px] flex items-end overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-arctic-blue to-black">
    <div class="absolute inset-0 bg-cover bg-center opacity-70"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 pb-8 md:pb-12 text-white">
    <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      Page Title
    </h1>
    <p class="text-lg md:text-xl text-ice-blue mb-6">Description</p>
  </div>
</section>
```

### Trust Indicators

#### Badge Group
```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
  <div class="flex flex-col items-center space-y-1">
    <i class="fas fa-leaf text-aurora-green text-2xl md:text-3xl"></i>
    <div class="text-xs md:text-sm font-semibold text-arctic-blue">Sustainable</div>
    <div class="text-xs text-gray-600 hidden md:block">Certified Tourism</div>
  </div>
  <!-- Repeat for other badges -->
</div>
```

#### Certification Card
```html
<div class="flex items-center space-x-2">
  <i class="fas fa-leaf text-aurora-green"></i>
  <span class="text-xs text-ice-blue">Sustainable Tourism Certified</span>
</div>
```

### Accordions (Alpine.js)

```html
<div class="space-y-4" x-data="{ openSection: 'included' }">
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <button @click="openSection = openSection === 'included' ? '' : 'included'" 
            class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-aurora-green/10 rounded-full flex items-center justify-center">
          <i class="fas fa-check text-aurora-green"></i>
        </div>
        <h3 class="font-serif text-2xl font-bold text-arctic-blue">What's Included</h3>
      </div>
      <i class="fas fa-chevron-down transition-transform" :class="{ 'rotate-180': openSection === 'included' }"></i>
    </button>
    <div x-show="openSection === 'included'" x-transition class="px-6 pb-6">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <li class="flex items-center space-x-3">
          <i class="fas fa-check-circle text-aurora-green"></i>
          <span>Item description</span>
        </li>
      </ul>
    </div>
  </div>
</div>
```

## Icon Usage

### Font Awesome Icons
```html
<!-- Navigation -->
<i class="fas fa-bars"></i>           <!-- Menu -->
<i class="fas fa-times"></i>          <!-- Close -->
<i class="fas fa-globe"></i>          <!-- Language -->
<i class="fas fa-chevron-down"></i>   <!-- Dropdown -->

<!-- CTAs -->
<i class="fas fa-calendar-check"></i> <!-- Booking -->
<i class="fas fa-arrow-right"></i>    <!-- Forward action -->
<i class="far fa-envelope"></i>       <!-- Contact -->

<!-- Trust Indicators -->
<i class="fas fa-leaf"></i>           <!-- Sustainability -->
<i class="fas fa-horse-head"></i>     <!-- Finnhorse -->
<i class="fas fa-star"></i>           <!-- Rating -->
<i class="fas fa-award"></i>          <!-- Certification -->
<i class="fas fa-users"></i>          <!-- Community -->

<!-- Tour Details -->
<i class="far fa-clock"></i>          <!-- Duration -->
<i class="fas fa-users"></i>          <!-- Group size -->
<i class="fas fa-snowflake"></i>      <!-- Season -->
<i class="fas fa-language"></i>       <!-- Languages -->

<!-- Social Media -->
<i class="fab fa-facebook-f"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-tripadvisor"></i>
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
Default: 320px - 639px   (mobile)
sm:     640px+           (large mobile/small tablet)
md:     768px+           (tablet)
lg:     1024px+          (desktop)
xl:     1280px+          (large desktop)
2xl:    1536px+          (extra large)
```

### Responsive Patterns
```html
<!-- Mobile: single column, Desktop: two columns -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

<!-- Mobile: stacked, Desktop: horizontal -->
<div class="flex flex-col md:flex-row gap-4">

<!-- Mobile: hidden, Desktop: visible -->
<div class="hidden lg:block">

<!-- Mobile: visible, Desktop: hidden -->
<div class="lg:hidden">

<!-- Responsive text sizes -->
<h1 class="text-3xl md:text-4xl lg:text-6xl">

<!-- Responsive spacing -->
<section class="py-12 md:py-16 lg:py-24">
```

## Image Placeholders

All image placeholders use SVG data URLs for development. Replace with real images:

```html
<!-- Example placeholder -->
style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 675%22%3E%3Crect fill=%22%231e3a5f%22 width=%221200%22 height=%22675%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2236%22 fill=%22white%22%3EIMAGE DESCRIPTION%3C/text%3E%3C/svg%3E')"

<!-- Replace with -->
style="background-image: url('/static/images/hero-aurora-ride.jpg')"
```

## Animation Classes

```css
/* Fade in on scroll */
.animate-fade-in {
  animation: fade-in 1s ease-out;
}

/* Hover effects */
.hover:shadow-xl      /* Shadow on hover */
.hover:scale-105      /* Slight scale up */
.hover:-translate-y-2 /* Move up slightly */
.group-hover:scale-110 /* Scale on parent hover */

/* Transitions */
.transition           /* All properties */
.transition-all       /* All properties */
.transition-transform /* Transform only */
.duration-300         /* 300ms */
.ease-out            /* Easing function */
```

## Accessibility Guidelines

### Focus States
- All interactive elements have visible focus states
- Focus outline: 2px solid #ff6b35

### Color Contrast
- Text on light backgrounds: minimum 4.5:1 ratio
- Text on dark backgrounds: minimum 4.5:1 ratio
- CTA buttons: minimum 7:1 ratio

### Touch Targets
- Minimum size: 44x44px (mobile)
- Spacing between targets: minimum 8px

### Keyboard Navigation
- All interactive elements reachable via Tab
- Logical tab order
- Skip navigation link (can be added)

## Mobile-First Best Practices

1. **Design for mobile first**, then enhance for larger screens
2. **Touch-friendly targets**: 48px minimum height
3. **Readable text**: 16px minimum font size
4. **Thumb-friendly navigation**: Bottom-right for right-handed users
5. **Minimal form fields**: Only ask for essential information
6. **Fast loading**: Optimize images, minimize JS
7. **Offline considerations**: Progressive enhancement

## Performance Optimization

### Image Guidelines
- **Hero images**: 1920x1080px, WebP format, < 200KB
- **Tour cards**: 800x600px, WebP format, < 100KB
- **Thumbnails**: 400x300px, WebP format, < 50KB
- **Team photos**: 400x400px, WebP format, < 40KB
- **Icons**: Use Font Awesome (CDN), not image files

### Loading Strategy
- Critical CSS inline (if needed)
- Non-critical CSS async
- Fonts preloaded
- Images lazy-loaded below fold
- JavaScript deferred

## Brand Voice Guidelines

### Tone
- **Authentic**: Real family stories, genuine experiences
- **Warm**: Welcoming, personal, friendly
- **Premium**: High-quality, sophisticated, refined
- **Educational**: Informative about Finnhorses and culture
- **Respectful**: Of nature, animals, traditions

### Writing Style
- Short paragraphs (2-3 sentences max)
- Active voice
- Concrete details over vague descriptions
- Emotional connection through storytelling
- Clear calls-to-action

### Finnish Heritage
- Use Finnish terms with English translations
- Explain cultural context
- Celebrate Finnhorse breed heritage
- Emphasize sustainability and tradition

---

**Note**: This design system is implemented across all four templates. Maintain consistency when adding new pages or components.
