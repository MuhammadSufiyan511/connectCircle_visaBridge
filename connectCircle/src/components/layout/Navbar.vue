<!-- src/layout/Navbar.vue -->
<template>
  <header class="w-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/30 shadow-lg relative z-50">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-60"></div>
    
    <div class="relative max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo Section -->
        <div class="flex items-center space-x-4">
          <router-link to="/" class="flex items-center space-x-3 group">
            <!-- Animated logo -->
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <div>
              <h1 class="font-black text-2xl bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                ConnectCircle
              </h1>
              <p class="text-xs text-gray-500 dark:text-gray-400 -mt-1">Stay Connected</p>
            </div>
          </router-link>
        </div>

        <!-- Center Navigation (visible on larger screens) -->
        <nav class="hidden md:flex items-center space-x-1 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-1 border border-white/30">
          <router-link 
            to="/" 
            :class="[
              'px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2',
              $route.path === '/' 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>Chat</span>
          </router-link>
          
          <router-link 
            to="/profile" 
            :class="[
              'px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2',
              $route.path === '/profile' 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Profile</span>
          </router-link>
        </nav>

        <!-- Auth Controls -->
        <div class="flex items-center space-x-4">
          <!-- Dark mode toggle -->
          

          <!-- Authenticated User -->
          <template v-if="isAuthenticated">
            <!-- User Menu -->
            <div class="relative" ref="userMenuRef">
              <button 
                @click="toggleUserMenu"
                class="flex items-center space-x-3 p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300 group"
              >
                <!-- User Avatar -->
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl">
                  {{ userInitials }}
                </div>
                <div class="hidden sm:block text-left">
                  <p class="text-sm font-semibold text-gray-800 dark:text-white truncate max-w-32">
                    {{ userDisplay }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Online</p>
                </div>
                <svg class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div 
                  v-show="showUserMenu"
                  class="absolute right-0 mt-2 w-80 rounded-2xl backdrop-blur-2xl bg-white/90 dark:bg-gray-800/90 shadow-2xl border border-white/30 dark:border-gray-700/30 py-2 z-50"
                >
                  <!-- User Info Header -->
                  <div class="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                        {{ userInitials }}
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900 dark:text-white">{{ userDisplay }}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ store.state.user?.email }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Menu Items -->
                  <div class="py-2">
                    <router-link 
                      to="/profile" 
                      class="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                      @click="closeUserMenu"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <span>View Profile</span>
                    </router-link>

                    <router-link 
                      to="/settings" 
                      class="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                      @click="closeUserMenu"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>Settings</span>
                    </router-link>

                    <div class="border-t border-gray-200/50 dark:border-gray-700/50 my-2"></div>

                    <!-- Enhanced Sign Out -->
                    <button 
                      @click="handleSignOut"
                      class="w-full flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 group"
                      :disabled="signingOut"
                    >
                      <svg v-if="!signingOut" class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                      </svg>
                      <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                      <span>{{ signingOut ? 'Signing Out...' : 'Sign Out' }}</span>
                    </button>
                  </div>
                </div>
              </transition>
            </div>
          </template>

          <!-- Unauthenticated Users -->
          <template v-else>
            <div class="flex items-center space-x-3">
              <!-- Enhanced Sign In Button -->
              <router-link 
                to="/login" 
                class="group px-6 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300 flex items-center space-x-2"
              >
                <svg class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
                <span>Sign In</span>
              </router-link>

              <!-- Enhanced Create Account Button -->
              <router-link 
                to="/register" 
                class="group relative px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 overflow-hidden"
              >
                <!-- Button glow effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                <svg class="relative z-10 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                <span class="relative z-10">Create Account</span>
              </router-link>
            </div>
          </template>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300"
          >
            <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-show="showMobileMenu" class="md:hidden mt-4 p-4 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-gray-800/80 border border-white/30">
          <nav class="space-y-2">
            <router-link 
              to="/home" 
              class="flex items-center space-x-2 p-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
              @click="closeMobileMenu"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>Chat</span>
            </router-link>
            
            <router-link 
              to="/profile" 
              class="flex items-center space-x-2 p-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
              @click="closeMobileMenu"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>Profile</span>
            </router-link>
          </nav>
        </div>
      </transition>
    </div>

    <!-- Success/Error Toast Notifications -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform translate-y-[-100%] opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-[-100%] opacity-0"
    >
      <div v-show="showToast" class="fixed top-20 right-6 z-50">
        <div :class="[
          'p-4 rounded-2xl backdrop-blur-2xl shadow-2xl border flex items-center space-x-3',
          toastType === 'success' 
            ? 'bg-green-50/90 border-green-200 text-green-800' 
            : 'bg-red-50/90 border-red-200 text-red-800'
        ]">
          <svg v-if="toastType === 'success'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <span class="font-medium">{{ toastMessage }}</span>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

// Reactive state
const showUserMenu = ref(false);
const showMobileMenu = ref(false);
const signingOut = ref(false);
const isDarkMode = ref(false);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");
const userMenuRef = ref(null);

// Computed properties
const isAuthenticated = computed(() => !!store.state.user);
const userDisplay = computed(() => (store.state.user?.displayName || store.state.user?.email || "User"));
const userInitials = computed(() => {
  if (!store.state.user?.displayName) return "U";
  return store.state.user.displayName
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
});

// Methods
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
  showMobileMenu.value = false;
};

const closeUserMenu = () => {
  showUserMenu.value = false;
};

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  showUserMenu.value = false;
};

const closeMobileMenu = () => {
  showMobileMenu.value = false;
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('darkMode', isDarkMode.value.toString());
};

const showToastNotification = (message, type = 'success') => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

const handleSignOut = async () => {
  if (signingOut.value) return;
  
  signingOut.value = true;
  
  try {
    await signOut(auth);
    store.commit("clearUser");
    closeUserMenu();
    showToastNotification("Successfully signed out!", "success");
    
    // Redirect with a slight delay for better UX
    setTimeout(() => {
      router.push("/");
    }, 1000);
    
  } catch (err) {
    console.error("Sign out failed:", err);
    showToastNotification("Failed to sign out. Please try again.", "error");
  } finally {
    signingOut.value = false;
  }
};

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
    showUserMenu.value = false;
  }
};

// Initialize dark mode
onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true' || (!savedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
  
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Custom backdrop blur for better browser support */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
}

.backdrop-blur-2xl {
  backdrop-filter: blur(40px);
}

/* Smooth transitions for all elements */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Custom gradient animations */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.bg-gradient-animated {
  background: linear-gradient(-45deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

/* Enhanced shadow effects */
.shadow-glow {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.shadow-glow:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
}
</style>