// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDx-slv_OYRkdzDOs93C5JBu85xdqXrh30",
    authDomain: "test-hmc-orders-v2.firebaseapp.com",
    databaseURL: "https://test-hmc-orders-v2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-hmc-orders-v2",
    storageBucket: "test-hmc-orders-v2.appspot.com",
    messagingSenderId: "300717607567",
    appId: "1:300717607567:web:7811971a4e5e8b27e73efa",
    measurementId: "G-CWF3W858R0"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.notificationTitle;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });