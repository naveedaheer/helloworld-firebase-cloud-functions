// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 console.log("HelloWorld Successfull");
});

exports.showMessage = functions.https.onRequest((req, res)=>{
  res.send("<h1>Showing Message</h1>");
})

// exports.addMessage = functions.https.onRequest((req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   admin.database().ref('/messages').push({original: original}).then(snapshot => {
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     res.redirect(303, snapshot.ref);
//     console.log("req.query.text", req.query.text);
//   });
// });

exports.thumbnailProfile = functions.database.ref('/messages')
  .onWrite(event => {
    return admin.database().ref('/hello').push({'abc': 'xyz'})

    // var eventSnapshot = event.data;
    // var profilePictureSnapshot = eventSnapshot.child('profilePicture');
    // if (profilePictureSnapshot.changed()) {
    //   return createThumbnail(profilePictureSnapshot.val())
    //     .then(url => {
    //       return eventSnapshot.ref.update({ profileThumbnail: url });
    //     });
    // }
  });