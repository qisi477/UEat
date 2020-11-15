import React, { Component, createContext } from "react";
import { withRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import data from './Data';

export const DatabaseContext = createContext();

class DatabaseProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { restaurants: data, user: null };
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);

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
        firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            alert(error.message);
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
                this.props.history.push("/");
            }
        });
    }

    signOut = () => {
        firebase.auth().signOut();
        this.setState({ user: null });
    }

    render() {
        return (
            <DatabaseContext.Provider value={{
                    ...this.state,
                    signIn: this.signIn,
                    signOut: this.signOut
                }}>
                {this.props.children}
            </DatabaseContext.Provider>
        );
    }
}

export default withRouter(DatabaseProvider);