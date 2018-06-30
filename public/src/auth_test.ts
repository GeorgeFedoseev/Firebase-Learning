import * as firebase from 'firebase'
import firebaseApp from './firebase'
require("./style.css");


const authButton = document.getElementById("auth-button");
const logoutButton = document.getElementById("logout-button");

authButton.addEventListener("click", function(){
    console.log("click");
    signInWithGoogle();
});

logoutButton.addEventListener("click", function(){
    console.log("logout");
    firebaseApp.auth().signOut().then(() => {
        console.log("signed out");
    }).catch((err) => {
        console.log("error signing out: ", err);
    })
    
}); 


// firebase.auth().onAuthStateChanged(user => {
//     window.user = user;
// });

console.log(0);
console.log(firebaseApp);

firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("User signed in", user)
        authButton.hidden = true;
        logoutButton.hidden = false;
    } else {
        // No user is signed in.
        console.log("No user signed in")
        authButton.hidden = false;
        logoutButton.hidden = true;
    }
});

console.log("Firebase current user: ", firebaseApp.auth().currentUser);


function signInWithGoogle(){

    const provider = new firebase.auth.GoogleAuthProvider();   

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

