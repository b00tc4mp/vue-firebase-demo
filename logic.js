function signIn(callback) {
    firebase.auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' }))
        .then(function () {
            callback(null)
        })
}

function isSignedIn() {
    return !!firebase.auth().currentUser
}

function signOut(callback) {
    firebase.auth()
        .signOut()
        .then(function () {
            callback(null)
        })
}

function retrieveUser() {
    var user = firebase.auth().currentUser

    return user ? {
        name: user.displayName,
        photo: user.photoURL
    } : null
}