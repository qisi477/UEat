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
            cloud: [],
            restaurants: [],
            user: "",
            profile: ""
        };
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.signUp = this.signUp.bind(this);
        this.updateUserData = this.updateUserData.bind(this);
        this.cancelUpdate = this.cancelUpdate.bind(this);

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

    componentDidMount() {
        let cloudData = firebase.database().ref();
        cloudData.on('child_added', (data) => {
            this.setState({
                cloud: { ...this.state.cloud, [data.key]: data.val() }
            });
        });

        cloudData.on('child_changed', (data) => {
            this.setState({
                cloud: { ...this.state.cloud, [data.key]: data.val() }
            });
        });

        cloudData.on('child_removed', (data) => {
            this.setState({
                cloud: this.state.cloud.filter(d => d.key !== data.key)
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.cloud !== prevState.cloud) {
            let data = [];
            for (var key in this.state.cloud) {
                data.push(this.state.cloud[key]);
            }
            this.setState({ restaurants: data });
            console.log("update");
        }
    }

    signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            alert(error.message);
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user, profile: this.state.cloud[user.uid] });
                this.props.history.push("/");
            }
        });
    }

    signOut = () => {
        firebase.auth().signOut();
        this.setState({ user: "", profile: "" });
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

    updateUserData = (userId, state) => {
        firebase.database().ref(userId).set(state);
        this.setState({ profile: state });
        this.props.history.push("/");
    }

    cancelUpdate() {
        this.props.history.goBack();
    }

    render() {
        return (
            <DatabaseContext.Provider value={{
                ...this.state,
                signIn: this.signIn,
                signOut: this.signOut,
                signUp: this.signUp,
                updateUserData: this.updateUserData,
                cancelUpdate: this.cancelUpdate
            }}>
                {this.props.children}
            </DatabaseContext.Provider>
        );
    }
}

export default withRouter(DatabaseProvider);