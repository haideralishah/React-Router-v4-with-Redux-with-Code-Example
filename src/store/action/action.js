
import ActionTypes from '../constant/constant';


import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBj71WyfocMv6c2tw019W9rg_zl1frgLdM",
    authDomain: "fir-learning-6a8d7.firebaseapp.com",
    databaseURL: "https://fir-learning-6a8d7.firebaseio.com",
    projectId: "fir-learning-6a8d7",
    storageBucket: "fir-learning-6a8d7.appspot.com",
    messagingSenderId: "333978526201"
};
firebase.initializeApp(config);



export function changeUserName() {
    return dispatch => {
        dispatch({ type: ActionTypes.USERNAME, payload: 'Ali' })
    }
}


export function signupAction(user) {
    return dispatch => {
        console.log('user', user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user);
            })
    }
}



export function signinAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('users/' + signedinUser.uid + '/').once('value')
                    .then((userData)=>{
                        console.log(userData.val());
                        let currentUser = userData.val();
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUser })


                    })
            })
    }
}