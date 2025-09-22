<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-200 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-950"></div>
    
    <!-- Floating background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-md px-6">
      <!-- Register card -->
      <div class="backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8 transform hover:scale-105 transition-all duration-500">
        <!-- Header section -->
        <div class="text-center mb-8">
          <!-- Logo -->
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
          </div>
          
          <!-- Title -->
          <h2 class="text-4xl font-black mb-3">
            <span class="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Join the Circle
            </span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            Create your <span class="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">ConnectCircle</span> account
          </p>
        </div>

        <!-- Register form -->
        <form @submit.prevent="register" class="space-y-6">
          <!-- Display Name field -->
          <div class="space-y-2">
            <label for="displayName" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Display Name
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <input 
                id="displayName" 
                v-model="displayName" 
                name="displayName" 
                type="text" 
                autocomplete="name" 
                required 
                :disabled="loading"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 disabled:opacity-50"
                placeholder="Enter your display name"
                @input="validateDisplayName"
              >
              <!-- Display name validation -->
              <div v-if="displayNameError" class="mt-1 text-xs text-red-600 dark:text-red-400">
                {{ displayNameError }}
              </div>
              <div v-else-if="displayName && displayName.length >= 2" class="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Looks good!
              </div>
            </div>
          </div>

          <!-- Email field -->
          <div class="space-y-2">
            <label for="email-address" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 disabled:opacity-50"
                placeholder="Enter your email address"
                @input="validateEmail"
              >
              <!-- Email validation -->
              <div v-if="emailError" class="mt-1 text-xs text-red-600 dark:text-red-400">
                {{ emailError }}
              </div>
              <div v-else-if="email && isValidEmail(email)" class="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Valid email address
              </div>
            </div>
          </div>

          <!-- Password field -->
          <div class="space-y-2">
            <label for="password" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input 
                id="password" 
                v-model="password" 
                name="password" 
                :type="showPassword ? 'text' : 'password'"
                autocomplete="new-password" 
                required 
                :disabled="loading"
                class="w-full pl-10 pr-12 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 disabled:opacity-50"
                placeholder="Create a strong password"
                @input="validatePassword"
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

            <!-- Password strength indicator -->  
            <div class="space-y-2">
              <div class="flex space-x-1">
                <div :class="['h-1 flex-1 rounded-full transition-all duration-300', getPasswordStrengthColor(0)]"></div>
                <div :class="['h-1 flex-1 rounded-full transition-all duration-300', getPasswordStrengthColor(1)]"></div>
                <div :class="['h-1 flex-1 rounded-full transition-all duration-300', getPasswordStrengthColor(2)]"></div>
                <div :class="['h-1 flex-1 rounded-full transition-all duration-300', getPasswordStrengthColor(3)]"></div>
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">
                <span :class="passwordStrength.color">{{ passwordStrength.text }}</span>
              </div>
              
              <!-- Password requirements -->
              <div class="space-y-1 text-xs">
                <div :class="password.length >= 8 ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'" class="flex items-center">
                  <svg :class="password.length >= 8 ? 'text-green-500' : 'text-gray-400'" class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  At least 8 characters
                </div>
                <div :class="/[A-Z]/.test(password) ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'" class="flex items-center">
                  <svg :class="/[A-Z]/.test(password) ? 'text-green-500' : 'text-gray-400'" class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  One uppercase letter
                </div>
                <div :class="/[0-9]/.test(password) ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'" class="flex items-center">
                  <svg :class="/[0-9]/.test(password) ? 'text-green-500' : 'text-gray-400'" class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  One number
                </div>
              </div>
            </div>
          </div>

          <!-- Terms and conditions -->
          <div class="flex items-start space-x-2">
            <input 
              id="terms" 
              v-model="agreeToTerms"
              type="checkbox" 
              class="w-4 h-4 mt-0.5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              required
            >
            <label for="terms" class="text-sm text-gray-600 dark:text-gray-400">
              I agree to the 
              <a href="#" class="text-purple-600 hover:text-purple-500 font-medium">Terms of Service</a> 
              and 
              <a href="#" class="text-purple-600 hover:text-purple-500 font-medium">Privacy Policy</a>
            </label>
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

          <!-- Success message -->
          <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div v-if="success" class="p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-sm text-green-700 dark:text-green-400">{{ success }}</p>
              </div>
            </div>
          </transition>

          <!-- Create account button -->
          <button 
            type="submit" 
            :disabled="loading || !isFormValid"
            class="group relative w-full flex justify-center items-center py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <!-- Button glow effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            
            <svg v-if="loading" class="relative z-10 w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <svg v-else class="relative z-10 w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
            <span class="relative z-10">{{ loading ? 'Creating Account...' : 'Create Account' }}</span>
          </button>
        </form>

        <!-- Sign in link -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 dark:text-gray-400">
            Already have an account?
            <router-link 
              to="/" 
              class="font-semibold text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 ml-1"
            >
              Sign in here
            </router-link>
          </p>
        </div>

        <!-- Benefits preview -->
        <div class="mt-8 grid grid-cols-2 gap-4 text-center">
          <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
            <svg class="w-8 h-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
            </svg>
            <p class="text-xs font-semibold text-purple-700 dark:text-purple-300">Connect with Friends</p>
          </div>
          <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800">
            <svg class="w-8 h-8 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <p class="text-xs font-semibold text-indigo-700 dark:text-indigo-300">Real-time Chat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref as dbRef, set } from 'firebase/database';
import { auth, db } from '@/services/firebase';

export default {
  name: 'Register',
  setup() {
    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const success = ref('');
    const loading = ref(false);
    const showPassword = ref(false);
    const agreeToTerms = ref(false);
    
    // Validation states
    const displayNameError = ref('');
    const emailError = ref('');
    
    const router = useRouter();

    // Form validation
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validateDisplayName = () => {
      if (displayName.value.length < 2) {
        displayNameError.value = 'Display name must be at least 2 characters long';
      } else if (displayName.value.length > 30) {
        displayNameError.value = 'Display name must be less than 30 characters';
      } else if (!/^[a-zA-Z0-9\s\-_.]+$/.test(displayName.value)) {
        displayNameError.value = 'Display name contains invalid characters';
      } else {
        displayNameError.value = '';
      }
    };

    const validateEmail = () => {
      if (email.value && !isValidEmail(email.value)) {
        emailError.value = 'Please enter a valid email address';
      } else {
        emailError.value = '';
      }
    };

    const validatePassword = () => {
      // Password validation is handled by the password strength indicator
    };

    // Password strength calculation
    const passwordStrength = computed(() => {
      const pwd = password.value;
      let score = 0;
      let feedback = [];

      if (pwd.length >= 8) score++;
      if (/[a-z]/.test(pwd)) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;

      if (score === 0 || pwd.length === 0) {
        return { text: 'Enter a password', color: 'text-gray-500' };
      } else if (score <= 2) {
        return { text: 'Weak password', color: 'text-red-500' };
      } else if (score <= 3) {
        return { text: 'Fair password', color: 'text-yellow-500' };
      } else if (score <= 4) {
        return { text: 'Good password', color: 'text-blue-500' };
      } else {
        return { text: 'Strong password', color: 'text-green-500' };
      }
    });

    const getPasswordStrengthColor = (index) => {
      const pwd = password.value;
      let score = 0;
      
      if (pwd.length >= 8) score++;
      if (/[a-z]/.test(pwd)) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;

      if (index < score) {
        if (score <= 2) return 'bg-red-500';
        if (score <= 3) return 'bg-yellow-500';
        if (score <= 4) return 'bg-blue-500';
        return 'bg-green-500';
      }
      return 'bg-gray-300 dark:bg-gray-600';
    };

    // Form validation
    const isFormValid = computed(() => {
      return displayName.value.length >= 2 &&
             email.value &&
             isValidEmail(email.value) &&
             password.value.length >= 8 &&
             agreeToTerms.value &&
             !displayNameError.value &&
             !emailError.value;
    });

    const register = async () => {
      if (loading.value || !isFormValid.value) return;
      
      loading.value = true;
      error.value = '';
      success.value = '';
      
      try {
        // Create user account
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        
        // Update profile with display name
        await updateProfile(user, { displayName: displayName.value });
        
        // Create user in database
        await set(dbRef(db, 'users/' + user.uid), {
          displayName: displayName.value,
          email: email.value,
          createdAt: Date.now(),
          lastSeen: Date.now(),
          profileComplete: true
        });
        
        success.value = 'Account created successfully! Redirecting...';
        
        // Redirect after a short delay
        setTimeout(() => {
          router.push('/');
        }, 1500);
        
      } catch (err) {
        console.error('Registration error:', err);
        
        // User-friendly error messages
        switch (err.code) {
          case 'auth/email-already-in-use':
            error.value = 'An account with this email already exists. Please sign in instead.';
            break;
          case 'auth/weak-password':
            error.value = 'Password is too weak. Please choose a stronger password.';
            break;
          case 'auth/invalid-email':
            error.value = 'Please enter a valid email address.';
            break;
          case 'auth/operation-not-allowed':
            error.value = 'Account creation is currently disabled. Please try again later.';
            break;
          case 'auth/too-many-requests':
            error.value = 'Too many registration attempts. Please try again later.';
            break;
          default:
            error.value = 'Unable to create account. Please try again.';
        }
      } finally {
        loading.value = false;
      }
    };

    return { 
  displayName,
  email,
  password,
  error,
  success,
  loading,
  showPassword,
  agreeToTerms,
  displayNameError,
  emailError,

  // validation helpers used in template
  isValidEmail,
  validateDisplayName,
  validateEmail,
  validatePassword,

  // password strength UI + helper
  passwordStrength,
  getPasswordStrengthColor,

  // form + action
  isFormValid,
  register
};

  }
};
</script>