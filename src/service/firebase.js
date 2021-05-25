import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRL9YXHWFxnPs0oUpMlX8aPr58xZGbZOA",
  authDomain: "business-card-maker-8b23f.firebaseapp.com",
  projectId: "business-card-maker-8b23f",
  dataBaseURL: "https://business-card-maker-8b23f-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
