import React, { Component, createContext } from "react";
import { withRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const DatabaseContext = createContext();

class DatabaseProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [], 
            user: "",
            profile: ""
        };
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.signUp = this.signUp.bind(this);
        this.writeUserData = this.writeUserData.bind(this);

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

    async componentDidMount() {
        let cloudData = await firebase.database().ref().once('value').then();
        let data = [];
        for (var key in cloudData.val()) {
            data.push(cloudData.val()[key]);
        }
        this.setState({ restaurants: data });
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.user !== prevState.user) {
            if (this.state.user === "") {
                this.setState({ profile: "" });
            } else {
                let cloudData = await firebase.database().ref().once('value').then();
                this.setState({ profile: cloudData.val()[this.state.user.uid] });
            }
        }
        if (this.state.profile !== "" &&
            this.state.profile !== prevState.profile) {
                let cloudData = await firebase.database().ref().once('value').then();
                let data = [];
                for (var key in cloudData.val()) {
                    data.push(cloudData.val()[key]);
                }
                this.setState({ restaurants: data });
        }
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
        this.setState({ user: "" });
    }

    signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            alert(error.message);
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
                this.props.history.push("/Profile");
            }
        });
    }

    writeUserData = (userId, state) => {
        firebase.database().ref(userId).set(state);
        this.setState({ profile: state });
        this.props.history.push("/");
    }

    render() {
        return (
            <DatabaseContext.Provider value={{
                ...this.state,
                signIn: this.signIn,
                signOut: this.signOut,
                signUp: this.signUp,
                writeUserData: this.writeUserData,
            }}>
                {this.props.children}
            </DatabaseContext.Provider>
        );
    }
}

export default withRouter(DatabaseProvider);