import firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAACrbZISKzet3WNtY5cusd4MloymDQh9Q",
    authDomain: "coder-app-jpm.firebaseapp.com",
    databaseURL: "https://coder-app-jpm.firebaseio.com",
    projectId: "coder-app-jpm",
    storageBucket: "coder-app-jpm.appspot.com",
    messagingSenderId: "274550420807",
    appId: "1:274550420807:web:58593521c8aaa79e208862",
    measurementId: "G-JP9GB537QY"
};

const DB = firebase.initializeApp(firebaseConfig)

export const GetDBFireBase = () => {
    return firebase.firestore(DB)
}