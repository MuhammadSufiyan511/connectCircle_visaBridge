<!--c/components/ChatWindow.vue -->
<template>
  <div class="flex flex-col h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-tl-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
    <!-- Chat Header -->
    <div class="flex-shrink-0 p-4 sm:p-6 border-b border-white/20 dark:border-gray-600/30 bg-gradient-to-r from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-700/10 backdrop-blur-sm">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3 sm:space-x-4 min-w-0">
          <!-- Chat Avatar -->
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-white/20 dark:ring-gray-700/20">
            {{ getChatInitials() }}
          </div>
          
          <div class="min-w-0 flex-1">
            <h2 class="text-lg sm:text-xl font-bold text-gray-800 dark:text-white truncate">
              {{ getChatName() }}
            </h2>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
              <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                {{ getChatStatus() }}
              </p>
            </div>
          </div>
        </div>

        <!-- Chat actions -->
        <div class="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          <button class="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button class="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Messages Container -->
    <div ref="listWrap" class="flex-1 overflow-y-auto px-2 sm:px-4 py-2 min-h-0">
      <MessageList 
        :messages="messages" 
        :currentUser="currentUser"
        :typingUsers="typingUsers"
        @reply-message="handleReplyMessage"
        @react-message="handleReactMessage"
        @message-options="handleMessageOptions"
      />
    </div>

    <!-- Typing indicator for current user -->
    <Transition 
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div v-if="isTyping" class="px-4 sm:px-6 py-2 text-xs text-gray-500 dark:text-gray-400">
        <div class="flex items-center space-x-2">
          <div class="flex space-x-1">
            <div class="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          </div>
          <span>You are typing...</span>
        </div>
      </div>
    </Transition>

    <!-- Message Input -->
    <div class="flex-shrink-0 border-t border-white/20 dark:border-gray-600/30 bg-gradient-to-r from-white/20 to-white/10 dark:from-gray-800/20 dark:to-gray-700/10 backdrop-blur-sm">
      <div class="p-4 sm:p-6">
        <div class="flex items-end space-x-2 sm:space-x-4">
        <!-- Message input container -->
        <div class="flex-1">
          <div class="relative">
            <textarea
              v-model="newMessage"
              @keydown="handleKeyDown"
              @input="handleTyping"
              :disabled="sending"
              ref="messageInput"
              rows="1"
              class="w-full px-3 sm:px-4 py-3 pr-12 sm:pr-16 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-white/40 dark:border-gray-600/40 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 disabled:opacity-50 resize-none  shadow-lg"
              placeholder="Type your message..."
              style="min-height: 48px; max-height: 100px;"
            />
            
            <!-- Send button -->
            <button
              @click="sendMessage"
              :disabled="sending || !newMessage.trim()"
              class="absolute right-2 bottom-2 p-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation"
            >
              <svg v-if="sending" class="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <svg v-else class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
          
          <!-- Character count -->
          <Transition 
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 transform translate-y-1"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform -translate-y-1"
          >
            <div v-if="newMessage.length > 0" class="mt-2 text-xs text-right">
              <span 
                :class="[
                  newMessage.length > 1800 ? 'text-red-500 dark:text-red-400' : 
                  newMessage.length > 1500 ? 'text-yellow-500 dark:text-yellow-400' : 
                  'text-gray-500 dark:text-gray-400'
                ]"
              >
                {{ newMessage.length }}/2000
              </span>
            </div>
          </Transition>
        </div>

        <!-- Additional actions - Hidden on mobile, shown on larger screens -->
        <div class="hidden sm:flex items-center space-x-2">
          <!-- Emoji picker -->
          <button class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-yellow-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>

          <!-- File attachment -->
          <button class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation group">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile action menu -->
        <div class="sm:hidden">
          <button @click="toggleMobileActions" class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation">
            <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile actions popup -->
        <Transition 
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 transform scale-95 translate-y-2"
          enter-to-class="opacity-100 transform scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 transform scale-100 translate-y-0"
          leave-to-class="opacity-0 transform scale-95 translate-y-2"
        >
          <div v-if="showMobileActions" class="sm:hidden mt-3 p-3 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
            <div class="flex items-center justify-around">
              <button class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation flex flex-col items-center space-y-1">
                <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-xs text-gray-600 dark:text-gray-400">Emoji</span>
              </button>
              <button class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation flex flex-col items-center space-y-1">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                </svg>
                <span class="text-xs text-gray-600 dark:text-gray-400">File</span>
              </button>
              <button class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation flex flex-col items-center space-y-1">
                <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-xs text-gray-600 dark:text-gray-400">Camera</span>
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Connection status -->
    <Transition 
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 transform -translate-y-full scale-95"
      enter-to-class="opacity-100 transform translate-y-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform translate-y-0 scale-100"
      leave-to-class="opacity-0 transform -translate-y-full scale-95"
    >
      <div v-if="!isConnected" class="absolute top-20 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-500/90 backdrop-blur-sm text-white rounded-lg shadow-lg border border-red-400/20 z-50">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          <span class="text-sm font-medium">Reconnecting...</span>
        </div>
      </div>
    </Transition>
  </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, computed } from "vue";
import MessageList from "./MessageList.vue";
import { auth, db } from "../../services/firebase";
import {
  ref as dbRef,
  query,
  orderByChild,
  onChildAdded,
  onChildRemoved,
  off,
  push,
  set,
  remove,
  serverTimestamp,
  onValue,
  limitToLast,
  onDisconnect
} from "firebase/database";

export default {
  name: "ChatWindow",
  components: { MessageList },
  props: {
    currentChat: { type: Object, default: null },
  },
  setup(props) {
    const messages = ref([]);
    const newMessage = ref("");
    const listWrap = ref(null);
    const messageInput = ref(null);
    const currentUser = ref(auth.currentUser);
    const sending = ref(false);
    const isTyping = ref(false);
    const typingUsers = ref([]);
    const isConnected = ref(true);
    const messagesListener = ref(null);
    const typingListener = ref(null);
    const showMobileActions = ref(false);
    
    // Typing timeout
    let typingTimeout = null;

    // Compute chat type and room ID
    const chatRoomId = computed(() => {
      if (!props.currentChat) return "group_general";
      
      if (props.currentChat.isPrivate) {
        // For private chats, use the generated ID
        return props.currentChat.id;
      } else {
        // For group chats, use the group ID
        return props.currentChat.id;
      }
    });

    // Helper functions for chat info

    const isPrivateChat = (chat = props.currentChat) => {
  if (!chat) return false;
  // accept either shape: { type: 'private' } or { isPrivate: true }
  return chat.type === "private" || chat.isPrivate === true;
};
   const getChatName = () => {
  if (!props.currentChat) return "General Chat";

  if (isPrivateChat()) {
    // try multiple possible fields that may contain the user's name
    return (
      props.currentChat.displayName ||
      props.currentChat.participantName ||
      props.currentChat.name ||
      "Private Chat"
    );
  } else {
    return props.currentChat.name || props.currentChat.displayName || "Group Chat";
  }
};
    const getChatInitials = () => {
      const name = getChatName();
      return name.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
    };

    const getChatStatus = () => {
      if (!props.currentChat) return "Select a chat to start messaging";
      
      if (props.currentChat.isPrivate) {
        return "Online"; // You can implement actual online status later
      } else {
        return `${messages.value.length} messages`;
      }
    };

    const toggleMobileActions = () => {
      showMobileActions.value = !showMobileActions.value;
    };

    // Real-time message listener using onChildAdded for instant updates
    const attachQueryListener = (roomId) => {
      // Clean up previous listeners
      if (messagesListener.value) {
        messagesListener.value();
        messagesListener.value = null;
      }
      
      // Clear messages
      messages.value = [];

      try {
        console.log(`[attachQueryListener] Setting up listener for room: ${roomId}`);
        
        // First, load existing messages
        const messagesRef = dbRef(db, `messages/${roomId}`);
        const messagesQuery = query(messagesRef, orderByChild("timestamp"), limitToLast(100));
        
        // Load initial messages
        onValue(messagesQuery, (snapshot) => {
          const data = snapshot.val();
          if (!data) {
            messages.value = [];
            return;
          }

          // Convert to array and sort
          const messageArray = Object.entries(data)
            .map(([key, value]) => ({
              id: key,
              ...value
            }))
            .filter(msg => msg.timestamp && typeof msg.timestamp === 'number')
            .sort((a, b) => a.timestamp - b.timestamp);

          messages.value = messageArray;
          
          // Scroll to bottom
          nextTick(scrollToBottom);
        }, { onlyOnce: true });

        // Then listen for new messages in real-time
        messagesListener.value = onChildAdded(messagesQuery, (snapshot) => {
          const msg = { id: snapshot.key, ...snapshot.val() };
          
          // Only add if it's not already in the array (to avoid duplicates)
          if (!messages.value.find(m => m.id === msg.id)) {
            messages.value.push(msg);
            messages.value.sort((a, b) => a.timestamp - b.timestamp);
            
            // Scroll to bottom for new messages
            nextTick(scrollToBottom);
          }
        });

        // Listen for typing indicators
        setupTypingListener(roomId);

      } catch (error) {
        console.error("[attachQueryListener] Setup failed:", error);
        isConnected.value = false;
      }
    };

    // Setup typing indicator listener
    const setupTypingListener = (roomId) => {
      if (typingListener.value) {
        typingListener.value();
      }

      const typingRef = dbRef(db, `typing/${roomId}`);
      typingListener.value = onValue(typingRef, (snapshot) => {
        const data = snapshot.val() || {};
        typingUsers.value = Object.entries(data)
          .filter(([userId, info]) => userId !== currentUser.value?.uid && info.isTyping)
          .map(([userId, info]) => ({ id: userId, name: info.name }));
      });
    };

    // Handle typing indicators
    const handleTyping = () => {
      if (!currentUser.value || !chatRoomId.value) return;

      const typingRef = dbRef(db, `typing/${chatRoomId.value}/${currentUser.value.uid}`);
      
      // Set typing status
      set(typingRef, {
        isTyping: true,
        name: currentUser.value.displayName || "Anonymous",
        timestamp: Date.now()
      });

      // Clear previous timeout
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      // Set new timeout to clear typing status
      typingTimeout = setTimeout(() => {
        remove(typingRef);
        isTyping.value = false;
      }, 2000);

      isTyping.value = true;
    };

    // Send message function with immediate local update
    const sendMessage = async () => {
      const messageText = newMessage.value?.trim();
      if (!messageText || sending.value || messageText.length > 2000) return;

      const user = currentUser.value || auth.currentUser;
      if (!user) {
        console.error("No authenticated user");
        return;
      }

      sending.value = true;
      
      // Hide mobile actions
      showMobileActions.value = false;
      
      // Clear typing indicator
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
      const typingRef = dbRef(db, `typing/${chatRoomId.value}/${user.uid}`);
      remove(typingRef);
      isTyping.value = false;

      try {
        // Create message payload
        const payload = {
          text: messageText,
          senderId: user.uid,
          senderName: user.displayName || "Anonymous",
          timestamp: Date.now(),
          status: "sending" // Add status for better UX
        };

        const roomId = chatRoomId.value;
        const messagesRef = dbRef(db, `messages/${roomId}`);

        // Clear input immediately for better UX
        newMessage.value = "";

        // Send message to Firebase
        const newRef = push(messagesRef);
        await set(newRef, {
          ...payload,
          status: "sent",
          serverTimestamp: serverTimestamp()
        });
        
        console.log(`[sendMessage] Message sent to messages/${roomId}/${newRef.key}`);
        
        // Auto-scroll to bottom
        nextTick(scrollToBottom);
        
      } catch (error) {
        console.error("[sendMessage] Failed:", error);
        // Restore message text on failure
        newMessage.value = messageText;
        alert("Failed to send message. Please try again.");
        isConnected.value = false;
      } finally {
        sending.value = false;
      }
    };

    // Handle keyboard shortcuts
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    };

    // Scroll to bottom function
    const scrollToBottom = () => {
      if (listWrap.value) {
        listWrap.value.scrollTop = listWrap.value.scrollHeight;
      }
    };

    // Auto-resize textarea
    const autoResizeTextarea = () => {
      if (messageInput.value) {
        messageInput.value.style.height = 'auto';
        messageInput.value.style.height = Math.min(messageInput.value.scrollHeight, 120) + 'px';
      }
    };

    // Message action handlers
    const handleReplyMessage = (message) => {
      // Implement reply functionality
      newMessage.value = `@${message.senderName} `;
      messageInput.value?.focus();
    };

    const handleReactMessage = (message) => {
      // Implement reaction functionality
      console.log('React to message:', message);
    };

    const handleMessageOptions = (message) => {
      // Implement message options (edit, delete, etc.)
      console.log('Message options:', message);
    };

    // Watch for chat changes
    watch(
      () => chatRoomId.value,
      (newRoomId, oldRoomId) => {
        if (newRoomId !== oldRoomId) {
          console.log(`[ChatWindow] Switching from ${oldRoomId} to ${newRoomId}`);
          attachQueryListener(newRoomId);
        }
      },
      { immediate: true }
    );

    // Watch message input for auto-resize
    watch(newMessage, () => {
      nextTick(autoResizeTextarea);
    });

    // Setup auth listener
    onMounted(() => {
      currentUser.value = auth.currentUser;
      
      const unsubscribe = auth.onAuthStateChanged((user) => {
        currentUser.value = user;
        if (user) {
          isConnected.value = true;
        }
      });

      // Setup presence system
      if (currentUser.value) {
        const presenceRef = dbRef(db, `presence/${currentUser.value.uid}`);
        set(presenceRef, {
          online: true,
          lastSeen: serverTimestamp()
        });

        // Remove presence on disconnect
        onDisconnect(presenceRef).set({
          online: false,
          lastSeen: serverTimestamp()
        });
      }

      // Close mobile actions when clicking outside
      const handleClickOutside = (event) => {
        if (showMobileActions.value && !event.target.closest('.mobile-actions')) {
          showMobileActions.value = false;
        }
      };

      document.addEventListener('click', handleClickOutside);

      onBeforeUnmount(() => {
        unsubscribe();
        document.removeEventListener('click', handleClickOutside);
      });
    });

    // Cleanup
    onBeforeUnmount(() => {
      if (messagesListener.value) {
        messagesListener.value();
      }
      if (typingListener.value) {
        typingListener.value();
      }
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
      
      // Clear typing status on unmount
      if (currentUser.value && chatRoomId.value) {
        const typingRef = dbRef(db, `typing/${chatRoomId.value}/${currentUser.value.uid}`);
        remove(typingRef);
      }
    });

    return {
      messages,
      newMessage,
      currentUser,
      listWrap,
      messageInput,
      sending,
      isTyping,
      typingUsers,
      isConnected,
      showMobileActions,
      getChatName,
      getChatInitials,
      getChatStatus,
      toggleMobileActions,
      sendMessage,
      handleKeyDown,
      handleTyping,
      handleReplyMessage,
      handleReactMessage,
      handleMessageOptions,
      scrollToBottom
    };
  },
};
</script>


<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.5);
}

/* Auto-resize textarea */
textarea {
  transition: height 0.1s ease;
}

/* Typing animation */
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.animate-bounce {
  animation: bounce 1.4s infinite ease-in-out both;
}

.delay-100 {
  animation-delay: -1.32s;
}

.delay-200 {
  animation-delay: -1.1s;
}
</style>