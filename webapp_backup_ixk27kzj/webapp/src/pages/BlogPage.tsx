import { html } from 'hono/html'

export const BlogPage = () => {
  return html`
    <!-- BLOG HEADER -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-arctic-blue to-lapland-earth text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Stories from the Stable
        </h1>
        <p class="text-lg md:text-xl text-ice-blue max-w-2xl mx-auto">
          Insights, stories, and tips from our farm in the heart of Lapland
        </p>
      </div>
    </section>
    
    <!-- SEARCH & FILTER SECTION -->
    <section class="py-8 bg-white border-b sticky top-20 lg:top-24 z-40">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row gap-4">
            <!-- Search -->
            <div class="flex-1">
              <div class="relative">
                <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input type="text" 
                       placeholder="Search articles..."
                       class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-brand-accent focus:outline-none transition">
              </div>
            </div>
            
            <!-- Category Filter -->
            <div class="flex flex-wrap gap-2">
              <button class="px-6 py-3 bg-brand-accent text-white font-semibold rounded-full hover:bg-opacity-90 transition">
                All Posts
              </button>
              <button class="px-6 py-3 bg-snow-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition">
                <i class="fas fa-horse-head mr-2"></i>
                Horses
              </button>
              <button class="px-6 py-3 bg-snow-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition">
                <i class="fas fa-snowflake mr-2"></i>
                Winter Tips
              </button>
              <button class="px-6 py-3 bg-snow-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition">
                <i class="fas fa-camera mr-2"></i>
                Aurora
              </button>
              <button class="px-6 py-3 bg-snow-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition">
                <i class="fas fa-leaf mr-2"></i>
                Sustainability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FEATURED POST -->
    <section class="py-12 md:py-16 bg-snow-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div class="aspect-video lg:aspect-auto bg-gradient-to-br from-purple-900 to-arctic-blue relative overflow-hidden" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%231e3a5f%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2228%22 fill=%22%2300ff88%22%3EFeatured: Aurora Photography Guide%3C/text%3E%3C/svg%3E')">
                <div class="absolute top-6 left-6 bg-brand-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-star mr-2"></i>
                  Featured
                </div>
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="flex items-center space-x-3 text-sm text-gray-600 mb-4">
                  <span class="bg-ice-blue/30 px-3 py-1 rounded-full font-semibold text-arctic-blue">Aurora Tips</span>
                  <span><i class="far fa-calendar mr-1"></i> Jan 15, 2025</span>
                  <span><i class="far fa-clock mr-1"></i> 8 min read</span>
                </div>
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-arctic-blue mb-4 group-hover:text-brand-accent transition">
                  <a href="/blog/winter-finnhorse-care">
                    Ultimate Guide to Photographing Northern Lights on Horseback
                  </a>
                </h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                  Learn pro tips for capturing stunning aurora photos during your horse tour, including camera settings, composition techniques, and how to balance riding with photography.
                </p>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-ice-blue rounded-full flex items-center justify-center">
                    <span class="text-arctic-blue font-bold">MV</span>
                  </div>
                  <div>
                    <div class="font-semibold text-arctic-blue">Matti Virtanen</div>
                    <div class="text-sm text-gray-600">Head Guide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- BLOG GRID -->
    <section class="py-8 md:py-12 bg-snow-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Blog Post 1 -->
          <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <a href="/blog/winter-finnhorse-care">
              <div class="aspect-video bg-gradient-to-br from-ice-blue to-snow-white relative overflow-hidden" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23a8d5e2%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%234a5859%22%3EHorse in Winter Coat%3C/text%3E%3C/svg%3E')">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </a>
            <div class="p-6">
              <div class="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                <span class="bg-brand-accent/10 px-3 py-1 rounded-full font-semibold text-brand-accent">Horse Care</span>
                <span><i class="far fa-calendar mr-1"></i> Jan 12, 2025</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-arctic-blue mb-3 group-hover:text-brand-accent transition">
                <a href="/blog/winter-finnhorse-care">
                  How Finnhorses Thrive in Arctic Winter
                </a>
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                Discover the remarkable adaptations that make Finnhorses perfectly suited for life in temperatures as low as -30°C, and how we care for them through the harshest months.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-ice-blue rounded-full flex items-center justify-center text-xs">
                    <span class="text-arctic-blue font-bold">SV</span>
                  </div>
                  <span class="text-sm text-gray-600">Sanna Virtanen</span>
                </div>
                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 5 min</span>
              </div>
            </div>
          </article>
          
          <!-- Blog Post 2 -->
          <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <a href="/blog/finnhorse-history">
              <div class="aspect-video bg-gradient-to-br from-amber-700 to-amber-900 relative overflow-hidden" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23b45309%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3EVintage Finnhorse Photo%3C/text%3E%3C/svg%3E')">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </a>
            <div class="p-6">
              <div class="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                <span class="bg-aurora-green/10 px-3 py-1 rounded-full font-semibold text-aurora-green">History</span>
                <span><i class="far fa-calendar mr-1"></i> Jan 8, 2025</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-arctic-blue mb-3 group-hover:text-brand-accent transition">
                <a href="/blog/finnhorse-history">
                  The 400-Year Journey of the Finnhorse
                </a>
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                From medieval work horses to national treasure, explore the fascinating history of Finland's only native breed and why they're so special to our culture.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-ice-blue rounded-full flex items-center justify-center text-xs">
                    <span class="text-arctic-blue font-bold">AV</span>
                  </div>
                  <span class="text-sm text-gray-600">Antti Virtanen</span>
                </div>
                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 7 min</span>
              </div>
            </div>
          </article>
          
          <!-- Blog Post 3 -->
          <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <a href="/blog/best-time-aurora">
              <div class="aspect-video bg-gradient-to-br from-purple-900 to-green-900 relative overflow-hidden" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23581c87%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%2300ff88%22%3EAurora Calendar%3C/text%3E%3C/svg%3E')">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </a>
            <div class="p-6">
              <div class="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                <span class="bg-ice-blue/30 px-3 py-1 rounded-full font-semibold text-arctic-blue">Aurora Tips</span>
                <span><i class="far fa-calendar mr-1"></i> Jan 5, 2025</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-arctic-blue mb-3 group-hover:text-brand-accent transition">
                <a href="/blog/best-time-aurora">
                  When's the Best Time to See Northern Lights in Rovaniemi?
                </a>
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                Planning your aurora tour? Learn about the best months, moon phases, and weather conditions for maximizing your chances of witnessing this natural wonder.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-ice-blue rounded-full flex items-center justify-center text-xs">
                    <span class="text-arctic-blue font-bold">MV</span>
                  </div>
                  <span class="text-sm text-gray-600">Matti Virtanen</span>
                </div>
                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 6 min</span>
              </div>
            </div>
          </article>
          
          <!-- Blog Post 4 -->
          <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <a href="/blog/sustainable-tourism">
              <div class="aspect-video bg-gradient-to-br from-green-700 to-teal-700 relative overflow-hidden" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23166534%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3ESustainable Farm%3C/text%3E%3C/svg%3E')">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </a>
            <div class="p-6">
              <div class="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                <span class="bg-aurora-green/10 px-3 py-1 rounded-full font-semibold text-aurora-green">Sustainability</span>
                <span><i class="far fa-calendar mr-1"></i> Dec 28, 2024</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-arctic-blue mb-3 group-hover:text-brand-accent transition">
                <a href="/blog/sustainable-tourism">
                  Our Journey to Sustainable Tourism Certification
                </a>
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                Behind the scenes of our sustainability efforts: renewable energy, waste reduction, animal welfare, and supporting local communities in Rovaniemi.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-ice-blue rounded-full flex items-center justify-center text-xs">
                    <span class="text-arctic-blue font-bold">SV</span>
                  </div>
                  <span class="text-sm text-gray-600">Sanna Virtanen</span>
                </div>
                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 9 min</span>
              </div>
            </div>
          </article>
          
          <!-- Blog Post 5 -->
          <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <a href="/blog/family-riding-tips">
              <div class="aspect-video bg-gradient-to-br from-yellow-500 to-orange-500 relative overflow-hidden" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23eab308%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3EFamily with Horses%3C/text%3E%3C/svg%3E')">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </a>
            <div class="p-6">
              <div class="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                <span class="bg-brand-accent/10 px-3 py-1 rounded-full font-semibold text-brand-accent">Family Tips</span>
                <span><i class="far fa-calendar mr-1"></i> Dec 20, 2024</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-arctic-blue mb-3 group-hover:text-brand-accent transition">
                <a href="/blog/family-riding-tips">
                  First Horse Ride? Tips for Families with Kids
                </a>
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                Everything parents need to know before bringing children on a horse tour: age requirements, what to expect, how to prepare, and making it magical for everyone.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-ice-blue rounded-full flex items-center justify-center text-xs">
                    <span class="text-arctic-blue font-bold">LK</span>
                  </div>
                  <span class="text-sm text-gray-600">Liisa Korhonen</span>
                </div>
                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 5 min</span>
              </div>
            </div>
          </article>
          
          <!-- Blog Post 6 -->
          <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <a href="/blog/winter-packing-guide">
              <div class="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%233b82f6%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3EWinter Gear%3C/text%3E%3C/svg%3E')">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </a>
            <div class="p-6">
              <div class="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                <span class="bg-ice-blue/30 px-3 py-1 rounded-full font-semibold text-arctic-blue">Winter Tips</span>
                <span><i class="far fa-calendar mr-1"></i> Dec 15, 2024</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-arctic-blue mb-3 group-hover:text-brand-accent transition">
                <a href="/blog/winter-packing-guide">
                  What to Pack for a Lapland Horse Tour
                </a>
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                Your essential packing checklist for staying warm and comfortable during Arctic winter horse tours, from thermal layers to camera gear protection.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-ice-blue rounded-full flex items-center justify-center text-xs">
                    <span class="text-arctic-blue font-bold">EV</span>
                  </div>
                  <span class="text-sm text-gray-600">Emma Virtanen</span>
                </div>
                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 4 min</span>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="inline-flex items-center px-8 py-4 bg-arctic-blue text-white font-semibold text-lg rounded-full hover:bg-opacity-90 transition shadow-lg">
            <i class="fas fa-arrow-down mr-2"></i>
            Load More Posts
          </button>
        </div>
      </div>
    </section>
    
    <!-- NEWSLETTER SECTION -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-arctic-blue to-lapland-earth text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center space-y-6">
          <div class="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto">
            <i class="fas fa-envelope-open-text text-2xl"></i>
          </div>
          <h2 class="font-serif text-3xl md:text-4xl font-bold">
            Stay Updated with Our Stories
          </h2>
          <p class="text-lg text-ice-blue">
            Subscribe to receive our latest blog posts, seasonal tips, and exclusive offers directly to your inbox
          </p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input type="email" 
                   placeholder="Your email address"
                   class="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent">
            <button type="submit" 
                    class="px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-opacity-90 transition shadow-lg">
              Subscribe
            </button>
          </form>
          <p class="text-sm text-ice-blue">
            <i class="fas fa-lock mr-1"></i>
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  `
}
