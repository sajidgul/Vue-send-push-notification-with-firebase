<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDx-slv_OYRkdzDOs93C5JBu85xdqXrh30",
  authDomain: "test-hmc-orders-v2.firebaseapp.com",
  databaseURL: "https://test-hmc-orders-v2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-hmc-orders-v2",
  storageBucket: "test-hmc-orders-v2.appspot.com",
  messagingSenderId: "300717607567",
  appId: "1:300717607567:web:7811971a4e5e8b27e73efa",
  measurementId: "G-CWF3W858R0"
};
const app = initializeApp(firebaseConfig);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
getToken(messaging, { vapidKey: 'BOcD_o39oZnai9qyMEFsqf9dXABietU5TdHOv8v9XdmYbrQAwpknshi1f58GJu9Qsl0teNrD4rRXCKbUjgBhzgM' }).then((currentToken) => {
  if (currentToken) {
    console.log('token is', currentToken);
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
