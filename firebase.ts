import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const firebaseApp = initializeApp({
  apiKey: Constants.expoConfig!.extra!.API_KEY,
  authDomain: Constants.expoConfig!.extra!.AUTH_DOMAIN,
  projectId: Constants.expoConfig!.extra!.PROJECT_ID,
  storageBucket: Constants.expoConfig!.extra!.STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig!.extra!.MESSAGING_SENDER_ID,
  appId: Constants.expoConfig!.extra!.APP_ID,
});

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
