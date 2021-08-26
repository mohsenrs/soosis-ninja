import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAGo3BlCDpztDdu23ZpKEMDMXYx1PwlHZ4',
  authDomain: 'soosis-ninja.firebaseapp.com',
  projectId: 'soosis-ninja',
  storageBucket: 'soosis-ninja.appspot.com',
  messagingSenderId: '509528719933',
  appId: '1:509528719933:web:8322d3eed1218d55492054',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }