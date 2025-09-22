<template>
  <div class="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Desktop Sidebar (visible md+) -->
    <div class="hidden md:flex relative z-10 w-70 border-r border-white/20 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-2xl">
      <div class="h-full flex flex-col">
        <div class="flex-1 overflow-hidden">
          <Sidebar
            :currentChatId="currentChat?.id"
            @select-chat="setCurrentChat"
            class="h-full"
          />
        </div>
      </div>
    </div>

    <!-- Mobile hamburger button -->
    <button
      class="md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center"
      @click="openMobileOverlay"
      aria-label="Open sidebar"
    >
      <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Mobile overlay (backdrop) -->
    <transition name="fade">
      <div
        v-if="mobileOverlay"
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        @click="closeMobileOverlay"
      ></div>
    </transition>

    <!-- Mobile sidebar sliding panel -->
    <transition name="slide-left">
      <aside
        v-if="mobileOverlay"
        class="fixed inset-y-0 left-0 z-50 w-80 bg-white/95 dark:bg-gray-900/95 shadow-2xl md:hidden"
      >
        <div class="p-4 border-b border-white/20 flex items-center justify-between">
          
          <button @click="closeMobileOverlay" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="h-[calc(100vh-64px)] overflow-auto">
          <Sidebar
            :currentChatId="currentChat?.id"
            @select-chat="onMobileSelectChat"
            class="h-full"
          />
        </div>
      </aside>
    </transition>

    <!-- Main Content (Chat) -->
    <div class="flex-1 flex flex-col relative z-10">
      <ChatWindow
        class="flex-1"
        :currentChat="currentChat"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Sidebar from "../components/chat/Sidebar.vue";
import ChatWindow from "../components/chat/ChatWindow.vue";

export default {
  components: { Sidebar, ChatWindow },
  setup() {
    const currentChat = ref(null);
    const mobileOverlay = ref(false);

    const setCurrentChat = (chat) => {
      if (!chat || !chat.id) return;
      currentChat.value = chat;
    };

    // When user selects a chat from mobile sidebar, close overlay
    const onMobileSelectChat = (chat) => {
      setCurrentChat(chat);
      mobileOverlay.value = false;
    };

    const openMobileOverlay = () => {
      mobileOverlay.value = true;
    };

    const closeMobileOverlay = () => {
      mobileOverlay.value = false;
    };

    // close overlay when resizing to desktop or pressing Escape
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        mobileOverlay.value = false;
      }
    };

    const handleKey = (e) => {
      if (e.key === "Escape") mobileOverlay.value = false;
      // Ctrl+K for focusing search (optional)
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const searchInput = document.querySelector('input[placeholder*="search" i]');
        if (searchInput) searchInput.focus();
      }
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      window.addEventListener("keydown", handleKey);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKey);
    });

    return {
      currentChat,
      setCurrentChat,
      mobileOverlay,
      openMobileOverlay,
      closeMobileOverlay,
      onMobileSelectChat
    };
  }
};
</script>

<style scoped>
/* transitions */
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }

.slide-left-enter-active {
  transition: transform .25s cubic-bezier(.2,.9,.2,1), opacity .25s;
}
.slide-left-leave-active {
  transition: transform .2s cubic-bezier(.2,.9,.2,1), opacity .2s;
}
.slide-left-enter-from { transform: translateX(-8%); opacity: 0; }
.slide-left-enter-to   { transform: translateX(0);  opacity: 1; }
.slide-left-leave-from { transform: translateX(0);  opacity: 1; }
.slide-left-leave-to   { transform: translateX(-8%); opacity: 0; }
</style>
