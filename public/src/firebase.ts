import * as firebase from 'firebase'



var config = {
    apiKey: "AIzaSyBOtDUDnULDpAuZnMWvWlslXzEJh0kiHjo",
    authDomain: "leaderboard-23.firebaseapp.com",
    databaseURL: "https://leaderboard-23.firebaseio.com",
    projectId: "leaderboard-23",
    storageBucket: "leaderboard-23.appspot.com",
    messagingSenderId: "65676195855"
  };
  
  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();