<template>
  <div class="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating Orbs -->
      <div 
        v-for="orb in floatingOrbs" 
        :key="orb.id"
        class="absolute rounded-full blur-xl opacity-30 animate-float"
        :style="{
          left: orb.x + '%',
          top: orb.y + '%',
          width: orb.size + 'px',
          height: orb.size + 'px',
          backgroundColor: orb.color,
          animationDelay: orb.delay + 's',
          animationDuration: orb.duration + 's'
        }"
      ></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 translate-y-32"></div>
    </div>


 

    <!-- Hero Section -->
    <main class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
      <!-- 3D Chat Bubble Animation -->
      <div class="relative mb-12">
        <div class="chat-bubble-container">
          <div class="chat-bubble bubble-1">
            <div class="bubble-content">👋</div>
          </div>
          <div class="chat-bubble bubble-2">
            <div class="bubble-content">💬</div>
          </div>
          <div class="chat-bubble bubble-3">
            <div class="bubble-content">🚀</div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Connect Circle
          </span>
          <br>
          <span class="text-white">Beyond Boundaries</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
          Experience the future of communication 
        </p>
        <p class="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          seamless group chats, and lightning-fast connections.
        </p>

        <!-- CTA Buttons - Only show if NOT logged in -->
        <div v-if="!user" class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <router-link
            to="/register"
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span class="relative z-10">Start Chatting</span>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
          </router-link>
          
          <router-link
            to="/login"
            class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </router-link>
        </div>

        <!-- Feature Cards -->
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            class="group relative p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {{ feature.icon }}
            </div>
            <h3 class="text-xl font-bold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
            
            <!-- Hover Glow Effect -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 backdrop-blur-md bg-white/5 border-t border-white/10 py-8">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-gray-400 mb-4">
          &copy; 2025 ConnectCircle. Crafted with ❤️ for the future of communication.
        </p>
        <div class="flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Support</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()
const user = ref(null)

// Features data
const features = ref([
  {
    id: 1,
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Real-time messaging with zero latency and instant delivery across the globe.'
  },
  {
    id: 2,
    icon: '🛡️',
    title: 'Ultra Secure',
    description: 'End-to-end encryption ensures your conversations stay private and protected.'
  },
  {
    id: 3,
    icon: '🌐',
    title: 'Global Reach',
    description: 'Connect with friends and communities worldwide with seamless translation.'
  }
])

// Floating orbs for background animation
const floatingOrbs = ref([
  { id: 1, x: 10, y: 20, size: 100, color: '#06b6d4', delay: 0, duration: 8 },
  { id: 2, x: 80, y: 10, size: 150, color: '#8b5cf6', delay: 2, duration: 10 },
  { id: 3, x: 70, y: 70, size: 80, color: '#ec4899', delay: 4, duration: 6 },
  { id: 4, x: 20, y: 80, size: 120, color: '#06b6d4', delay: 1, duration: 9 },
  { id: 5, x: 50, y: 30, size: 60, color: '#3b82f6', delay: 3, duration: 7 }
])

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      user.value = currentUser
      // Redirect to home if already logged in
      router.push('/home')
    } else {
      user.value = null
    }
  })
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

/* 3D Chat Bubbles */
.chat-bubble-container {
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 1000px;
}

.chat-bubble {
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  border-radius: 50% 50% 50% 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
  animation: bubble-float 4s ease-in-out infinite;
  transform-style: preserve-3d;
}

.bubble-1 {
  top: 20px;
  left: 50px;
  animation-delay: 0s;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
}

.bubble-2 {
  top: 80px;
  left: 100px;
  animation-delay: 1s;
  background: linear-gradient(135deg, #3b82f6, #ec4899);
}

.bubble-3 {
  top: 60px;
  left: 20px;
  animation-delay: 2s;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
}

.bubble-content {
  font-size: 24px;
  color: white;
  animation: content-rotate 4s ease-in-out infinite;
}

@keyframes bubble-float {
  0%, 100% {
    transform: translateY(0px) rotateY(0deg) rotateX(0deg);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
  }
  33% {
    transform: translateY(-15px) rotateY(120deg) rotateX(15deg);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4);
  }
  66% {
    transform: translateY(-10px) rotateY(240deg) rotateX(-10deg);
    box-shadow: 0 12px 35px rgba(236, 72, 153, 0.35);
  }
}

@keyframes content-rotate {
  0%, 100% {
    transform: rotateY(0deg);
  }
  33% {
    transform: rotateY(-120deg);
  }
  66% {
    transform: rotateY(-240deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .chat-bubble-container {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  
  .chat-bubble {
    width: 50px;
    height: 50px;
  }
  
  .bubble-content {
    font-size: 20px;
  }
}
</style>