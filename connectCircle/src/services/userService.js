import { ref, set } from "firebase/database";
import { db } from "../firebase/config";

// Save user profile
export const createUserProfile = (user) => {
  return set(ref(db, "users/" + user.uid), {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    profilePic: user.photoURL || null,
  });
};
