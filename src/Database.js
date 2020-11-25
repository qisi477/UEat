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
            apiKey: "AIzaSyAzH_g64YiTVM_PgyyRWv_ysyx8QhGwVJA",
            authDomain: "ueats-db53d.firebaseapp.com",
            databaseURL: "https://ueats-db53d.firebaseio.com",
            projectId: "ueats-db53d",
            storageBucket: "ueats-db53d.appspot.com",
            messagingSenderId: "664301657031",
            appId: "1:664301657031:web:af5ccf0845196e8a0f57e2",
            measurementId: "G-TDG42VV6HG"
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

    signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            alert(error.message);
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
                this.props.history.push("/");
            }
        });
    }

    render() {
        return (
            <DatabaseContext.Provider value={{
                ...this.state,
                signIn: this.signIn,
                signOut: this.signOut,
                signUp: this.signUp
            }}>
                {this.props.children}
            </DatabaseContext.Provider>
        );
    }
}

export default withRouter(DatabaseProvider);