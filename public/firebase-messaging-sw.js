/* global importScripts, firebase */
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyBnrOfCpXWHz7jAmjcT-2_aBbThwi72daU",
  authDomain: "sanaa-kayum.firebaseapp.com",
  databaseURL: "https://sanaa-kayum.firebaseio.com",
  projectId: "sanaa-kayum",
  storageBucket: "sanaa-kayum.appspot.com",
  messagingSenderId: "259686125415",
  appId: "1:259686125415:web:b96d5c9b960186456e69c2",
  measurementId: "G-XWFYS9HF08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.messaging();

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({vapidKey: 'BJLqmhAST4h-mAkft88skiu_7kXyS1QpjhEErrxrbQBgd66NfZk9YYgxdvpMPRzIxfXq-C0nDlnFFsnf3Rq2MSw'}).then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No registration token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving registration token. ', err);
  setTokenSentToServer(false);
});

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});