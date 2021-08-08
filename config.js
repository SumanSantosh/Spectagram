import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBRPxVOu2rNM2QmTqHsEHs8_Hbyk1v-uVg",
    authDomain: "story-telling-app-eb3c0.firebaseapp.com",
    databaseURL: "https://story-telling-app-eb3c0-default-rtdb.firebaseio.com",
    projectId: "story-telling-app-eb3c0",
    storageBucket: "story-telling-app-eb3c0.appspot.com",
    messagingSenderId: "326685126855",
    appId: "1:326685126855:web:57bc4c2dbf2cc856e60ee2"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 

export default firebase.database()