import { html } from 'hono/html'

export const TourPage = () => {
  return html`
    <!-- TOUR HERO SECTION -->
    <section class="relative h-[60vh] md:h-[70vh] min-h-[400px] flex items-end overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-arctic-blue to-black">
        <div class="absolute inset-0 bg-cover bg-center opacity-70" 
             style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1920 1080%22%3E%3Crect fill=%22%231e3a5f%22 width=%221920%22 height=%221080%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2248%22 fill=%22%2300ff88%22%3EAurora Borealis with Horse and Rider%3C/text%3E%3C/svg%3E')">
        </div>
      </div>
      
      <div class="relative z-10 container mx-auto px-4 pb-8 md:pb-12 text-white">
        <div class="max-w-4xl">
          <!-- Tour Badge -->
          <div class="inline-flex items-center space-x-2 bg-brand-accent px-4 py-2 rounded-full mb-4">
            <i class="fas fa-fire"></i>
            <span class="font-semibold">Most Popular Tour</span>
          </div>
          
          <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Aurora Night Ride
          </h1>
          
          <p class="text-lg md:text-xl text-ice-blue mb-6">
            Chase the magical Northern Lights on horseback through silent, snow-covered forests
          </p>
          
          <!-- Quick Info Pills -->
          <div class="flex flex-wrap gap-3">
            <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i class="far fa-clock"></i>
              <span>2.5 hours</span>
            </div>
            <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i class="fas fa-users"></i>
              <span>Max 8 people</span>
            </div>
            <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i class="fas fa-snowflake"></i>
              <span>Dec - Mar</span>
            </div>
            <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i class="fas fa-language"></i>
              <span>EN, FI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- MAIN CONTENT SECTION WITH SIDEBAR -->
    <section class="py-12 md:py-16 bg-snow-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- MAIN CONTENT COLUMN -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Gallery Section -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="aspect-video bg-gradient-to-br from-purple-900 to-arctic-blue relative" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 675%22%3E%3Crect fill=%22%231e3a5f%22 width=%221200%22 height=%22675%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2236%22 fill=%22%2300ff88%22%3EMain Tour Image - Aurora and Horse%3C/text%3E%3C/svg%3E')">
                <button class="absolute inset-0 flex items-center justify-center group">
                  <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                    <i class="fas fa-play text-white text-2xl ml-1"></i>
                  </div>
                </button>
              </div>
              
              <!-- Thumbnail Gallery -->
              <div class="grid grid-cols-4 gap-2 p-4">
                <div class="aspect-video bg-gradient-to-br from-arctic-blue to-ice-blue rounded-lg cursor-pointer hover:opacity-75 transition" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%231e3a5f%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2214%22 fill=%22white%22%3EGallery 1%3C/text%3E%3C/svg%3E')">
                </div>
                <div class="aspect-video bg-gradient-to-br from-purple-900 to-pink-500 rounded-lg cursor-pointer hover:opacity-75 transition" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23581c87%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2214%22 fill=%22white%22%3EGallery 2%3C/text%3E%3C/svg%3E')">
                </div>
                <div class="aspect-video bg-gradient-to-br from-ice-blue to-snow-white rounded-lg cursor-pointer hover:opacity-75 transition" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23a8d5e2%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2214%22 fill=%22%234a5859%22%3EGallery 3%3C/text%3E%3C/svg%3E')">
                </div>
                <div class="aspect-video bg-gradient-to-br from-lapland-earth to-black rounded-lg cursor-pointer hover:opacity-75 transition flex items-center justify-center text-white">
                  <span class="text-sm font-semibold">+12 more</span>
                </div>
              </div>
            </div>
            
            <!-- Tour Description -->
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 class="font-serif text-3xl font-bold text-arctic-blue mb-4">About This Experience</h2>
              <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Embark on a magical journey through the Arctic wilderness under the dancing Northern Lights. This unforgettable 2.5-hour adventure combines the ancient tradition of Finnish horsemanship with one of nature's most spectacular phenomena.
                </p>
                <p>
                  Our gentle Finnhorses will carry you through pristine snow-covered forests and across frozen meadows, their steady hoofbeats the only sound in the silent winter night. As you ride, you'll have the opportunity to witness the Aurora Borealis painting the sky in shimmering greens, purples, and blues—a sight that will stay with you forever.
                </p>
                <p>
                  Your experienced guide will share stories of Lapland traditions, the unique Finnhorse breed, and the science behind the Northern Lights. We'll make several stops for photos and hot beverages, ensuring you capture this once-in-a-lifetime experience.
                </p>
              </div>
            </div>
            
            <!-- What's Included/Excluded - Accordion Style -->
            <div class="space-y-4" x-data="{ openSection: 'included' }">
              <!-- Included -->
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
                <div x-show="openSection === 'included'" 
                     x-transition:enter="transition ease-out duration-300"
                     x-transition:enter-start="opacity-0 -translate-y-4"
                     x-transition:enter-end="opacity-100 translate-y-0"
                     class="px-6 pb-6">
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Professional guide & horse handler</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Well-trained Finnhorse</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Safety equipment & helmets</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Warm thermal overalls</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Hot beverages & snacks</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Aurora hunting expertise</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Hotel pickup (Rovaniemi center)</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <i class="fas fa-check-circle text-aurora-green"></i>
                      <span>Photography assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Requirements -->
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button @click="openSection = openSection === 'requirements' ? '' : 'requirements'" 
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center">
                      <i class="fas fa-info-circle text-brand-accent"></i>
                    </div>
                    <h3 class="font-serif text-2xl font-bold text-arctic-blue">Requirements & What to Bring</h3>
                  </div>
                  <i class="fas fa-chevron-down transition-transform" :class="{ 'rotate-180': openSection === 'requirements' }"></i>
                </button>
                <div x-show="openSection === 'requirements'" 
                     x-transition
                     class="px-6 pb-6">
                  <div class="space-y-4">
                    <div>
                      <h4 class="font-semibold text-arctic-blue mb-2">Physical Requirements</h4>
                      <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>Minimum age: 12 years old</span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>Maximum weight: 100kg (220 lbs)</span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>Moderate fitness level required</span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>No previous riding experience needed</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 class="font-semibold text-arctic-blue mb-2">What to Wear & Bring</h4>
                      <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>Warm layers (thermal underwear recommended)</span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>Warm winter boots</span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>Gloves and warm hat</span>
                        </li>
                        <li class="flex items-start space-x-2">
                          <i class="fas fa-circle text-xs mt-1.5 text-gray-400"></i>
                          <span>Camera or smartphone</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Cancellation Policy -->
              <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button @click="openSection = openSection === 'cancellation' ? '' : 'cancellation'" 
                        class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-ice-blue/30 rounded-full flex items-center justify-center">
                      <i class="fas fa-undo text-arctic-blue"></i>
                    </div>
                    <h3 class="font-serif text-2xl font-bold text-arctic-blue">Cancellation Policy</h3>
                  </div>
                  <i class="fas fa-chevron-down transition-transform" :class="{ 'rotate-180': openSection === 'cancellation' }"></i>
                </button>
                <div x-show="openSection === 'cancellation'" 
                     x-transition
                     class="px-6 pb-6">
                  <div class="space-y-3 text-gray-700">
                    <p class="flex items-start space-x-2">
                      <i class="fas fa-check text-aurora-green mt-1"></i>
                      <span><strong>Full refund:</strong> Cancellations up to 48 hours before tour</span>
                    </p>
                    <p class="flex items-start space-x-2">
                      <i class="fas fa-check text-aurora-green mt-1"></i>
                      <span><strong>50% refund:</strong> Cancellations 24-48 hours before tour</span>
                    </p>
                    <p class="flex items-start space-x-2">
                      <i class="fas fa-times text-red-500 mt-1"></i>
                      <span><strong>No refund:</strong> Cancellations less than 24 hours before tour</span>
                    </p>
                    <p class="flex items-start space-x-2">
                      <i class="fas fa-info-circle text-brand-accent mt-1"></i>
                      <span><strong>Weather policy:</strong> Full refund if we cancel due to severe weather or poor aurora conditions</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Your Guide Section -->
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 class="font-serif text-3xl font-bold text-arctic-blue mb-6">Your Guide</h2>
              <div class="flex flex-col md:flex-row gap-6">
                <div class="w-32 h-32 bg-gradient-to-br from-ice-blue to-arctic-blue rounded-full flex-shrink-0 flex items-center justify-center">
                  <i class="fas fa-user text-white text-5xl"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-arctic-blue mb-2">Matti Virtanen</h3>
                  <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span class="flex items-center space-x-1">
                      <i class="fas fa-star text-yellow-500"></i>
                      <span class="font-semibold">4.9</span>
                      <span>(156 reviews)</span>
                    </span>
                    <span class="flex items-center space-x-1">
                      <i class="fas fa-award text-brand-accent"></i>
                      <span>10+ years experience</span>
                    </span>
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    Born and raised in Rovaniemi, Matti has been working with Finnhorses his entire life. As a certified riding instructor and aurora guide, he combines his passion for horses with expert knowledge of Arctic nature to create truly magical experiences for guests.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Related Tours -->
            <div class="bg-snow-white rounded-2xl p-6 md:p-8">
              <h2 class="font-serif text-3xl font-bold text-arctic-blue mb-6">You Might Also Like</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Related Tour 1 -->
                <a href="/tours/forest-adventure" class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <div class="aspect-video bg-gradient-to-br from-green-700 to-green-900" 
                       style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23166534%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3EForest Adventure%3C/text%3E%3C/svg%3E')">
                  </div>
                  <div class="p-4">
                    <h3 class="font-serif text-xl font-bold text-arctic-blue mb-2 group-hover:text-brand-accent transition">Forest Adventure</h3>
                    <div class="flex items-center justify-between text-sm text-gray-600">
                      <span>2 hours</span>
                      <span class="font-bold text-arctic-blue">€89</span>
                    </div>
                  </div>
                </a>
                
                <!-- Related Tour 2 -->
                <a href="/tours/sunset-ride" class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <div class="aspect-video bg-gradient-to-br from-orange-500 to-pink-500" 
                       style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22%3E%3Crect fill=%22%23f97316%22 width=%22600%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22%3EPolar Sunset Ride%3C/text%3E%3C/svg%3E')">
                  </div>
                  <div class="p-4">
                    <h3 class="font-serif text-xl font-bold text-arctic-blue mb-2 group-hover:text-brand-accent transition">Polar Sunset Ride</h3>
                    <div class="flex items-center justify-between text-sm text-gray-600">
                      <span>1.5 hours</span>
                      <span class="font-bold text-arctic-blue">€79</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <!-- BOOKING SIDEBAR (Sticky on Desktop) -->
          <div class="lg:col-span-1">
            <div id="booking" class="lg:sticky lg:top-28 space-y-6">
              <!-- Booking Widget -->
              <div class="bg-white rounded-2xl shadow-2xl p-6 border-2 border-brand-accent/20">
                <div class="text-center mb-6">
                  <div class="text-sm text-gray-600 mb-1">From</div>
                  <div class="text-4xl font-bold text-arctic-blue">€125</div>
                  <div class="text-sm text-gray-600">per person</div>
                </div>
                
                <!-- Booking Form -->
                <form class="space-y-4">
                  <div>
                    <label class="block text-sm font-semibold text-arctic-blue mb-2">
                      <i class="far fa-calendar mr-1"></i>
                      Select Date
                    </label>
                    <input type="date" 
                           class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-accent focus:outline-none transition"
                           min="2025-12-01">
                  </div>
                  
                  <div>
                    <label class="block text-sm font-semibold text-arctic-blue mb-2">
                      <i class="far fa-clock mr-1"></i>
                      Time Slot
                    </label>
                    <select class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-accent focus:outline-none transition">
                      <option>19:00 - 21:30</option>
                      <option>20:00 - 22:30</option>
                      <option>21:00 - 23:30</option>
                    </select>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-semibold text-arctic-blue mb-2">
                      <i class="fas fa-users mr-1"></i>
                      Number of People
                    </label>
                    <div class="flex items-center space-x-3">
                      <button type="button" class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                        <i class="fas fa-minus text-gray-600"></i>
                      </button>
                      <input type="number" 
                             value="2" 
                             min="1" 
                             max="8"
                             class="flex-1 text-center px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-accent focus:outline-none transition">
                      <button type="button" class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                        <i class="fas fa-plus text-gray-600"></i>
                      </button>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">Maximum 8 people per tour</div>
                  </div>
                  
                  <!-- Price Summary -->
                  <div class="bg-snow-white rounded-lg p-4 space-y-2">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">€125 × 2 people</span>
                      <span class="font-semibold">€250</span>
                    </div>
                    <div class="border-t pt-2 flex justify-between">
                      <span class="font-bold text-arctic-blue">Total</span>
                      <span class="font-bold text-2xl text-arctic-blue">€250</span>
                    </div>
                  </div>
                  
                  <!-- Book Button -->
                  <button type="submit" 
                          class="w-full py-4 bg-brand-accent text-white font-bold text-lg rounded-full hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                    <i class="fas fa-calendar-check mr-2"></i>
                    Book Now
                  </button>
                  
                  <div class="text-center text-xs text-gray-500">
                    <i class="fas fa-lock mr-1"></i>
                    Secure payment • Free cancellation up to 48h
                  </div>
                </form>
              </div>
              
              <!-- Quick Info Card -->
              <div class="bg-ice-blue/20 rounded-xl p-4 space-y-3">
                <div class="flex items-center space-x-3">
                  <i class="fas fa-info-circle text-brand-accent text-xl"></i>
                  <span class="font-semibold text-arctic-blue">Good to Know</span>
                </div>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-bolt text-aurora-green mt-0.5"></i>
                    <span>Instant confirmation</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-mobile-alt text-aurora-green mt-0.5"></i>
                    <span>Mobile voucher accepted</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-car text-aurora-green mt-0.5"></i>
                    <span>Free hotel pickup included</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-undo text-aurora-green mt-0.5"></i>
                    <span>Free cancellation (48h)</span>
                  </li>
                </ul>
              </div>
              
              <!-- Contact Card -->
              <div class="bg-white rounded-xl p-4 shadow-md">
                <h4 class="font-semibold text-arctic-blue mb-3">Questions?</h4>
                <p class="text-sm text-gray-600 mb-3">Contact us for special requests or group bookings</p>
                <a href="/contact" 
                   class="block w-full text-center py-3 bg-arctic-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition">
                  <i class="fas fa-envelope mr-2"></i>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
