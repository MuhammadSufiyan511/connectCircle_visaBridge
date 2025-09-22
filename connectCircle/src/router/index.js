// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase'; // adjust path if needed

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Hero',
    component: () => import("../views/Hero.vue")
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import("../views/Profile.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import("../views/Settings.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/auth/Register.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

/**
 * Wait for the first onAuthStateChanged callback so the router guard
 * won't run before Firebase finishes initializing.
 */
function waitForAuthInitialized() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

// Global guard: wait for Firebase auth to initialize and protect routes
router.beforeEach(async (to, from, next) => {
  // If route doesn't require auth, continue immediately
  if (!to.meta?.requiresAuth) return next();

  // Fast path: if Firebase already knows the user, allow
  if (auth.currentUser) return next();

  // Otherwise wait for Firebase to initialize and give us the user (or null)
  const user = await waitForAuthInitialized();

  if (user) {
    return next();
  }

  // Not authenticated: redirect to your Login route and keep intended destination
  return next({
    name: 'Login',
    query: { redirect: to.fullPath }
  });
});

export default router;
