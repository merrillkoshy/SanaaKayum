import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem("fcm_token");
  },

  init: async function() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBnrOfCpXWHz7jAmjcT-2_aBbThwi72daU",
        authDomain: "sanaa-kayum.firebaseapp.com",
        databaseURL: "https://sanaa-kayum.firebaseio.com",
        projectId: "sanaa-kayum",
        storageBucket: "sanaa-kayum.appspot.com",
        messagingSenderId: "259686125415",
        appId: "1:259686125415:web:b96d5c9b960186456e69c2",
        measurementId: "G-XWFYS9HF08"
      });
    }

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false;
      }

      const messaging = firebase.messaging();
      await Notification.requestPermission();
      const token = await messaging.getToken();

      localforage.setItem("fcm_token", token);
    } catch (error) {
      console.error(error);
    }
  }
};

export { firebaseCloudMessaging };
