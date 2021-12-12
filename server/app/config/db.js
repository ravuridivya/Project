const firebase = require('firebase').default

const firebaseConfig = {
  apiKey: 'AIzaSyDBI1T4q6vfh6I3lp_r5h2jlomrybgW3r0',
  authDomain: 'test-4-24-21.firebaseapp.com',
  projectId: 'test-4-24-21',
  storageBucket: 'test-4-24-21.appspot.com',
  messagingSenderId: '533930278703',
  appId: '1:533930278703:web:cf01ffdbd4cdd9ec8f6bda'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

module.exports = firebase
