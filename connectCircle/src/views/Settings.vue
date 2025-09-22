<template>
  <div class="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
    <!-- Settings Component -->
    <div
      class="settings-card bg-white/80 dark:bg-gray-800/80 rounded-none shadow-xl border border-white/50 dark:border-gray-700/50 overflow-hidden min-h-screen flex flex-col"
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">Settings</h1>
            <p class="text-primary-100 mt-1">
              Customize your ConnectCircle experience
            </p>
          </div>
          <div class="bg-white/20 p-3 rounded-full">
            <i class="fas fa-cog text-xl"></i>
          </div>
        </div>
      </div>

      <!-- Settings Content -->
       <div class="p-6 flex-1 overflow-y-auto">
        <!-- Appearance Section -->
        <div class="mb-6">
          <h2
            class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center"
          >
            <i class="fas fa-palette mr-2 text-primary-500"></i>
            Appearance
          </h2>

          <!-- Dark Mode Toggle -->
          <div class="flex items-center justify-between py-3">
            <div>
              <p class="font-medium text-gray-700 dark:text-gray-300">
                Dark Mode
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Switch between light and dark themes
              </p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="settings.darkMode"
                @change="updateTheme"
                class="sr-only peer"
              />
              <div
                class="toggle-bg w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
              ></div>
            </label>
          </div>

          <!-- Theme Color -->
          <div class="py-3">
            <p
              class="font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Theme Color
            </p>
            <div class="flex space-x-2">
              <div
                v-for="color in themeColors"
                :key="color.name"
                class="w-8 h-8 rounded-full cursor-pointer border-2 transition-all"
                :class="[
                  color.bg,
                  settings.themeColor === color.name
                    ? 'border-gray-800 dark:border-gray-200 scale-110'
                    : 'border-transparent'
                ]"
                @click="settings.themeColor = color.name"
              ></div>
            </div>
          </div>
        </div>

        <div class="section-divider my-4"></div>

        <!-- Notifications Section -->
        <div class="mb-6">
          <h2
            class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center"
          >
            <i class="fas fa-bell mr-2 text-primary-500"></i>
            Notifications
          </h2>

          <!-- Notifications Toggle -->
          <div class="flex items-center justify-between py-3">
            <div>
              <p class="font-medium text-gray-700 dark:text-gray-300">
                Enable Notifications
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Receive alerts for new messages
              </p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="settings.notificationsEnabled"
                class="sr-only peer"
              />
              <div
                class="toggle-bg w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
              ></div>
            </label>
          </div>

          <!-- Sound Settings -->
          <div class="py-3" v-if="settings.notificationsEnabled">
            <p
              class="font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Notification Sound
            </p>
            <select
              v-model="settings.notificationSound"
              class="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
            >
              <option value="chime">Chime</option>
              <option value="ding">Ding</option>
              <option value="pop">Pop</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div class="section-divider my-4"></div>

        <!-- Chat Settings Section -->
        <div class="mb-6">
          <h2
            class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center"
          >
            <i class="fas fa-comments mr-2 text-primary-500"></i>
            Chat Settings
          </h2>

          <!-- Language Selection -->
          <div class="py-3">
            <p
              class="font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Language
            </p>
            <select
              v-model="settings.language"
              class="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
            </select>
          </div>

          <!-- Message Preview -->
          <div class="flex items-center justify-between py-3">
            <div>
              <p class="font-medium text-gray-700 dark:text-gray-300">
                Message Previews
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Show message content in notifications
              </p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="settings.messagePreviews"
                class="sr-only peer"
              />
              <div
                class="toggle-bg w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
              ></div>
            </label>
          </div>

          <!-- Auto-play GIFs -->
          <div class="flex items-center justify-between py-3">
            <div>
              <p class="font-medium text-gray-700 dark:text-gray-300">
                Auto-play GIFs
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Automatically play GIFs in chat
              </p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="settings.autoPlayGifs"
                class="sr-only peer"
              />
              <div
                class="toggle-bg w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
              ></div>
            </label>
          </div>
        </div>

        <div class="section-divider my-4"></div>

        <!-- Privacy Section -->
        <div>
          <h2
            class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center"
          >
            <i class="fas fa-shield-alt mr-2 text-primary-500"></i>
            Privacy
          </h2>

          <!-- Read Receipts -->
          <div class="flex items-center justify-between py-3">
            <div>
              <p class="font-medium text-gray-700 dark:text-gray-300">
                Read Receipts
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Let others see when you've read their messages
              </p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="settings.readReceipts"
                class="sr-only peer"
              />
              <div
                class="toggle-bg w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
              ></div>
            </label>
          </div>

          <!-- Online Status -->
          <div class="py-3">
            <p
              class="font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Online Status Visibility
            </p>
            <select
              v-model="settings.onlineStatus"
              class="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
            >
              <option value="all">Everyone</option>
              <option value="contacts">Contacts Only</option>
              <option value="none">Nobody</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
       <div class="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 flex space-x-3">
        <button
          @click="resetSettings"
          class="flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors"
        >
          Reset
        </button>
        <button
          @click="saveSettings"
          class="flex-1 py-3 px-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg shadow-md transition-all transform hover:scale-105"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const settings = ref({
  darkMode: false,
  themeColor: "blue",
  notificationsEnabled: true,
  notificationSound: "chime",
  language: "en",
  messagePreviews: true,
  autoPlayGifs: true,
  readReceipts: true,
  onlineStatus: "all",
});

const themeColors = [
  { name: "blue", bg: "bg-blue-500" },
  { name: "green", bg: "bg-green-500" },
  { name: "purple", bg: "bg-purple-500" },
  { name: "pink", bg: "bg-pink-500" },
  { name: "orange", bg: "bg-orange-500" },
];

const updateTheme = () => {
  if (settings.value.darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const saveSettings = () => {
  localStorage.setItem("connectCircleSettings", JSON.stringify(settings.value));
  alert("Settings saved successfully!");
};

const resetSettings = () => {
  if (confirm("Are you sure you want to reset all settings to default?")) {
    settings.value = {
      darkMode: false,
      themeColor: "blue",
      notificationsEnabled: true,
      notificationSound: "chime",
      language: "en",
      messagePreviews: true,
      autoPlayGifs: true,
      readReceipts: true,
      onlineStatus: "all",
    };
    updateTheme();
  }
};

onMounted(() => {
  const savedSettings = localStorage.getItem("connectCircleSettings");
  if (savedSettings) {
    settings.value = JSON.parse(savedSettings);
    updateTheme();
  }
});
</script>

<style scoped>
.toggle-bg:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  background-color: #fff;
  border: 1px solid #d1d5db; /* Tailwind's border-gray-300 */
  border-radius: 9999px;
  height: 1.25rem; /* h-5 */
  width: 1.25rem;  /* w-5 */
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); /* shadow-sm */
}
input:checked + .toggle-bg:after {
  transform: translateX(100%);
  border-color: #fff; /* Tailwind's border-white */
}
input:checked + .toggle-bg {
  background-color: #2563eb; /* Tailwind's bg-primary-600 (default blue-600) */
  border-color: #2563eb;     /* Tailwind's border-primary-600 (default blue-600) */
}
.settings-card {
  backdrop-filter: blur(10px);
}
.section-divider {
  border-top: 1px solid #e5e7eb; /* Tailwind's border-gray-200 */
}

.dark .section-divider {
  border-top: 1px solid #374151; /* Tailwind's border-gray-700 */
}
</style>
