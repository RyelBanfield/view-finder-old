import "dotenv/config";

const API_KEY = process.env.API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
const APP_ID = process.env.APP_ID;

export default {
  expo: {
    name: "View Finder",
    slug: "view-finder",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.ryelbanfield.viewfinder",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "28830311-dac8-4694-a3a7-696a490043c1",
      },
      API_KEY,
      AUTH_DOMAIN,
      PROJECT_ID,
      STORAGE_BUCKET,
      MESSAGING_SENDER_ID,
      APP_ID,
    },
    owner: "ryelbanfield",
  },
};
