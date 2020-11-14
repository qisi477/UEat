import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class Database {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyB6F6PHFhFdLa_WeVubFSpDHbItasCSXs0",
            authDomain: "ueat-c91c3.firebaseapp.com",
            databaseURL: "https://ueat-c91c3.firebaseio.com",
            projectId: "ueat-c91c3",
            storageBucket: "ueat-c91c3.appspot.com",
            messagingSenderId: "47834770750",
            appId: "1:47834770750:web:7b09cc2d075e3ebaa5106f",
            measurementId: "G-1DE1FNH67H"
        };
        firebase.initializeApp(firebaseConfig);
    }

    signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            alert(error.message)
        });
    }

    signOut = () => firebase.auth().signOut();

    getUser = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // ...
                return user;
            } else {
                // User is signed out.
                // ...
                return null;
            }
        });
    }

}

export default new Database();