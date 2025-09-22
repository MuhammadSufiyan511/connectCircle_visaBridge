import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./services/firebase";
import { ref as dbRef, set, onDisconnect } from "firebase/database";

let appInstance = null;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userData = {
      uid: user.uid,
      displayName: user.displayName || user.email.split("@")[0],
      email: user.email,
      lastSeen: Date.now()
    };
    store.commit("setUser", userData);
    // ensure user exists in DB
    await set(dbRef(db, `users/${user.uid}`), userData);
    // presence: basic online indicator
    const statusRef = dbRef(db, `status/${user.uid}`);
    await set(statusRef, { online: true, lastSeen: Date.now() });
    onDisconnect(statusRef).set({ online: false, lastSeen: Date.now() });
  } else {
    store.commit("clearUser");
  }

  if (!appInstance) {
    appInstance = createApp(App);
    appInstance.use(store);
    appInstance.use(router);
    appInstance.mount("#app");
  }
});