import { ref, push, set, onValue } from "firebase/database";
import { db } from "../firebase/config";

// Create a new group
export const createGroup = async (name, userId) => {
  const groupRef = push(ref(db, "groups"));
  await set(groupRef, {
    name,
    createdBy: userId,
    createdAt: Date.now(),
    members: { [userId]: true }
  });
  return groupRef.key;
};

// Fetch all groups (for Sidebar)
export const listenToGroups = (callback) => {
  const groupsRef = ref(db, "groups");
  onValue(groupsRef, (snapshot) => {
    callback(snapshot.val() || {});
  });
};
