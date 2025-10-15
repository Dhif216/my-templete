import { html } from 'hono/html'

export const AboutPage = () => {
  return html`
    <!-- ABOUT HERO SECTION -->
    <section class="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-arctic-blue to-lapland-earth">
        <div class="absolute inset-0 bg-cover bg-center opacity-50" 
             style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1920 1080%22%3E%3Crect fill=%22%234a5859%22 width=%221920%22 height=%221080%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2248%22 fill=%22white%22 opacity=%220.7%22%3EFamily at Farm with Horses%3C/text%3E%3C/svg%3E')">
        </div>
      </div>
      
      <div class="relative z-10 container mx-auto px-4 text-white text-center">
        <div class="max-w-4xl mx-auto space-y-6">
          <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            Three Generations<br/>
            <span class="text-brand-accent">One Shared Passion</span>
          </h1>
          <p class="text-lg md:text-xl text-ice-blue max-w-2xl mx-auto">
            Since 1960, Läenlammen Tila has been more than a farm—it's a family legacy dedicated to preserving the Finnhorse tradition and sharing Arctic nature's magic
          </p>
        </div>
      </div>
    </section>
    
    <!-- OUR STORY SECTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div class="inline-block bg-aurora-green/10 px-4 py-2 rounded-full mb-4">
                <span class="text-aurora-green font-semibold text-sm">
                  <i class="fas fa-leaf mr-2"></i>
                  Our Story
                </span>
              </div>
              <h2 class="font-serif text-3xl md:text-4xl font-bold text-arctic-blue mb-6">
                From Humble Beginnings to Arctic Adventures
              </h2>
              <div class="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Läenlammen Tila was founded in 1960 by Antti Virtanen, who had a simple dream: to preserve the authentic Finnhorse tradition in the heart of Lapland. What started as a small family farm with just three horses has grown into one of Rovaniemi's most respected Finnhorse breeders and tour operators.
                </p>
                <p>
                  Today, three generations of the Virtanen family work together on the farm. Antti's grandson, Matti, leads our tours, while his daughter Sanna manages the breeding program. Our family's deep connection to these magnificent animals and this land shines through in every experience we create.
                </p>
                <p>
                  We believe in sustainable tourism that respects nature, honors our horses, and preserves Finnish traditions for future generations. Every tour we offer is designed to create authentic connections—between people and nature, people and horses, and people and Lapland's rich cultural heritage.
                </p>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="aspect-[4/3] bg-gradient-to-br from-ice-blue to-arctic-blue rounded-2xl overflow-hidden shadow-2xl" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23a8d5e2%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%234a5859%22%3EHistorical Family Photo at Farm%3C/text%3E%3C/svg%3E')">
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div class="text-center p-4 bg-snow-white rounded-xl">
                  <div class="text-3xl font-bold text-brand-accent mb-1">60+</div>
                  <div class="text-sm text-gray-600">Years Heritage</div>
                </div>
                <div class="text-center p-4 bg-snow-white rounded-xl">
                  <div class="text-3xl font-bold text-brand-accent mb-1">3</div>
                  <div class="text-sm text-gray-600">Generations</div>
                </div>
                <div class="text-center p-4 bg-snow-white rounded-xl">
                  <div class="text-3xl font-bold text-brand-accent mb-1">20+</div>
                  <div class="text-sm text-gray-600">Finnhorses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- OUR VALUES SECTION -->
    <section class="py-16 md:py-24 bg-snow-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-center mb-12">
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-arctic-blue mb-4">
            Our Values & Commitment
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything we do is guided by respect—for our horses, our land, and our guests
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Value 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-aurora-green/10 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-leaf text-aurora-green text-2xl"></i>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-3">Sustainable Tourism</h3>
            <p class="text-gray-700 leading-relaxed">
              We're proud holders of the Sustainable Travel Finland certification. Our operations minimize environmental impact while supporting local communities and traditions.
            </p>
          </div>
          
          <!-- Value 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-heart text-brand-accent text-2xl"></i>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-3">Horse Welfare First</h3>
            <p class="text-gray-700 leading-relaxed">
              Our horses are family. They receive the highest standard of care, regular veterinary check-ups, and plenty of rest. They work only when they're happy and healthy.
            </p>
          </div>
          
          <!-- Value 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-ice-blue/30 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-landmark text-arctic-blue text-2xl"></i>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-3">Cultural Heritage</h3>
            <p class="text-gray-700 leading-relaxed">
              As certified Finnhorse breeders, we're committed to preserving this 400-year-old breed and sharing its remarkable story with the world.
            </p>
          </div>
          
          <!-- Value 4 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-users text-brand-primary text-2xl"></i>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-3">Family Values</h3>
            <p class="text-gray-700 leading-relaxed">
              As a family-run business, we treat every guest like part of our extended family, creating warm, personal experiences you won't find anywhere else.
            </p>
          </div>
          
          <!-- Value 5 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-certificate text-purple-600 text-2xl"></i>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-3">Safety & Quality</h3>
            <p class="text-gray-700 leading-relaxed">
              All our guides are professionally certified, and we maintain the highest safety standards in equipment, training, and tour operations.
            </p>
          </div>
          
          <!-- Value 6 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-star text-yellow-500 text-2xl"></i>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-3">Authentic Experiences</h3>
            <p class="text-gray-700 leading-relaxed">
              No staged photo ops—just genuine moments in nature with well-trained horses and guides who truly love what they do.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- MEET THE TEAM SECTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-center mb-12">
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-arctic-blue mb-4">
            Meet the Virtanen Family
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated people behind your unforgettable Arctic adventures
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Team Member 1 -->
          <div class="group text-center">
            <div class="relative mb-6">
              <div class="w-48 h-48 mx-auto bg-gradient-to-br from-arctic-blue to-ice-blue rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition">
                <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle fill=%22%231e3a5f%22 cx=%22150%22 cy=%22150%22 r=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EAntti%3C/text%3E%3C/svg%3E')">
                </div>
              </div>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Antti Virtanen</h3>
            <div class="text-brand-accent font-semibold mb-3">Founder & Patriarch</div>
            <p class="text-gray-700 text-sm leading-relaxed px-4">
              At 85, Antti still visits the stables daily, sharing stories of the farm's early days and his lifelong love for Finnhorses. His wisdom guides everything we do.
            </p>
          </div>
          
          <!-- Team Member 2 -->
          <div class="group text-center">
            <div class="relative mb-6">
              <div class="w-48 h-48 mx-auto bg-gradient-to-br from-brand-primary to-brand-accent rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition">
                <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle fill=%22%23d4a574%22 cx=%22150%22 cy=%22150%22 r=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ESanna%3C/text%3E%3C/svg%3E')">
                </div>
              </div>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Sanna Virtanen</h3>
            <div class="text-brand-accent font-semibold mb-3">Breeding Manager & Owner</div>
            <p class="text-gray-700 text-sm leading-relaxed px-4">
              Sanna inherited her father's passion for Finnhorses and holds a degree in equine science. She oversees our breeding program and ensures every horse receives exceptional care.
            </p>
          </div>
          
          <!-- Team Member 3 -->
          <div class="group text-center">
            <div class="relative mb-6">
              <div class="w-48 h-48 mx-auto bg-gradient-to-br from-ice-blue to-aurora-green rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition">
                <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle fill=%22%23a8d5e2%22 cx=%22150%22 cy=%22150%22 r=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%234a5859%22%3EMatti%3C/text%3E%3C/svg%3E')">
                </div>
              </div>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Matti Virtanen</h3>
            <div class="text-brand-accent font-semibold mb-3">Head Guide & Tour Director</div>
            <p class="text-gray-700 text-sm leading-relaxed px-4">
              Born and raised on the farm, Matti is a certified riding instructor and aurora expert. His infectious enthusiasm and deep knowledge make every tour magical.
            </p>
          </div>
          
          <!-- Team Member 4 -->
          <div class="group text-center">
            <div class="relative mb-6">
              <div class="w-48 h-48 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition">
                <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle fill=%22%23c084fc%22 cx=%22150%22 cy=%22150%22 r=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ELiisa%3C/text%3E%3C/svg%3E')">
                </div>
              </div>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Liisa Korhonen</h3>
            <div class="text-brand-accent font-semibold mb-3">Senior Guide</div>
            <p class="text-gray-700 text-sm leading-relaxed px-4">
              With 8 years of experience, Liisa brings warmth and expertise to every tour. She specializes in family-friendly experiences and speaks fluent English, Finnish, and German.
            </p>
          </div>
          
          <!-- Team Member 5 -->
          <div class="group text-center">
            <div class="relative mb-6">
              <div class="w-48 h-48 mx-auto bg-gradient-to-br from-green-400 to-teal-400 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition">
                <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle fill=%22%234ade80%22 cx=%22150%22 cy=%22150%22 r=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EJukka%3C/text%3E%3C/svg%3E')">
                </div>
              </div>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Jukka Mäkinen</h3>
            <div class="text-brand-accent font-semibold mb-3">Stable Manager</div>
            <p class="text-gray-700 text-sm leading-relaxed px-4">
              Jukka ensures our horses are happy, healthy, and ready for adventure. His calm demeanor and expert horsemanship create a peaceful, safe environment.
            </p>
          </div>
          
          <!-- Team Member 6 -->
          <div class="group text-center">
            <div class="relative mb-6">
              <div class="w-48 h-48 mx-auto bg-gradient-to-br from-orange-400 to-red-400 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition">
                <div class="w-full h-full flex items-center justify-center bg-cover bg-center" 
                     style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Ccircle fill=%22%23fb923c%22 cx=%22150%22 cy=%22150%22 r=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EEmma%3C/text%3E%3C/svg%3E')">
                </div>
              </div>
            </div>
            <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Emma Virtanen</h3>
            <div class="text-brand-accent font-semibold mb-3">Junior Guide</div>
            <p class="text-gray-700 text-sm leading-relaxed px-4">
              The newest member of the Virtanen family tradition, 19-year-old Emma is following in her father Matti's footsteps, bringing fresh energy and social media savvy to the farm.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- MEET THE HORSES SECTION -->
    <section id="horses" class="py-16 md:py-24 bg-snow-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-center mb-12">
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-arctic-blue mb-4">
            Meet Our Finnhorses
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Each of our horses has their own unique personality and story. Get to know the stars of our tours!
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Horse 1 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <div class="aspect-[4/3] bg-gradient-to-br from-amber-700 to-amber-900 relative overflow-hidden" 
                 style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%23b45309%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EChestnut Finnhorse Portrait%3C/text%3E%3C/svg%3E')">
              <div class="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                Lead Horse
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Taika</h3>
              <div class="text-sm text-gray-600 mb-3">Chestnut Mare • 12 years old</div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Taika means "magic" in Finnish, and she lives up to her name. Gentle, wise, and confident, she's perfect for beginners and leads most of our aurora tours.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-aurora-green/10 text-aurora-green text-xs font-semibold rounded-full">Gentle</span>
                <span class="px-3 py-1 bg-ice-blue/30 text-arctic-blue text-xs font-semibold rounded-full">Experienced</span>
                <span class="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">Confident</span>
              </div>
            </div>
          </div>
          
          <!-- Horse 2 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <div class="aspect-[4/3] bg-gradient-to-br from-gray-700 to-black relative overflow-hidden" 
                 style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%23374151%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EBlack Finnhorse Portrait%3C/text%3E%3C/svg%3E')">
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Ukko</h3>
              <div class="text-sm text-gray-600 mb-3">Black Gelding • 9 years old</div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Named after the Finnish god of sky and thunder, Ukko is strong, steady, and loves winter rides. His striking black coat looks magnificent against the snow.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-aurora-green/10 text-aurora-green text-xs font-semibold rounded-full">Strong</span>
                <span class="px-3 py-1 bg-ice-blue/30 text-arctic-blue text-xs font-semibold rounded-full">Reliable</span>
                <span class="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">Majestic</span>
              </div>
            </div>
          </div>
          
          <!-- Horse 3 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <div class="aspect-[4/3] bg-gradient-to-br from-yellow-600 to-orange-700 relative overflow-hidden" 
                 style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%23ca8a04%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EPalomino Finnhorse Portrait%3C/text%3E%3C/svg%3E')">
              <div class="absolute top-4 right-4 bg-aurora-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                Family Favorite
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Aura</h3>
              <div class="text-sm text-gray-600 mb-3">Palomino Mare • 7 years old</div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Sweet-natured Aura is the perfect choice for families and first-time riders. She's patient, friendly, and absolutely loves attention from children.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-aurora-green/10 text-aurora-green text-xs font-semibold rounded-full">Patient</span>
                <span class="px-3 py-1 bg-ice-blue/30 text-arctic-blue text-xs font-semibold rounded-full">Friendly</span>
                <span class="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">Gentle</span>
              </div>
            </div>
          </div>
          
          <!-- Horse 4 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <div class="aspect-[4/3] bg-gradient-to-br from-red-800 to-red-950 relative overflow-hidden" 
                 style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%23991b1b%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ESorrel Finnhorse Portrait%3C/text%3E%3C/svg%3E')">
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Revontulet</h3>
              <div class="text-sm text-gray-600 mb-3">Sorrel Gelding • 10 years old</div>
              <p class="text-gray-700 leading-relaxed mb-4">
                "Revontulet" means Northern Lights in Finnish. This spirited but well-trained horse is ideal for riders with some experience who want a bit more energy.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-aurora-green/10 text-aurora-green text-xs font-semibold rounded-full">Energetic</span>
                <span class="px-3 py-1 bg-ice-blue/30 text-arctic-blue text-xs font-semibold rounded-full">Spirited</span>
                <span class="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">Athletic</span>
              </div>
            </div>
          </div>
          
          <!-- Horse 5 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <div class="aspect-[4/3] bg-gradient-to-br from-stone-600 to-stone-800 relative overflow-hidden" 
                 style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%2357534e%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EGray Finnhorse Portrait%3C/text%3E%3C/svg%3E')">
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Tuuli</h3>
              <div class="text-sm text-gray-600 mb-3">Gray Mare • 6 years old</div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Tuuli ("Wind") is graceful and light-footed. She moves like a dream through the forest and has an incredibly smooth gait that riders adore.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-aurora-green/10 text-aurora-green text-xs font-semibold rounded-full">Graceful</span>
                <span class="px-3 py-1 bg-ice-blue/30 text-arctic-blue text-xs font-semibold rounded-full">Smooth</span>
                <span class="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">Elegant</span>
              </div>
            </div>
          </div>
          
          <!-- Horse 6 -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <div class="aspect-[4/3] bg-gradient-to-br from-amber-900 to-yellow-800 relative overflow-hidden" 
                 style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 450%22%3E%3Crect fill=%22%2378350f%22 width=%22600%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3EBay Finnhorse Portrait%3C/text%3E%3C/svg%3E')">
              <div class="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Award Winner
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold text-arctic-blue mb-2">Koski</h3>
              <div class="text-sm text-gray-600 mb-3">Bay Stallion • 8 years old</div>
              <p class="text-gray-700 leading-relaxed mb-4">
                Our prize-winning breeding stallion. Koski has won multiple awards for his conformation and is the father of several of our younger horses. He occasionally joins tours.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-aurora-green/10 text-aurora-green text-xs font-semibold rounded-full">Champion</span>
                <span class="px-3 py-1 bg-ice-blue/30 text-arctic-blue text-xs font-semibold rounded-full">Noble</span>
                <span class="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-semibold rounded-full">Powerful</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Finnhorse Breed Info -->
        <div class="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-arctic-blue to-lapland-earth rounded-2xl p-8 md:p-12 text-white">
          <div class="text-center mb-8">
            <div class="inline-block bg-brand-accent px-4 py-2 rounded-full mb-4">
              <span class="font-semibold">
                <i class="fas fa-award mr-2"></i>
                Finland's National Treasure
              </span>
            </div>
            <h3 class="font-serif text-3xl font-bold mb-4">About the Finnhorse Breed</h3>
          </div>
          
          <div class="prose prose-lg prose-invert max-w-none text-ice-blue space-y-4">
            <p>
              The Finnhorse (Suomenhevonen) is the only native horse breed in Finland, with a history spanning over 400 years. These remarkable animals were bred to survive and thrive in the harsh Nordic climate, making them perfectly suited for Arctic adventures.
            </p>
            <p>
              Finnhorses are known for their versatility, gentle temperament, sure-footedness in snow, and incredible endurance. They're smaller and sturdier than many breeds, typically standing 14.2-15.3 hands high, with thick winter coats that protect them in temperatures as low as -30°C.
            </p>
            <p>
              As certified Finnhorse breeders, we're proud to preserve this living piece of Finnish heritage and share these magnificent animals with visitors from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- SUSTAINABILITY SECTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="inline-block bg-aurora-green/10 px-4 py-2 rounded-full mb-4">
                <span class="text-aurora-green font-semibold text-sm">
                  <i class="fas fa-leaf mr-2"></i>
                  Sustainability
                </span>
              </div>
              <h2 class="font-serif text-3xl md:text-4xl font-bold text-arctic-blue mb-6">
                Our Commitment to Sustainable Tourism
              </h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-aurora-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-certificate text-aurora-green text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-arctic-blue mb-2">Sustainable Travel Finland Certified</h4>
                    <p class="text-gray-700">
                      We meet rigorous environmental and social responsibility standards set by Visit Finland's sustainability program.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-ice-blue/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-horse-head text-arctic-blue text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-arctic-blue mb-2">Animal Welfare Excellence</h4>
                    <p class="text-gray-700">
                      Our horses work limited hours, receive top-tier veterinary care, and live in spacious, natural conditions with plenty of pasture time.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-recycle text-brand-accent text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-arctic-blue mb-2">Minimal Environmental Impact</h4>
                    <p class="text-gray-700">
                      We use renewable energy, minimize waste, practice sustainable land management, and support local businesses and suppliers.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-heart text-brand-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-arctic-blue mb-2">Breed Conservation</h4>
                    <p class="text-gray-700">
                      Our breeding program actively contributes to preserving the Finnhorse breed for future generations, maintaining genetic diversity and breed standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="aspect-[4/3] bg-gradient-to-br from-green-700 to-teal-700 rounded-2xl overflow-hidden shadow-2xl" 
                   style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23166534%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3ESustainable Farm Practices%3C/text%3E%3C/svg%3E')">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-arctic-blue to-lapland-earth text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto space-y-8">
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            Experience Our Family Legacy
          </h2>
          <p class="text-lg md:text-xl text-ice-blue">
            Join us for an authentic Arctic adventure that supports sustainable tourism and Finnhorse heritage
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/tours/aurora-ride#booking" 
               class="inline-flex items-center px-10 py-4 bg-brand-accent text-white font-bold text-lg rounded-full hover:bg-opacity-90 transition shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center">
              <i class="fas fa-calendar-check mr-3"></i>
              Book Your Tour
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
