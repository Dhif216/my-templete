import { html } from 'hono/html'

interface LayoutProps {
  title: string
  lang: string
  children: any
}

export const Layout = ({ title, lang, children }: LayoutProps) => {
  return html`
    <!DOCTYPE html>
    <html lang="${lang}">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome Icons -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts - Premium Typography -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        
        <!-- Alpine.js for interactions -->
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
        
        <!-- Custom Styles -->
        <link href="/static/styles.css" rel="stylesheet">
        
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'arctic-blue': '#1e3a5f',
                  'ice-blue': '#a8d5e2',
                  'snow-white': '#f8fafb',
                  'lapland-earth': '#4a5859',
                  'aurora-green': '#00ff88',
                  'brand-primary': '#d4a574',
                  'brand-accent': '#ff6b35'
                },
                fontFamily: {
                  'serif': ['Playfair Display', 'serif'],
                  'sans': ['Inter', 'sans-serif']
                }
              }
            }
          }
        </script>
      </head>
      <body class="font-sans text-gray-900 antialiased bg-snow-white">
        ${Header()}
        <main>
          ${children}
        </main>
        ${Footer()}
        
        <script src="/static/app.js"></script>
      </body>
    </html>
  `
}

const Header = () => {
  return html`
    <!-- Sticky Header with Book Now CTA -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm" x-data="{ mobileMenuOpen: false, langMenuOpen: false }">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20 lg:h-24">
          <!-- Logo -->
          <a href="/" class="flex items-center space-x-3">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-arctic-blue rounded-full flex items-center justify-center">
              <i class="fas fa-horse text-white text-xl lg:text-2xl"></i>
            </div>
            <div class="hidden sm:block">
              <div class="font-serif font-bold text-xl lg:text-2xl text-arctic-blue leading-tight">Läenlammen Tila</div>
              <div class="text-xs lg:text-sm text-gray-600">Rovaniemi</div>
            </div>
          </a>
          
          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a href="/" class="text-gray-700 hover:text-arctic-blue transition font-medium">Home</a>
            <a href="/tours/aurora-ride" class="text-gray-700 hover:text-arctic-blue transition font-medium">Tours</a>
            <a href="/about" class="text-gray-700 hover:text-arctic-blue transition font-medium">About</a>
            <a href="/blog" class="text-gray-700 hover:text-arctic-blue transition font-medium">Blog</a>
            
            <!-- Language Selector -->
            <div class="relative" x-data="{ open: false }">
              <button @click="open = !open" class="flex items-center space-x-1 text-gray-700 hover:text-arctic-blue transition font-medium">
                <i class="fas fa-globe"></i>
                <span>EN</span>
                <i class="fas fa-chevron-down text-xs"></i>
              </button>
              <div x-show="open" @click.away="open = false" 
                   x-transition:enter="transition ease-out duration-200"
                   x-transition:enter-start="opacity-0 scale-95"
                   x-transition:enter-end="opacity-100 scale-100"
                   class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50">
                <a href="?lang=en" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                <a href="?lang=fi" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Suomi</a>
              </div>
            </div>
          </nav>
          
          <!-- Primary CTA - Desktop -->
          <a href="/tours/aurora-ride#booking" 
             class="hidden lg:inline-flex items-center px-8 py-3 bg-brand-accent text-white font-semibold rounded-full hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:scale-105">
            <i class="fas fa-calendar-check mr-2"></i>
            Book Now
          </a>
          
          <!-- Mobile Menu Toggle -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 text-gray-700">
            <i class="fas fa-bars text-2xl" x-show="!mobileMenuOpen"></i>
            <i class="fas fa-times text-2xl" x-show="mobileMenuOpen"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div x-show="mobileMenuOpen" 
           x-transition:enter="transition ease-out duration-300"
           x-transition:enter-start="opacity-0 -translate-y-4"
           x-transition:enter-end="opacity-100 translate-y-0"
           class="lg:hidden bg-white border-t">
        <nav class="container mx-auto px-4 py-4 space-y-3">
          <a href="/" class="block py-2 text-gray-700 hover:text-arctic-blue transition font-medium">Home</a>
          <a href="/tours/aurora-ride" class="block py-2 text-gray-700 hover:text-arctic-blue transition font-medium">Tours</a>
          <a href="/about" class="block py-2 text-gray-700 hover:text-arctic-blue transition font-medium">About</a>
          <a href="/blog" class="block py-2 text-gray-700 hover:text-arctic-blue transition font-medium">Blog</a>
          
          <!-- Language Selector Mobile -->
          <div class="flex items-center space-x-4 py-2">
            <span class="text-gray-600 text-sm">Language:</span>
            <a href="?lang=en" class="text-sm text-arctic-blue font-medium">EN</a>
            <span class="text-gray-400">|</span>
            <a href="?lang=fi" class="text-sm text-gray-600 font-medium">FI</a>
          </div>
          
          <!-- Mobile CTA -->
          <a href="/tours/aurora-ride#booking" 
             class="block w-full text-center px-6 py-3 bg-brand-accent text-white font-semibold rounded-full hover:bg-opacity-90 transition mt-4">
            <i class="fas fa-calendar-check mr-2"></i>
            Book Now
          </a>
        </nav>
      </div>
    </header>
    
    <!-- Spacer to prevent content from hiding under fixed header -->
    <div class="h-20 lg:h-24"></div>
  `
}

const Footer = () => {
  return html`
    <footer class="bg-arctic-blue text-white">
      <div class="container mx-auto px-4 py-12 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <!-- Brand Column -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <i class="fas fa-horse text-arctic-blue text-xl"></i>
              </div>
              <div>
                <div class="font-serif font-bold text-xl">Läenlammen Tila</div>
                <div class="text-sm text-ice-blue">Rovaniemi</div>
              </div>
            </div>
            <p class="text-sm text-ice-blue">
              Authentic Finnhorse adventures in the heart of Lapland. Experience the magic of Arctic nature with our national treasure horses.
            </p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="/tours/aurora-ride" class="text-ice-blue hover:text-white transition text-sm">Tours & Experiences</a></li>
              <li><a href="/about" class="text-ice-blue hover:text-white transition text-sm">About Us</a></li>
              <li><a href="/blog" class="text-ice-blue hover:text-white transition text-sm">Blog</a></li>
              <li><a href="/contact" class="text-ice-blue hover:text-white transition text-sm">Contact</a></li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Contact</h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <i class="fas fa-map-marker-alt text-brand-accent mt-1"></i>
                <span class="text-sm text-ice-blue">Läenlammentie 123<br>96100 Rovaniemi, Finland</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-phone text-brand-accent"></i>
                <span class="text-sm text-ice-blue">+358 40 123 4567</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fas fa-envelope text-brand-accent"></i>
                <span class="text-sm text-ice-blue">info@laenlammentila.fi</span>
              </li>
            </ul>
          </div>
          
          <!-- Social & Trust Badges -->
          <div>
            <h3 class="font-semibold text-lg mb-4">Follow Us</h3>
            <div class="flex space-x-4 mb-6">
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <i class="fab fa-tripadvisor"></i>
              </a>
            </div>
            
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <i class="fas fa-leaf text-aurora-green"></i>
                <span class="text-xs text-ice-blue">Sustainable Tourism Certified</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-award text-brand-accent"></i>
                <span class="text-xs text-ice-blue">National Finnhorse Breeder</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm text-ice-blue">© 2025 Läenlammen Tila. All rights reserved.</p>
          <div class="flex space-x-6 text-sm">
            <a href="/privacy" class="text-ice-blue hover:text-white transition">Privacy Policy</a>
            <a href="/terms" class="text-ice-blue hover:text-white transition">Terms of Service</a>
            <a href="/booking-terms" class="text-ice-blue hover:text-white transition">Booking Terms</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
