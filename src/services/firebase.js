import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuXi307VGMJt6BltX7G_ab3_sG_T2YJxc",

  authDomain: "gb-reactapp.firebaseapp.com",

  databaseURL:
    "https://gb-reactapp-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "gb-reactapp",

  storageBucket: "gb-reactapp.appspot.com",

  messagingSenderId: "516905096219",

  appId: "1:516905096219:web:24c7f51695511b9cb654be",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export const auth = firebase.auth();

export const profileRef = db.ref("profile");

export const chatsRef = db.ref("chats");

export const messagesRef = db.ref("messages");
