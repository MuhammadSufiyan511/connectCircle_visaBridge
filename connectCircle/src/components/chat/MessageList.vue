<template>
  <div ref="scrollContainer" class="space-y-4 p-4 overflow-y-auto h-full custom-scrollbar">
    <!-- Date dividers -->
    <template v-for="(messagesGroup, date) in groupedMessages" :key="date">
      <!-- Date separator -->
      <div class="flex items-center justify-center my-6">
        <div class="flex-grow border-t border-gray-300/50 dark:border-gray-600/50"></div>
        <div class="mx-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-600/30 shadow-sm">
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-400">
            {{ formatDateSeparator(date) }}
          </span>
        </div>
        <div class="flex-grow border-t border-gray-300/50 dark:border-gray-600/50"></div>
      </div>

      <!-- Messages for this date -->
      <div class="space-y-3">
        <div
          v-for="(msg, index) in messagesGroup"
          :key="msg.id"
          :class="[
            'group relative',
            msg.senderId === currentUser?.uid ? 'flex justify-end' : 'flex justify-start'
          ]"
        >
          <!-- Message container -->
          <div 
            :class="[
              'relative max-w-25rem lg:max-w-lg xl:max-w-xl flex',
              msg.senderId === currentUser?.uid ? 'flex-row-reverse' : 'flex-row'
            ]"
          >
            <!-- Avatar (only show for others' messages and first in sequence) -->
            <div 
              v-if="msg.senderId !== currentUser?.uid && shouldShowAvatar(messagesGroup, index)"
              class="flex-shrink-0 mr-3"
            >
              <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                {{ getInitials(msg.senderName) }}
              </div>
            </div>

            <!-- Spacer for grouped messages -->
            <div 
              v-else-if="msg.senderId !== currentUser?.uid"
              class="flex-shrink-0 w-11 mr-0"
            ></div>

            <!-- Message bubble -->
            <div 
              :class="[
                'relative px-4 py-3 rounded-2xl backdrop-blur-sm border shadow-lg transform transition-all duration-300 hover:scale-105 group-hover:shadow-xl',
                msg.senderId === currentUser?.uid
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-400/30 rounded-br-md'
                  : 'bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white border-white/30 dark:border-gray-600/30 rounded-bl-md',
                getMessageSpacing(messagesGroup, index)
              ]"
            >
              <!-- Sender name (only for others and first in sequence) -->
              <div 
                v-if="msg.senderId !== currentUser?.uid && shouldShowSenderName(messagesGroup, index)"
                class="mb-1"
              >
                <p class="text-xs font-bold text-gray-700 dark:text-gray-300">
                  {{ msg.senderName }}
                </p>
              </div>

              <!-- Message content -->
              <div class="space-y-2">
                <!-- Text content -->
                <p class="text-sm leading-relaxed whitespace-pre-wrap break-words">
                  {{ msg.text }}
                </p>

                <!-- Message metadata -->
                <div 
                  :class="[
                    'flex items-center justify-between text-xs',
                    msg.senderId === currentUser?.uid
                      ? 'text-blue-100'
                      : 'text-gray-500 dark:text-gray-400'
                  ]"
                >
                  <span>{{ formatTime(msg.timestamp) }}</span>
                  
                  <!-- Message status for sent messages -->
                  <div 
                    v-if="msg.senderId === currentUser?.uid"
                    class="flex items-center space-x-1 ml-2"
                  >
                    <!-- Delivered/Read status -->
                    <svg 
                      v-if="msg.status === 'read'"
                      class="w-4 h-4 text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M19.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-1-1a1 1 0 111.414-1.414L18 6.414l1.293-1.121a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <svg 
                      v-else-if="msg.status === 'delivered'"
                      class="w-4 h-4 text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <svg 
                      v-else
                      class="w-4 h-4 text-blue-200 animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Message tail -->
              <div 
                :class="[
                  'absolute top-0 w-4 h-4',
                  msg.senderId === currentUser?.uid
                    ? '-right-2 bg-gradient-to-br from-blue-500 to-indigo-600 transform rotate-45'
                    : '-left-2 bg-white/70 dark:bg-gray-800/70 border-l border-t border-white/30 dark:border-gray-600/30 transform rotate-45'
                ]"
                v-if="shouldShowTail(messagesGroup, index)"
              ></div>
            </div>
          </div>

          <!-- Message actions (show on hover) -->
          <div 
            :class="[
              'absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1',
              msg.senderId === currentUser?.uid ? '-left-12' : '-right-12'
            ]"
          >
            <!-- Reply button -->
            <button 
              @click="$emit('reply-message', msg)"
              class="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-600/30 transition-colors duration-200"
              title="Reply"
            >
              <svg class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </button>

            <!-- React button -->
            <button 
              @click="$emit('react-message', msg)"
              class="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-600/30 transition-colors duration-200"
              title="React"
            >
              <svg class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <!-- More options (for own messages) -->
            <button 
              v-if="msg.senderId === currentUser?.uid"
              @click="$emit('message-options', msg)"
              class="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-600/30 transition-colors duration-200"
              title="More options"
            >
              <svg class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </template>

    <!-- Empty state -->
    <div v-if="messages.length === 0" class="text-center py-12">
      <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
        No messages yet
      </h3>
      <p class="text-gray-500 dark:text-gray-400">
        Start the conversation by sending a message!
      </p>
    </div>

    <!-- Typing indicator -->
    <div v-if="someoneIsTyping" class="flex justify-start">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
          {{ getInitials(typingUser.name) }}
        </div>
        <div class="px-4 py-3 bg-white/70 dark:bg-gray-800/70 rounded-2xl rounded-bl-md backdrop-blur-sm border border-white/30 dark:border-gray-600/30 shadow-lg">
          <div class="flex items-center space-x-1">
            <span class="text-sm text-gray-600 dark:text-gray-400">{{ typingUser.name }} is typing</span>
            <div class="flex space-x-1">
              <div class="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div class="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, nextTick } from 'vue';

export default {
  name: "MessageList",
  props: {
    messages: { type: Array, required: true },
    currentUser: { type: Object, required: true },
    typingUsers: { type: Array, default: () => [] }
  },
  emits: ['reply-message', 'react-message', 'message-options'],
  setup(props) {
    const scrollContainer = ref(null);

    // Group messages by date
    const groupedMessages = computed(() => {
      const groups = {};
      
      props.messages.forEach(msg => {
        if (!msg.timestamp) return;
        
        const date = new Date(msg.timestamp);
        const dateKey = date.toDateString();
        
        if (!groups[dateKey]) {
          groups[dateKey] = [];
        }
        groups[dateKey].push(msg);
      });
      
      return groups;
    });

    // Scroll to bottom when messages change
    const scrollToBottom = () => {
      nextTick(() => {
        const el = scrollContainer.value;
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      });
    };

    watch(() => props.messages.length, (n, o) => {
      // Only auto-scroll when new messages are added
      if (n !== o) scrollToBottom();
    });

    // Check if someone is typing
    const someoneIsTyping = computed(() => {
      return props.typingUsers.length > 0;
    });

    const typingUser = computed(() => {
      return props.typingUsers[0] || { name: 'Someone' };
    });

    return {
      groupedMessages,
      someoneIsTyping,
      typingUser,
      scrollContainer
    };
  },
  methods: {
    formatTime(ts) {
      if (!ts) return "";
      
      const date = new Date(ts);
      if (isNaN(date.getTime())) return "";
      
      const now = new Date();
      const diffInHours = (now - date) / (1000 * 60 * 60);
      
      if (diffInHours < 24) {
        // Today - show time
        return date.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        });
      } else if (diffInHours < 48) {
        // Yesterday
        return `Yesterday ${date.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        })}`;
      } else {
        // Older - show date and time
        return date.toLocaleDateString([], {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      }
    },

    formatDateSeparator(dateString) {
      const date = new Date(dateString);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (date.toDateString() === today.toDateString()) {
        return 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
      } else {
        const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
        if (diffInDays < 7) {
          return date.toLocaleDateString([], { weekday: 'long' });
        } else {
          return date.toLocaleDateString([], { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
        }
      }
    },

    getInitials(name) {
      if (!name) return "U";
      return name.split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
    },

    shouldShowAvatar(messages, index) {
      if (index === 0) return true;
      
      const currentMsg = messages[index];
      const prevMsg = messages[index - 1];
      
      return currentMsg.senderId !== prevMsg.senderId;
    },

    shouldShowSenderName(messages, index) {
      return this.shouldShowAvatar(messages, index);
    },

    shouldShowTail(messages, index) {
      if (index === messages.length - 1) return true;
      
      const currentMsg = messages[index];
      const nextMsg = messages[index + 1];
      
      return currentMsg.senderId !== nextMsg.senderId;
    },

    getMessageSpacing(messages, index) {
      const currentMsg = messages[index];
      const prevMsg = messages[index - 1];
      const nextMsg = messages[index + 1];
      
      let classes = '';
      
      // Adjust spacing for grouped messages
      if (prevMsg && currentMsg.senderId === prevMsg.senderId) {
        classes += ' mt-1';
      }
      
      if (nextMsg && currentMsg.senderId === nextMsg.senderId) {
        classes += ' mb-1';
      }
      
      // Adjust border radius for grouped messages
      if (currentMsg.senderId === this.currentUser?.uid) {
        // Own messages (right side)
        if (prevMsg && currentMsg.senderId === prevMsg.senderId) {
          classes += ' rounded-tr-md';
        }
        if (nextMsg && currentMsg.senderId === nextMsg.senderId) {
          classes += ' rounded-br-md';
        }
      } else {
        // Other messages (left side)
        if (prevMsg && currentMsg.senderId === prevMsg.senderId) {
          classes += ' rounded-tl-md';
        }
        if (nextMsg && currentMsg.senderId === nextMsg.senderId) {
          classes += ' rounded-bl-md';
        }
      }
      
      return classes;
    }
  }
};
</script>

<style scoped>
/* Custom scrollbar (light) */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.4) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.4);
  border-radius: 9999px;
  border: 2px solid transparent; /* creates padding effect */
  background-clip: padding-box;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.6);
}

/* Dark mode */
.dark .custom-scrollbar {
  scrollbar-color: rgba(107, 114, 128, 0.5) transparent;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(107, 114, 128, 0.5);
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 114, 128, 0.75);
}

/* Smooth animations */
.group-hover\:opacity-100 {
  transition: opacity 0.2s ease-in-out;
}

/* Message bubble animations */
.transform.hover\:scale-105:hover {
  transform: scale(1.02);
}

/* Typing indicator animation */
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

/* Message status icons */
.w-4.h-4 {
  min-width: 1rem;
  min-height: 1rem;
}

/* Better text rendering */
.whitespace-pre-wrap {
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>