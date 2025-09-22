<template>
  <div>
    <!-- Sidebar -->
    <div
      :class="[
        'relative h-full flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out z-50',
        'md:flex',
        collapsed ? 'md:w-16' : 'md:w-72',
        'w-80 md:w-auto'
      ]"
    >
      <!-- Header -->
      <div class="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between">
          <!-- Logo/Brand -->
          <div class="flex items-center gap-3">
            <div
              :class="[
                'rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg',
                collapsed ? 'w-8 h-8 text-sm' : 'w-10 h-10'
              ]"
            >
              {{ collapsed ? 'CC' : 'CC' }}
            </div>
            <div v-show="!collapsed" class="transition-opacity duration-200">
              <h4 class="font-bold text-gray-900 dark:text-white text-sm">ConnectCircle</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">Chats & Contacts</p>
            </div>
          </div>

          
          
        </div>
      </div>

      <!-- Search Bar -->
      <div v-show="!collapsed" class="flex-shrink-0 p-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search conversations..."
            class="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <!-- Collapsed search icon -->
      <div v-show="collapsed" class="flex-shrink-0 p-2 flex justify-center">
        <button
          @click="expandTemporarily"
          class="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
          title="Search"
        >
          <svg class="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>

      <!-- Online Status -->
      <div v-show="!collapsed" class="flex-shrink-0 px-4 py-2">
        <div class="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span class="font-medium">{{ onlineUsersCount }} users online</span>
        </div>
      </div>

      <!-- Chat Lists Container (Scrollable) -->
      <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <!-- Group Chats Section -->
        <div class="px-2 py-3">
          <!-- Section Header -->
          <div v-show="!collapsed" class="flex items-center justify-between px-3 mb-3">
            <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Groups
            </h3>
            <span class="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium">
              {{ filteredGroups.length }}
            </span>
          </div>

          <!-- Group Chat Items -->
          <div class="space-y-1">
            <div
              v-for="group in filteredGroups"
              :key="group?.id || group?.name"
              @click="selectChat(group, false)"
              :class="[
                'flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group',
                collapsed ? 'justify-center' : '',
                currentChatId === group.id
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              ]"
            >
              <!-- Group Avatar -->
              <div
                :class="[
                  'flex-shrink-0 rounded-xl flex items-center justify-center text-white font-bold shadow-sm',
                  collapsed ? 'w-8 h-8 text-sm' : 'w-10 h-10',
                  currentChatId === group.id
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                    : 'bg-gradient-to-br from-gray-400 to-gray-600'
                ]"
              >
                {{ getGroupInitials(group.name) }}
              </div>

              <!-- Group Info -->
              <div v-show="!collapsed" class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {{ group.name }}
                  </p>
                  <div class="flex items-center gap-2">
                    <span v-if="group.lastMessage" class="text-xs text-gray-400">
                      {{ formatTime(group.lastMessage.timestamp) }}
                    </span>
                    <span v-if="getGroupUnreadCount(group.id)" class="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full min-w-5 text-center">
                      {{ getGroupUnreadCount(group.id) }}
                    </span>
                  </div>
                </div>

                <p v-if="group.lastMessage" class="text-xs text-gray-500 dark:text-gray-400 truncate">
                  <span class="font-medium">{{ group.lastMessage.senderName }}:</span>
                  {{ group.lastMessage.text }}
                </p>
                <p v-else class="text-xs text-gray-400 dark:text-gray-500 truncate">
                  {{ group.description || 'No messages yet' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Private Chats Section -->
        <div class="px-2 py-3 border-t border-gray-100 dark:border-gray-700">
          <!-- Section Header -->
          <div v-show="!collapsed" class="flex items-center justify-between px-3 mb-3">
            <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Private
            </h3>
            <span class="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium">
              {{ filteredUsers.length }}
            </span>
          </div>

          <!-- Private Chat Items -->
          <div class="space-y-1">
            <div
              v-for="user in filteredUsers"
              :key="user?.id || user?.email"
              @click="selectChat(user, true)"
              :class="[
                'flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group',
                collapsed ? 'justify-center' : '',
                currentChatId === generateChatId(user.id)
                  ? 'bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              ]"
            >
              <!-- User Avatar with Online Indicator -->
              <div class="relative flex-shrink-0">
                <div
                  :class="[
                    'rounded-xl flex items-center justify-center text-white font-bold shadow-sm',
                    collapsed ? 'w-8 h-8 text-sm' : 'w-10 h-10',
                    currentChatId === generateChatId(user.id)
                      ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                      : getUserOnlineStatus(user.id)
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                        : 'bg-gradient-to-br from-gray-400 to-gray-600'
                  ]"
                >
                  {{ getUserInitials(user) }}
                </div>
                <div v-if="getUserOnlineStatus(user.id)" :class="[
                  'absolute bg-green-500 rounded-full border-2 border-white dark:border-gray-800',
                  collapsed ? '-bottom-0.5 -right-0.5 w-2.5 h-2.5' : '-bottom-1 -right-1 w-3 h-3'
                ]"></div>
              </div>

              <!-- User Info -->
              <div v-show="!collapsed" class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex items-center gap-2">
                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {{ user.displayName || 'Unknown User' }}
                    </p>
                    <span v-if="getUserOnlineStatus(user.id)" class="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span v-if="user.lastMessage" class="text-xs text-gray-400">
                      {{ formatTime(user.lastMessage.timestamp) }}
                    </span>
                    <span v-if="getPrivateUnreadCount(user.id)" class="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full min-w-5 text-center">
                      {{ getPrivateUnreadCount(user.id) }}
                    </span>
                  </div>
                </div>

                <p v-if="user.lastMessage" class="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {{ user.lastMessage.text }}
                </p>
                <p v-else class="text-xs text-gray-400 dark:text-gray-500 truncate">
                  {{ user.email || 'No messages yet' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- User Profile Section (Bottom) -->
      <div class="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
        <div :class="['flex items-center gap-3', collapsed ? 'justify-center' : '']">
          <!-- Current User Avatar -->
          <div class="relative">
            <div :class="[
              'bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-sm',
              collapsed ? 'w-8 h-8 text-sm' : 'w-10 h-10'
            ]">
              {{ currentUserInitials }}
            </div>
            <div :class="[
              'absolute bg-green-500 rounded-full border-2 border-white dark:border-gray-800',
              collapsed ? '-bottom-0.5 -right-0.5 w-2.5 h-2.5' : '-bottom-1 -right-1 w-3 h-3'
            ]"></div>
          </div>

          <!-- User Info and Actions -->
          <div v-show="!collapsed" class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
              {{ currentUser?.displayName || 'Guest User' }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
              {{ getUserOnlineStatus(currentUser?.uid) ? 'Online' : 'Offline' }}
            </p>
          </div>

          <!-- Logout Button -->
          <button
            @click="logout"
            :class="[
              'flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group',
              collapsed ? 'w-8 h-8' : 'w-8 h-8'
            ]"
            :title="collapsed ? 'Sign out' : 'Sign out'"
          >
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { auth, db } from "@/services/firebase";
import { ref as dbRef, onValue } from "firebase/database";
import { signOut } from "firebase/auth";

export default {
  name: "ResponsiveSidebar",
  props: { 
    currentChatId: String 
  },
  emits: ["select-chat"],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

    // Data
    const groups = ref([]);
    const users = ref([]);
    const searchQuery = ref("");
    const onlineUsers = ref(new Set());
    const unreadCounts = ref({});

    // UI State
    const collapsed = ref(false);
    const tempExpandTimeout = ref(null);

    // Computed
    const currentUser = computed(() => store.state.user);
    const currentUserInitials = computed(() => {
      if (!currentUser.value?.displayName) return "U";
      return currentUser.value.displayName
        .split(" ")
        .map(n => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
    });

    const onlineUsersCount = computed(() => onlineUsers.value.size);

    const filteredGroups = computed(() => {
      if (!searchQuery.value) return groups.value;
      const query = searchQuery.value.toLowerCase();
      return groups.value.filter(group => 
        group.name?.toLowerCase().includes(query) ||
        group.description?.toLowerCase().includes(query)
      );
    });

    const filteredUsers = computed(() => {
      const filtered = users.value.filter(user => 
        user?.id && currentUser.value?.uid && user.id !== currentUser.value.uid
      );

      if (!searchQuery.value) return filtered;
      
      const query = searchQuery.value.toLowerCase();
      return filtered.filter(user =>
        user.displayName?.toLowerCase().includes(query) ||
        user.email?.toLowerCase().includes(query)
      );
    });

    // Helper Functions
    const getGroupInitials = (name) => {
      if (!name) return "G";
      return name.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
    };

    const getUserInitials = (user) => {
      if (!user?.displayName) return "U";
      return user.displayName
        .split(" ")
        .map(n => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
    };

    const generateChatId = (otherUserId) => {
      if (!currentUser.value?.uid || !otherUserId) return null;
      const ids = [currentUser.value.uid, otherUserId].sort();
      return `${ids[0]}_${ids[1]}`;
    };

    const getUserOnlineStatus = (userId) => {
      return onlineUsers.value.has(userId);
    };

    const getGroupUnreadCount = (groupId) => {
      return unreadCounts.value[`group_${groupId}`] || 0;
    };

    const getPrivateUnreadCount = (userId) => {
      const chatId = generateChatId(userId);
      return unreadCounts.value[`private_${chatId}`] || 0;
    };

    const formatTime = (timestamp) => {
      if (!timestamp) return '';
      const date = new Date(timestamp);
      const now = new Date();
      const diff = now - date;
      
      if (diff < 24 * 60 * 60 * 1000) { // Less than 24 hours
        return date.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        });
      } else {
        return date.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        });
      }
    };

    // Actions
    const selectChat = (chat, isPrivate) => {
      const chatData = isPrivate ? {
        ...chat,
        type: 'private',
        participantId: chat.id,
        id: generateChatId(chat.id)
      } : {
        ...chat,
        type: 'group',
        id: chat.id
      };

      emit('select-chat', chatData);
    };

    const logout = async () => {
      try {
        await signOut(auth);
        router.push("/");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    // UI Controls
    const toggleCollapse = () => {
      collapsed.value = !collapsed.value;
      clearTimeout(tempExpandTimeout.value);
    };

    const expandTemporarily = () => {
      if (!collapsed.value) return;
      collapsed.value = false;
      clearTimeout(tempExpandTimeout.value);
      tempExpandTimeout.value = setTimeout(() => {
        collapsed.value = true;
      }, 5000);
    };

    // Lifecycle
    onMounted(() => {
      // Listen to groups
      const groupsRef = dbRef(db, "groups");
      onValue(groupsRef, (snapshot) => {
        const data = snapshot.val() || {};
        groups.value = Object.entries(data).map(([id, group]) => ({
          id,
          ...group
        }));
      });

      // Listen to users
      const usersRef = dbRef(db, "users");
      onValue(usersRef, (snapshot) => {
        const data = snapshot.val() || {};
        users.value = Object.entries(data).map(([id, user]) => ({
          id,
          displayName: user.displayName || "Unknown",
          email: user.email || "No email",
          ...user
        }));
      });

      // Listen to online users
      const onlineRef = dbRef(db, "presence");
      onValue(onlineRef, (snapshot) => {
        const data = snapshot.val() || {};
        onlineUsers.value = new Set(
          Object.keys(data).filter(userId => data[userId]?.online)
        );
      });

      // Listen to unread counts
      const unreadRef = dbRef(db, "unreadCounts");
      onValue(unreadRef, (snapshot) => {
        unreadCounts.value = snapshot.val() || {};
      });
    });

    onUnmounted(() => {
      clearTimeout(tempExpandTimeout.value);
    });

    return {
      // Data
      groups,
      users,
      searchQuery,
      currentUser,
      currentUserInitials,
      onlineUsersCount,
      filteredGroups,
      filteredUsers,

      // UI State
      collapsed,

      // Helper Functions
      getGroupInitials,
      getUserInitials,
      generateChatId,
      getUserOnlineStatus,
      getGroupUnreadCount,
      getPrivateUnreadCount,
      formatTime,

      // Actions
      selectChat,
      logout,
      toggleCollapse,
      expandTemporarily
    };
  }
};
</script>

<style scoped>
/* Custom scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thumb-gray-300 {
  scrollbar-color: rgb(209 213 219) transparent;
}

.dark .scrollbar-thumb-gray-600 {
  scrollbar-color: rgb(75 85 99) transparent;
}

.scrollbar-track-transparent {
  scrollbar-track-color: transparent;
}

/* Webkit scrollbar styling */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgb(209 213 219);
  border-radius: 2px;
}

.dark .scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgb(75 85 99);
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgb(156 163 175);
}

.dark .scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgb(107 114 128);
}
</style>
