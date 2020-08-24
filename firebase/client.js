const firebase = require('firebase')
const auth = require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyCfUWQ9_arx7AB9ji9p4SHmSO2ejp79c-Y",
    authDomain: "monda-calendar.firebaseapp.com",
    databaseURL: "https://monda-calendar.firebaseio.com",
    projectId: "monda-calendar",
    storageBucket: "monda-calendar.appspot.com",
    messagingSenderId: "440530510753",
    appId: "1:440530510753:web:6dc0ab24122e60a72f21e0"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const loginWithMailAndPassowrd = (mail, password) => {
    return firebase.auth().signInWithEmailAndPassword(mail, password)
}

const onAuthChange = (onChange) => {
    return firebase.auth().onAuthStateChanged((user) => {
        const normalizedUser = user ? user : null
        console.log("Usuario loggueado?");
        console.log(user);
        onChange(normalizedUser)
    })
}

export { loginWithMailAndPassowrd, onAuthChange }