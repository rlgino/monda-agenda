const firebase = require('firebase')
require('firebase/auth')
require('firebase/analytics')

var firebaseConfig = {
    apiKey: "AIzaSyCfUWQ9_arx7AB9ji9p4SHmSO2ejp79c-Y",
    authDomain: "monda-calendar.firebaseapp.com",
    databaseURL: "https://monda-calendar.firebaseio.com",
    projectId: "monda-calendar",
    storageBucket: "monda-calendar.appspot.com",
    messagingSenderId: "440530510753",
    appId: "1:440530510753:web:6dc0ab24122e60a72f21e0",
    measurementId: "G-G7JH0J2END"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const loginWithMailAndPassowrd = (mail, password) => {
    return firebase.auth().signInWithEmailAndPassword(mail, password)
}

const registerWithMailAndPassword = (mail, password) => {
    return firebase.auth().createUserWithEmailAndPassword(mail, password)
}

const firebaseSignOut = () => {
    return firebase.auth().signOut()
}

const onAuthChange = (onChange) => {
    return firebase.auth().onAuthStateChanged(onChange)
}

const logEvent = (event, attributes) => {
    firebase.analytics().logEvent(event, attributes);
}

export { loginWithMailAndPassowrd, onAuthChange, registerWithMailAndPassword, logEvent, firebaseSignOut }