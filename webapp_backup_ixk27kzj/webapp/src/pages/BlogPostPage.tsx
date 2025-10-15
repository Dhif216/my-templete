import { html } from 'hono/html'

export const BlogPostPage = () => {
  return html`
    <!-- BLOG POST HEADER -->
    <article class="bg-white">
      <section class="py-16 md:py-20 bg-snow-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center space-y-6">
            <!-- Breadcrumb -->
            <div class="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <a href="/" class="hover:text-brand-accent transition">Home</a>
              <i class="fas fa-chevron-right text-xs"></i>
              <a href="/blog" class="hover:text-brand-accent transition">Blog</a>
              <i class="fas fa-chevron-right text-xs"></i>
              <span class="text-arctic-blue">Winter Horse Care</span>
            </div>
            
            <!-- Category Badge -->
            <div>
              <span class="inline-block bg-brand-accent/10 px-4 py-2 rounded-full text-brand-accent font-semibold">
                <i class="fas fa-horse-head mr-2"></i>
                Horse Care
              </span>
            </div>
            
            <!-- Title -->
            <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-arctic-blue leading-tight">
              How Finnhorses Thrive in Arctic Winter: A Guide to Winter Horse Care
            </h1>
            
            <!-- Meta Info -->
            <div class="flex flex-wrap items-center justify-center gap-4 text-gray-600">
              <div class="flex items-center space-x-2">
                <div class="w-10 h-10 bg-ice-blue rounded-full flex items-center justify-center">
                  <span class="text-arctic-blue font-bold text-sm">SV</span>
                </div>
                <div class="text-left">
                  <div class="font-semibold text-arctic-blue text-sm">Sanna Virtanen</div>
                  <div class="text-xs">Breeding Manager</div>
                </div>
              </div>
              <span class="hidden sm:block text-gray-400">|</span>
              <span><i class="far fa-calendar mr-1"></i> January 12, 2025</span>
              <span class="hidden sm:block text-gray-400">|</span>
              <span><i class="far fa-clock mr-1"></i> 5 minute read</span>
            </div>
            
            <!-- Social Share -->
            <div class="flex items-center justify-center space-x-3">
              <span class="text-sm text-gray-600 mr-2">Share:</span>
              <a href="#" class="w-10 h-10 bg-snow-white hover:bg-arctic-blue text-gray-600 hover:text-white rounded-full flex items-center justify-center transition">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-snow-white hover:bg-arctic-blue text-gray-600 hover:text-white rounded-full flex items-center justify-center transition">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-snow-white hover:bg-arctic-blue text-gray-600 hover:text-white rounded-full flex items-center justify-center transition">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-snow-white hover:bg-arctic-blue text-gray-600 hover:text-white rounded-full flex items-center justify-center transition">
                <i class="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- FEATURED IMAGE -->
      <section class="container mx-auto px-4 pb-12">
        <div class="max-w-5xl mx-auto">
          <div class="aspect-video bg-gradient-to-br from-ice-blue to-snow-white rounded-2xl overflow-hidden shadow-2xl" 
               style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 675%22%3E%3Crect fill=%22%23a8d5e2%22 width=%221200%22 height=%22675%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2236%22 fill=%22%234a5859%22%3EFinnhorse in Deep Snow with Thick Winter Coat%3C/text%3E%3C/svg%3E')">
          </div>
        </div>
      </section>
      
      <!-- ARTICLE CONTENT -->
      <section class="container mx-auto px-4 pb-16">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg prose-arctic max-w-none">
            <!-- Introduction -->
            <p class="text-xl text-gray-700 leading-relaxed font-light border-l-4 border-brand-accent pl-6 mb-8">
              When temperatures plummet to -30°C and snow blankets the landscape for months, you might wonder how horses survive—let alone thrive. At Läenlammen Tila, our Finnhorses don't just survive the Arctic winter; they flourish in it. Here's how.
            </p>
            
            <h2 class="font-serif text-3xl font-bold text-arctic-blue mt-12 mb-6">
              The Finnhorse's Natural Arctic Adaptation
            </h2>
            
            <p>
              The Finnhorse breed has evolved over 400 years to handle Finland's harsh climate. Unlike many horse breeds that originated in warmer regions, Finnhorses developed in sub-Arctic conditions, giving them remarkable cold-weather capabilities.
            </p>
            
            <p>
              Their thick double-layer winter coat acts like a high-tech insulation system. The outer layer repels snow and moisture, while the dense undercoat traps warm air close to their body. When properly cared for, Finnhorses can comfortably withstand temperatures that would endanger other breeds.
            </p>
            
            <h2 class="font-serif text-3xl font-bold text-arctic-blue mt-12 mb-6">
              Our Winter Care Protocol
            </h2>
            
            <h3 class="font-serif text-2xl font-semibold text-arctic-blue mt-8 mb-4">
              1. Nutrition: Fueling the Furnace
            </h3>
            
            <p>
              Winter requires significantly more calories. Horses need extra energy to maintain body temperature, so we increase their hay intake by 20-30% during the coldest months. High-quality forage is the foundation—it generates heat through digestion, acting as an internal furnace.
            </p>
            
            <p>
              We also provide vitamin and mineral supplements to compensate for the limited grazing period. Fresh, unfrozen water is available 24/7, which is crucial since dehydration is a hidden winter risk.
            </p>
            
            <h3 class="font-serif text-2xl font-semibold text-arctic-blue mt-8 mb-4">
              2. Shelter: Smart Protection
            </h3>
            
            <p>
              While Finnhorses can handle extreme cold, we provide run-in shelters where they can escape wind and heavy snowfall. Interestingly, our horses often prefer to stay outside even in harsh weather—their coats are that effective!
            </p>
            
            <p>
              The key is giving them choice. Some horses seek shelter during storms; others stand contentedly in falling snow. We respect their instincts while monitoring everyone's condition daily.
            </p>
          </div>
          
          <!-- IN-CONTENT CTA MODULE -->
          <div class="my-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div class="relative z-10">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i class="fas fa-horse text-2xl"></i>
                </div>
                <div class="text-sm font-semibold tracking-wider uppercase opacity-90">Experience It Yourself</div>
              </div>
              <h3 class="font-serif text-2xl md:text-3xl font-bold mb-4">
                Ready to Meet Our Winter-Ready Finnhorses?
              </h3>
              <p class="text-lg mb-6 opacity-90">
                Join us on an unforgettable Aurora Night Ride and experience firsthand how these remarkable horses thrive in Arctic conditions. Limited spots available for winter 2025!
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="/tours/aurora-ride#booking" 
                   class="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-accent font-bold text-lg rounded-full hover:bg-opacity-90 transition shadow-lg">
                  <i class="fas fa-calendar-check mr-3"></i>
                  Book Your Aurora Ride
                </a>
                <a href="/tours/aurora-ride" 
                   class="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 transition border-2 border-white/30">
                  Learn More
                  <i class="fas fa-arrow-right ml-3"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="prose prose-lg prose-arctic max-w-none">
            <h3 class="font-serif text-2xl font-semibold text-arctic-blue mt-8 mb-4">
              3. Coat Management: Less is More
            </h3>
            
            <p>
              Here's something that surprises many visitors: we don't blanket our horses in winter. Blanketing can actually be counterproductive for Finnhorses because it compresses their natural insulation and prevents their coat from functioning properly.
            </p>
            
            <p>
              Instead, we focus on keeping their coats clean and dry. We brush them regularly to remove ice buildup and ensure proper air circulation through their winter coat. After rides, we walk them until completely cool to prevent sweating under their thick fur.
            </p>
            
            <h2 class="font-serif text-3xl font-bold text-arctic-blue mt-12 mb-6">
              Health Monitoring in Winter
            </h2>
            
            <p>
              Daily health checks become even more critical in winter. We assess:
            </p>
            
            <ul class="space-y-2">
              <li>Body condition and weight maintenance</li>
              <li>Hoof health (ice buildup can cause problems)</li>
              <li>Coat condition and any areas of concern</li>
              <li>Behavior changes that might indicate discomfort</li>
              <li>Water intake to prevent dehydration</li>
            </ul>
            
            <p>
              Our veterinarian conducts monthly winter wellness checks, and we maintain detailed health records for every horse in our care.
            </p>
            
            <h2 class="font-serif text-3xl font-bold text-arctic-blue mt-12 mb-6">
              Exercise: Keeping Active Through Winter
            </h2>
            
            <p>
              Regular exercise is essential year-round. Our tour schedule provides perfect activity levels, but we also ensure non-tour horses get daily movement through turnout time and light training.
            </p>
            
            <p>
              Winter riding actually benefits the horses—it prevents boredom, maintains fitness, and provides mental stimulation. Plus, they genuinely seem to enjoy the work, especially on crisp, clear nights when the aurora dances overhead.
            </p>
            
            <h2 class="font-serif text-3xl font-bold text-arctic-blue mt-12 mb-6">
              The Result: Happy, Healthy Winter Horses
            </h2>
            
            <p>
              When you meet our horses, you'll see the proof of proper winter care: bright eyes, glossy coats (even under all that winter fluff!), steady energy, and friendly personalities. They're confident, comfortable, and ready to share the magic of Arctic winter with our guests.
            </p>
            
            <p>
              This is why we're passionate about the Finnhorse breed and committed to the highest standards of care. These remarkable animals are living proof that with proper understanding and respect for their natural adaptations, horses can not only survive but thrive in one of Earth's most challenging climates.
            </p>
            
            <h2 class="font-serif text-3xl font-bold text-arctic-blue mt-12 mb-6">
              Visit Us This Winter
            </h2>
            
            <p>
              Want to see our winter care practices in action? We welcome visitors to the farm and offer behind-the-scenes farm tours where you can meet our horses, learn about Finnhorse heritage, and discover what makes our operation special.
            </p>
            
            <p>
              Whether you're a horse enthusiast, a curious traveler, or someone considering a tour, there's no better way to understand the Finnhorse's winter magic than experiencing it firsthand.
            </p>
          </div>
        </div>
      </section>
      
      <!-- TAGS -->
      <section class="container mx-auto px-4 pb-8">
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-sm text-gray-600 font-semibold">Tags:</span>
            <a href="/blog?tag=finnhorse" class="px-4 py-2 bg-snow-white hover:bg-ice-blue/30 text-arctic-blue text-sm font-medium rounded-full transition">
              #Finnhorse
            </a>
            <a href="/blog?tag=winter" class="px-4 py-2 bg-snow-white hover:bg-ice-blue/30 text-arctic-blue text-sm font-medium rounded-full transition">
              #WinterCare
            </a>
            <a href="/blog?tag=horse-care" class="px-4 py-2 bg-snow-white hover:bg-ice-blue/30 text-arctic-blue text-sm font-medium rounded-full transition">
              #HorseCare
            </a>
            <a href="/blog?tag=lapland" class="px-4 py-2 bg-snow-white hover:bg-ice-blue/30 text-arctic-blue text-sm font-medium rounded-full transition">
              #Lapland
            </a>
          </div>
        </div>
      </section>
      
      <!-- AUTHOR BIO -->
      <section class="container mx-auto px-4 pb-12">
        <div class="max-w-3xl mx-auto">
          <div class="bg-snow-white rounded-2xl p-6 md:p-8">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex-shrink-0 flex items-center justify-center">
                <span class="text-white font-bold text-3xl">SV</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-arctic-blue mb-2">About Sanna Virtanen</h3>
                <div class="text-sm text-gray-600 mb-3">Breeding Manager & Owner</div>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Sanna grew up on Läenlammen Tila and holds a degree in equine science from the University of Helsinki. She oversees our Finnhorse breeding program and is deeply committed to animal welfare and sustainable farm practices. When she's not caring for horses, she enjoys cross-country skiing and traditional Finnish sauna.
                </p>
                <div class="flex space-x-3">
                  <a href="#" class="text-arctic-blue hover:text-brand-accent transition">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="text-arctic-blue hover:text-brand-accent transition">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="text-arctic-blue hover:text-brand-accent transition">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- RELATED POSTS -->
      <section class="container mx-auto px-4 pb-16">
        <div class="max-w-5xl mx-auto">
          <h2 class="font-serif text-3xl font-bold text-arctic-blue mb-8 text-center">
            Related Articles
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Related Post 1 -->
            <article class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <a href="/blog/finnhorse-history">
                <div class="aspect-video bg-gradient-to-br from-amber-700 to-amber-900" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23b45309%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2216%22 fill=%22white%22%3EFinnhorse History%3C/text%3E%3C/svg%3E')">
                </div>
              </a>
              <div class="p-4">
                <h3 class="font-serif text-lg font-bold text-arctic-blue mb-2 group-hover:text-brand-accent transition">
                  <a href="/blog/finnhorse-history">
                    The 400-Year Journey of the Finnhorse
                  </a>
                </h3>
                <div class="flex items-center justify-between text-xs text-gray-600">
                  <span><i class="far fa-calendar mr-1"></i> Jan 8, 2025</span>
                  <span><i class="far fa-clock mr-1"></i> 7 min</span>
                </div>
              </div>
            </article>
            
            <!-- Related Post 2 -->
            <article class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <a href="/blog/sustainable-tourism">
                <div class="aspect-video bg-gradient-to-br from-green-700 to-teal-700" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23166534%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2216%22 fill=%22white%22%3ESustainability%3C/text%3E%3C/svg%3E')">
                </div>
              </a>
              <div class="p-4">
                <h3 class="font-serif text-lg font-bold text-arctic-blue mb-2 group-hover:text-brand-accent transition">
                  <a href="/blog/sustainable-tourism">
                    Our Journey to Sustainable Tourism
                  </a>
                </h3>
                <div class="flex items-center justify-between text-xs text-gray-600">
                  <span><i class="far fa-calendar mr-1"></i> Dec 28, 2024</span>
                  <span><i class="far fa-clock mr-1"></i> 9 min</span>
                </div>
              </div>
            </article>
            
            <!-- Related Post 3 -->
            <article class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <a href="/blog/family-riding-tips">
                <div class="aspect-video bg-gradient-to-br from-yellow-500 to-orange-500" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23eab308%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2216%22 fill=%22white%22%3EFamily Tips%3C/text%3E%3C/svg%3E')">
                </div>
              </a>
              <div class="p-4">
                <h3 class="font-serif text-lg font-bold text-arctic-blue mb-2 group-hover:text-brand-accent transition">
                  <a href="/blog/family-riding-tips">
                    First Horse Ride? Tips for Families
                  </a>
                </h3>
                <div class="flex items-center justify-between text-xs text-gray-600">
                  <span><i class="far fa-calendar mr-1"></i> Dec 20, 2024</span>
                  <span><i class="far fa-clock mr-1"></i> 5 min</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <!-- COMMENTS SECTION (Optional) -->
      <section class="container mx-auto px-4 pb-16">
        <div class="max-w-3xl mx-auto">
          <div class="bg-snow-white rounded-2xl p-6 md:p-8">
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-6">
              <i class="far fa-comments mr-2"></i>
              Join the Conversation
            </h3>
            <p class="text-gray-700 mb-6">
              Have questions about winter horse care or Finnhorses? We'd love to hear from you! Share your thoughts or ask questions below.
            </p>
            <a href="/contact" 
               class="inline-flex items-center px-6 py-3 bg-arctic-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">
              <i class="fas fa-envelope mr-2"></i>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </article>
  `
}
