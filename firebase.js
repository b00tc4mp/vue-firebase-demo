function initFirebase(callback) {
    firebase.initializeApp(firebaseConfig)

    firebase.auth()

    setTimeout(function() {
        callback(null)
    }, 500)
}