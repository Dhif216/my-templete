import { html } from 'hono/html'

export const Homepage = () => {
  return html`
    <!-- HERO SECTION - Full Screen Video/Image -->
    <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background Image/Video Placeholder -->
      <div class="absolute inset-0 bg-gradient-to-br from-arctic-blue via-lapland-earth to-arctic-blue">
        <!-- Placeholder for full-bleed hero image -->
        <div class="absolute inset-0 bg-cover bg-center opacity-60" 
             style="background-image: linear-gradient(rgba(30, 58, 95, 0.5), rgba(30, 58, 95, 0.5)), url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1920 1080%22%3E%3Crect fill=%22%231e3a5f%22 width=%221920%22 height=%221080%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2248%22 fill=%22white%22 opacity=%220.3%22%3EFinnhorse in Snowy Lapland - Full Bleed Hero Image%3C/text%3E%3C/svg%3E')">
        </div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 container mx-auto px-4 text-center text-white">
        <div class="max-w-4xl mx-auto space-y-8">
          <!-- Main Headline -->
          <h1 class="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in">
            Discover Arctic Magic<br/>
            <span class="text-brand-accent">on a Finnhorse</span>
          </h1>
          
          <!-- Subheadline -->
          <p class="text-lg md:text-xl lg:text-2xl text-ice-blue font-light max-w-2xl mx-auto">
            Experience authentic Lapland through unforgettable horse tours with Finland's national treasure breed
          </p>
          
          <!-- Primary CTA -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="/tours/aurora-ride#booking" 
               class="inline-flex items-center px-10 py-4 bg-brand-accent text-white font-bold text-lg rounded-full hover:bg-opacity-90 transition shadow-2xl hover:shadow-brand-accent/50 transform hover:scale-105 w-full sm:w-auto justify-center">
              <i class="fas fa-calendar-check mr-3"></i>
              Book Your Adventure
            </a>
            <a href="#featured-tours" 
               class="inline-flex items-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 transition border-2 border-white/30 w-full sm:w-auto justify-center">
              <i class="fas fa-arrow-down mr-3"></i>
              Explore Tours
            </a>
          </div>
        </div>
      </div>
      
      <!-- Trust Bar - Below Hero -->
      <div class="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-4 md:py-6">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div class="flex flex-col items-center space-y-1">
              <i class="fas fa-leaf text-aurora-green text-2xl md:text-3xl"></i>
              <div class="text-xs md:text-sm font-semibold text-arctic-blue">Sustainable</div>
              <div class="text-xs text-gray-600 hidden md:block">Certified Tourism</div>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <i class="fas fa-horse-head text-brand-accent text-2xl md:text-3xl"></i>
              <div class="text-xs md:text-sm font-semibold text-arctic-blue">Finnhorse</div>
              <div class="text-xs text-gray-600 hidden md:block">National Treasure</div>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <i class="fas fa-star text-yellow-500 text-2xl md:text-3xl"></i>
              <div class="text-xs md:text-sm font-semibold text-arctic-blue">5-Star Rated</div>
              <div class="text-xs text-gray-600 hidden md:block">200+ Reviews</div>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <i class="fas fa-users text-ice-blue text-2xl md:text-3xl"></i>
              <div class="text-xs md:text-sm font-semibold text-arctic-blue">Family Owned</div>
              <div class="text-xs text-gray-600 hidden md:block">3 Generations</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i class="fas fa-chevron-down text-white text-2xl opacity-50"></i>
      </div>
    </section>
    
    <!-- STORY SECTION - Alternating Image/Text Blocks -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <!-- Story Block 1 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <div class="order-2 lg:order-1">
            <div class="max-w-xl">
              <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-arctic-blue mb-6">
                Our Story:<br/>Three Generations of Tradition
              </h2>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Nestled in the pristine wilderness of Rovaniemi, Läenlammen Tila has been home to our family and our beloved Finnhorses for over 60 years. What started as a small farm has grown into a sanctuary where authentic Lapland traditions meet modern sustainable tourism.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                We breed and care for Finland's national horse breed, preserving their unique heritage while sharing the magic of Arctic nature with visitors from around the world.
              </p>
              <a href="/about" class="inline-flex items-center text-brand-accent font-semibold hover:text-arctic-blue transition">
                Read Our Full Story
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="aspect-[4/3] bg-gradient-to-br from-ice-blue to-lapland-earth rounded-2xl overflow-hidden shadow-2xl">
              <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23a8d5e2%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%234a5859%22%3EFamily with Finnhorses at Farm%3C/text%3E%3C/svg%3E')">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Story Block 2 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div class="aspect-[4/3] bg-gradient-to-br from-arctic-blue to-ice-blue rounded-2xl overflow-hidden shadow-2xl">
              <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%231e3a5f%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EFinnhorse in Winter Landscape%3C/text%3E%3C/svg%3E')">
              </div>
            </div>
          </div>
          <div>
            <div class="max-w-xl lg:ml-auto">
              <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-arctic-blue mb-6">
                Meet the Finnhorse:<br/>Finland's Living Heritage
              </h2>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                The Finnhorse is the only native horse breed in Finland, bred for over 400 years to thrive in harsh Nordic conditions. These remarkable animals are known for their gentle temperament, strength, and unique connection to Finnish culture.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Our herd represents the finest bloodlines, each horse raised with love and respect. When you ride with us, you're not just on a tour—you're connecting with a living piece of Finnish history.
              </p>
              <a href="/about#horses" class="inline-flex items-center text-brand-accent font-semibold hover:text-arctic-blue transition">
                Meet Our Horses
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FEATURED TOURS SECTION -->
    <section id="featured-tours" class="py-16 md:py-24 bg-snow-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-arctic-blue mb-4">
            Discover Our Tours
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From magical aurora rides to family-friendly forest adventures, find your perfect Arctic experience
          </p>
        </div>
        
        <!-- Tour Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <!-- Tour Card 1 - Aurora Ride -->
          <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-arctic-blue to-purple-900 flex items-center justify-center bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%231e3a5f%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%2300ff88%22%3EAurora with Horse Silhouette%3C/text%3E%3C/svg%3E')">
              </div>
              <div class="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Aurora Night Ride</h3>
              <p class="text-gray-600 mb-4">
                Chase the Northern Lights on horseback through silent, snowy forests under the Arctic sky
              </p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <i class="far fa-clock"></i>
                  <span>2.5 hours</span>
                </div>
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <i class="fas fa-users"></i>
                  <span>Max 8</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-bold text-arctic-blue">€125</div>
                  <div class="text-sm text-gray-500">per person</div>
                </div>
                <a href="/tours/aurora-ride" 
                   class="inline-flex items-center px-6 py-3 bg-arctic-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">
                  View Details
                  <i class="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Tour Card 2 - Forest Adventure -->
          <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%23166534%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3EForest Trail Ride%3C/text%3E%3C/svg%3E')">
              </div>
              <div class="absolute top-4 right-4 bg-aurora-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                Family Friendly
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Forest Adventure</h3>
              <p class="text-gray-600 mb-4">
                Explore pristine Arctic forests and frozen lakes on a peaceful daytime ride suitable for all levels
              </p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <i class="far fa-clock"></i>
                  <span>2 hours</span>
                </div>
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <i class="fas fa-users"></i>
                  <span>Max 10</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-bold text-arctic-blue">€89</div>
                  <div class="text-sm text-gray-500">per person</div>
                </div>
                <a href="/tours/forest-adventure" 
                   class="inline-flex items-center px-6 py-3 bg-arctic-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">
                  View Details
                  <i class="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Tour Card 3 - Sunset Ride -->
          <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%23f97316%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3EPolar Sunset Ride%3C/text%3E%3C/svg%3E')">
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Polar Sunset Ride</h3>
              <p class="text-gray-600 mb-4">
                Experience the magical Arctic twilight as you ride through landscapes bathed in golden light
              </p>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <i class="far fa-clock"></i>
                  <span>1.5 hours</span>
                </div>
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <i class="fas fa-users"></i>
                  <span>Max 8</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-2xl font-bold text-arctic-blue">€79</div>
                  <div class="text-sm text-gray-500">per person</div>
                </div>
                <a href="/tours/sunset-ride" 
                   class="inline-flex items-center px-6 py-3 bg-arctic-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">
                  View Details
                  <i class="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- View All Tours CTA -->
        <div class="text-center mt-12">
          <a href="/tours/aurora-ride" 
             class="inline-flex items-center px-8 py-4 bg-brand-accent text-white font-bold text-lg rounded-full hover:bg-opacity-90 transition shadow-lg transform hover:scale-105">
            View All Tours & Book Now
            <i class="fas fa-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </section>
    
    <!-- TESTIMONIALS SECTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-arctic-blue mb-4">
            What Our Guests Say
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy adventurers who've experienced the magic of Läenlammen Tila
          </p>
        </div>
        
        <!-- Testimonial Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <!-- Testimonial 1 -->
          <div class="bg-snow-white rounded-2xl p-6 lg:p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-500">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">
              "The aurora night ride was absolutely magical! The horses were so gentle and well-trained, and seeing the Northern Lights from horseback was a dream come true. Unforgettable!"
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-ice-blue rounded-full flex items-center justify-center mr-3">
                <span class="text-arctic-blue font-bold text-lg">SJ</span>
              </div>
              <div>
                <div class="font-semibold text-arctic-blue">Sarah Johnson</div>
                <div class="text-sm text-gray-500">United Kingdom</div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="bg-snow-white rounded-2xl p-6 lg:p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-500">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">
              "Perfect family experience! Our kids (ages 7 and 10) loved meeting the Finnhorses and learning about their heritage. The guides were knowledgeable and patient. Highly recommend!"
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-ice-blue rounded-full flex items-center justify-center mr-3">
                <span class="text-arctic-blue font-bold text-lg">ML</span>
              </div>
              <div>
                <div class="font-semibold text-arctic-blue">Marcus Lindström</div>
                <div class="text-sm text-gray-500">Sweden</div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="bg-snow-white rounded-2xl p-6 lg:p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-500">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">
              "An authentic Arctic adventure! The sustainable approach and deep respect for the horses really shines through. The sunset ride through the snowy forest was breathtaking."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-ice-blue rounded-full flex items-center justify-center mr-3">
                <span class="text-arctic-blue font-bold text-lg">YT</span>
              </div>
              <div>
                <div class="font-semibold text-arctic-blue">Yuki Tanaka</div>
                <div class="text-sm text-gray-500">Japan</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- TripAdvisor Link -->
        <div class="text-center mt-8">
          <a href="#" class="inline-flex items-center text-brand-accent font-semibold hover:text-arctic-blue transition">
            <i class="fab fa-tripadvisor mr-2 text-xl"></i>
            Read All 200+ Reviews on TripAdvisor
          </a>
        </div>
      </div>
    </section>
    
    <!-- FINAL CTA SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-arctic-blue to-lapland-earth text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto space-y-8">
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready for Your Arctic Adventure?
          </h2>
          <p class="text-lg md:text-xl text-ice-blue">
            Book your Finnhorse experience today and create memories that will last a lifetime
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/tours/aurora-ride#booking" 
               class="inline-flex items-center px-10 py-4 bg-brand-accent text-white font-bold text-lg rounded-full hover:bg-opacity-90 transition shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center">
              <i class="fas fa-calendar-check mr-3"></i>
              Book Now
            </a>
            <a href="/contact" 
               class="inline-flex items-center px-10 py-4 bg-white text-arctic-blue font-semibold text-lg rounded-full hover:bg-opacity-90 transition w-full sm:w-auto justify-center">
              <i class="fas fa-envelope mr-3"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}
