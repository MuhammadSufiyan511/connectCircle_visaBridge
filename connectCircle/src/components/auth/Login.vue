<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-950"></div>
    
    <!-- Floating background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-md px-6">
      <!-- Login card -->
      <div class="backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8 transform hover:scale-105 transition-all duration-500">
        <!-- Header section -->
        <div class="text-center mb-8">
          <!-- Logo -->
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          
          <!-- Title -->
          <h2 class="text-4xl font-black mb-3">
            <span class="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Welcome Back
            </span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            Sign in to <span class="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ConnectCircle</span>
          </p>
        </div>

        <!-- Login form -->
        <form @submit.prevent="login" class="space-y-6">
          <!-- Email field -->
          <div class="space-y-2">
            <label for="email-address" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </div>
              <input 
                id="email-address" 
                v-model="email" 
                name="email" 
                type="email" 
                autocomplete="email" 
                required 
                :disabled="loading"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 disabled:opacity-50"
                placeholder="Enter your email"
              >
            </div>
          </div>

          <!-- Password field -->
          <div class="space-y-2">
            <label for="password" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input 
                id="password" 
                v-model="password" 
                name="password" 
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password" 
                required 
                :disabled="loading"
                class="w-full pl-10 pr-12 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 disabled:opacity-50"
                placeholder="Enter your password"
              >
              <button 
                type="button" 
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg v-if="showPassword" class="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                </svg>
                <svg v-else class="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember me and forgot password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input 
                type="checkbox" 
                v-model="rememberMe"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              >
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
            <router-link to="/forgot-password" class="text-sm text-blue-600 hover:text-blue-500 font-medium">
              Forgot password?
            </router-link>
          </div>

          <!-- Error message -->
          <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div v-if="error" class="p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-sm text-red-700 dark:text-red-400">{{ error }}</p>
              </div>
            </div>
          </transition>

          <!-- Email sign in button -->
          <button 
            type="submit" 
            :disabled="loading || !email || !password"
            class="group relative w-full flex justify-center items-center py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <!-- Button glow effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            
            <svg v-if="loading && !googleLoading" class="relative z-10 w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <svg v-else class="relative z-10 w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            <span class="relative z-10">{{ loading && !googleLoading ? 'Signing In...' : 'Sign In' }}</span>
          </button>

          <!-- Divider -->
          <div class="relative flex items-center">
            <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span class="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-sm font-medium bg-white/50 dark:bg-gray-900/50 px-3 py-1 rounded-full">
              or continue with
            </span>
            <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <!-- Google sign in button -->
          <button 
            type="button" 
            @click="signInWithGoogle" 
            :disabled="googleLoading"
            class="group relative w-full flex justify-center items-center py-4 px-6 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 hover:bg-white/80 dark:hover:bg-gray-700/80 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <svg v-if="googleLoading" class="w-5 h-5 mr-3 animate-spin text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <svg v-else class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>{{ googleLoading ? 'Signing In...' : 'Sign In with Google' }}</span>
          </button>
        </form>

        <!-- Sign up link -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 dark:text-gray-400">
            Don't have an account?
            <router-link 
              to="/register" 
              class="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 ml-1"
            >
              Create one here
            </router-link>
          </p>
        </div>

        <!-- Features preview -->
        <div class="mt-8 grid grid-cols-3 gap-4 text-center">
          <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <svg class="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <p class="text-xs font-semibold text-blue-700 dark:text-blue-300">Real-time</p>
          </div>
          <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800">
            <svg class="w-6 h-6 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <p class="text-xs font-semibold text-indigo-700 dark:text-indigo-300">Secure</p>
          </div>
          <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
            <svg class="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <p class="text-xs font-semibold text-purple-700 dark:text-purple-300">Social</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/services/firebase';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const loading = ref(false);
    const googleLoading = ref(false);
    const showPassword = ref(false);
    const rememberMe = ref(false);
    const router = useRouter();

    const login = async () => {
      if (loading.value) return;
      
      loading.value = true;
      error.value = '';
      
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        
        // Save remember me preference
        if (rememberMe.value) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('savedEmail', email.value);
        } else {
          localStorage.removeItem('rememberMe');
          localStorage.removeItem('savedEmail');
        }
        
        router.push('/home');
      } catch (err) {
        console.error('Login error:', err);
        
        // User-friendly error messages
        switch (err.code) {
          case 'auth/user-not-found':
            error.value = 'No account found with this email address.';
            break;
          case 'auth/wrong-password':
            error.value = 'Incorrect password. Please try again.';
            break;
          case 'auth/invalid-email':
            error.value = 'Please enter a valid email address.';
            break;
          case 'auth/user-disabled':
            error.value = 'This account has been disabled.';
            break;
          case 'auth/too-many-requests':
            error.value = 'Too many failed attempts. Please try again later.';
            break;
          default:
            error.value = 'Unable to sign in. Please check your credentials and try again.';
        }
      } finally {
        loading.value = false;
      }
    };

    const signInWithGoogle = async () => {
      if (googleLoading.value) return;
      
      googleLoading.value = true;
      error.value = '';
      
      try {
        await signInWithPopup(auth, googleProvider);
        router.push('/');
      } catch (err) {
        console.error('Google sign-in error:', err);
        
        switch (err.code) {
          case 'auth/popup-closed-by-user':
            error.value = 'Sign-in cancelled. Please try again.';
            break;
          case 'auth/popup-blocked':
            error.value = 'Pop-up blocked. Please allow pop-ups and try again.';
            break;
          case 'auth/account-exists-with-different-credential':
            error.value = 'An account already exists with this email using a different sign-in method.';
            break;
          default:
            error.value = 'Unable to sign in with Google. Please try again.';
        }
      } finally {
        googleLoading.value = false;
      }
    };

    // Load saved email if remember me was checked
    const savedEmail = localStorage.getItem('savedEmail');
    const wasRemembered = localStorage.getItem('rememberMe');
    
    if (wasRemembered === 'true' && savedEmail) {
      email.value = savedEmail;
      rememberMe.value = true;
    }

    return { 
      email, 
      password, 
      error, 
      loading, 
      googleLoading,
      showPassword,
      rememberMe,
      login, 
      signInWithGoogle 
    };
  }
};
</script>

<style scoped>
/* Custom backdrop blur for better browser support */
.backdrop-blur-2xl {
  backdrop-filter: blur(40px);
}

/* Smooth transitions for all elements */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhanced focus styles */
input:focus {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Custom checkbox styling */
input[type="checkbox"] {
  border-radius: 0.375rem;
}

/* Button glow animation */
@keyframes buttonGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
}

.group:hover {
  animation: buttonGlow 2s ease-in-out infinite;
}
</style>