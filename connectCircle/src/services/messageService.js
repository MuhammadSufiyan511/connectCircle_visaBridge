import { ref, push, set, onValue } from "firebase/database";
import { db } from "../firebase/config";

// Send a message
export const sendMessage = async (chatId, user, text) => {
  const msgRef = push(ref(db, "messages/" + chatId));
  await set(msgRef, {
    text,
    senderId: user.uid,
    senderName: user.displayName,
    timestamp: Date.now(),
  });
};

// Listen to messages in real time
export const listenToMessages = (chatId, callback) => {
  const msgRef = ref(db, "messages/" + chatId);
  onValue(msgRef, (snapshot) => {
    callback(snapshot.val() || {});
  });
};
