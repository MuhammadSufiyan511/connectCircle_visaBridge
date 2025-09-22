<!-- src/views/Profile.vue -->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Left: Avatar / quick info -->
        <div class="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-lg border border-white/30 dark:border-gray-700/30">
          <div class="flex flex-col items-center text-center">
            <div
              v-if="user.photoURL"
              class="w-28 h-28 rounded-xl overflow-hidden shadow-md mb-4"
            >
              <img :src="user.photoURL" alt="avatar" class="w-full h-full object-cover" />
            </div>

            <div v-else class="w-28 h-28 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-md mb-4">
              {{ initials }}
            </div>

            <h3 class="text-lg font-extrabold text-gray-900 dark:text-white mb-1">{{ displayNameLocal || user.displayName || "Unnamed User" }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ user.email || "No email" }}</p>

            <div class="mt-4 w-full">
              <button
                @click="handleSignOut"
                class="w-full py-2 px-4 rounded-xl bg-red-600 text-white font-semibold hover:shadow-lg transition-transform hover:scale-101"
                :disabled="signingOut"
              >
                <span v-if="signingOut">Signing out...</span>
                <span v-else>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Edit form & account details -->
        <div class="md:col-span-2 bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-lg border border-white/30 dark:border-gray-700/30">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Profile</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">Manage your account details</p>
          </div>

          <form @submit.prevent="saveProfile" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Display name</label>
              <input
                v-model="displayNameLocal"
                type="text"
                placeholder="Your display name"
                class="w-full px-4 py-2 rounded-xl border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Avatar URL (optional)</label>
              <input
                v-model="photoURLLocal"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                class="w-full px-4 py-2 rounded-xl border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">You can paste a link to an image (or leave blank to use initials).</p>
            </div>

            <div class="flex items-center gap-3">
              <button
                type="submit"
                :disabled="saving"
                class="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span v-if="saving">Saving...</span>
                <span v-else>Save Changes</span>
              </button>

              <button
                type="button"
                @click="sendPasswordReset"
                :disabled="sendingReset"
                class="px-4 py-2 rounded-xl border dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-white/70 transition-colors"
              >
                <span v-if="sendingReset">Sending...</span>
                <span v-else>Reset Password</span>
              </button>

              <button
                type="button"
                @click="revertChanges"
                class="ml-auto text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                Revert
              </button>
            </div>
          </form>

          <div class="mt-6 border-t border-gray-200/50 dark:border-gray-700/50 pt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <div class="text-xs text-gray-400">UID</div>
              <div class="break-all font-mono text-sm mt-1">{{ user.uid || "—" }}</div>
            </div>

            <div>
              <div class="text-xs text-gray-400">Provider</div>
              <div class="mt-1">{{ providerId }}</div>
            </div>

            <div>
              <div class="text-xs text-gray-400">Email verified</div>
              <div class="mt-1">{{ user.emailVerified ? "Yes" : "No" }}</div>
            </div>

            <div>
              <div class="text-xs text-gray-400">Created At</div>
              <div class="mt-1">{{ createdAtReadable }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Toast -->
      <transition name="fade">
        <div v-if="toast.show" :class="toastClass" class="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-xl">
          <div class="flex items-center gap-3">
            <svg v-if="toast.type === 'success'" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <svg v-else class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <div class="font-medium">{{ toast.message }}</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { auth } from "../services/firebase";
import { updateProfile, sendPasswordResetEmail, signOut } from "firebase/auth";

const store = useStore();
const router = useRouter();

// Local reactive state
const user = computed(() => store.state.user || auth.currentUser || {});
const displayNameLocal = ref(user.value?.displayName || "");
const photoURLLocal = ref(user.value?.photoURL || "");
const saving = ref(false);
const sendingReset = ref(false);
const signingOut = ref(false);

// Toast
const toast = ref({ show: false, message: "", type: "success" });
const showToast = (message, type = "success") => {
  toast.value = { show: true, message, type };
  setTimeout(() => {
    toast.value.show = false;
  }, 3000);
};

// Derived values
const initials = computed(() => {
  const name = displayNameLocal.value || user.value.displayName || user.value.email || "U";
  return name
    .split(" ")
    .map(n => n[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
});

const providerId = computed(() => {
  try {
    return user.value?.providerData?.[0]?.providerId || "password";
  } catch { return "password"; }
});

const createdAtReadable = computed(() => {
  // Firebase user metadata has 'metadata' maybe not exposed; we try to use creationTime if available
  try {
    const ct = user.value?.metadata?.creationTime || user.value?.creationTime || null;
    if (!ct) return "Unknown";
    return new Date(ct).toLocaleString();
  } catch {
    return "Unknown";
  }
});

// Sync local fields when user changes (for example on initial load)
onMounted(() => {
  displayNameLocal.value = user.value?.displayName || "";
  photoURLLocal.value = user.value?.photoURL || "";
});

// Save profile to Firebase auth and Vuex
const saveProfile = async () => {
  if (saving.value) return;
  saving.value = true;

  try {
    const current = auth.currentUser;
    if (!current) throw new Error("No authenticated user");

    // Simple client-side validation
    const newDisplay = (displayNameLocal.value || "").trim();
    const newPhoto = (photoURLLocal.value || "").trim() || null;

    await updateProfile(current, {
      displayName: newDisplay || null,
      photoURL: newPhoto || null
    });

    // Update Vuex store with freshest info
    const updatedUser = {
      uid: current.uid,
      email: current.email,
      displayName: current.displayName,
      photoURL: current.photoURL,
      emailVerified: current.emailVerified,
      providerData: current.providerData
    };
    store.commit("setUser", updatedUser);

    showToast("Profile updated", "success");
  } catch (err) {
    console.error("saveProfile error:", err);
    showToast("Failed to update profile", "error");
  } finally {
    saving.value = false;
  }
};

// Send password reset email (safe operation)
const sendPasswordReset = async () => {
  if (sendingReset.value) return;
  sendingReset.value = true;

  try {
    if (!user.value?.email) throw new Error("No email available");
    await sendPasswordResetEmail(auth, user.value.email);
    showToast("Password reset email sent", "success");
  } catch (err) {
    console.error("sendPasswordReset error:", err);
    showToast("Failed to send reset email", "error");
  } finally {
    sendingReset.value = false;
  }
};

// Revert the form inputs to the last-saved values
const revertChanges = () => {
  displayNameLocal.value = user.value?.displayName || "";
  photoURLLocal.value = user.value?.photoURL || "";
  showToast("Changes reverted", "success");
};

// Sign out helper
const handleSignOut = async () => {
  if (signingOut.value) return;
  signingOut.value = true;

  try {
    await signOut(auth);
    store.commit("clearUser");
    showToast("Signed out", "success");
    // redirect to login/home
    setTimeout(() => router.push("/"), 500);
  } catch (err) {
    console.error("Sign out failed:", err);
    showToast("Sign out failed", "error");
  } finally {
    signingOut.value = false;
  }
};
</script>

<style scoped>
/* slight fade for toast */
.fade-enter-active, .fade-leave-active { transition: opacity .2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
