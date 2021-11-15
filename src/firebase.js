import Firebase from "firebase"


const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyCebFxWoieCGIeY4n3LjY3BWN-mx8kHwqs",
  authDomain: "facebook-massangerclone.firebaseapp.com",
  projectId: "facebook-massangerclone",
  storageBucket: "facebook-massangerclone.appspot.com",
  messagingSenderId: "271888785942",
  appId: "1:271888785942:web:fdfe14bc068141754fcb37",
  measurementId: "G-YE2LZV9TGN"
  });

const db = firebaseApp.firestore();

export default db;

