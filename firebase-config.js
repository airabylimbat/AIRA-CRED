import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {

  apiKey: "ISI_DARI_FIREBASE",
  authDomain: "ISI_DARI_FIREBASE",
  projectId: "aira-cred",
  storageBucket: "ISI_DARI_FIREBASE",
  messagingSenderId: "ISI_DARI_FIREBASE",
  appId: "ISI_DARI_FIREBASE"

};

const app = initializeApp(firebaseConfig);

export { app };
