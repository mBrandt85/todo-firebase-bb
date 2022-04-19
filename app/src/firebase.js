import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCo-LTGq6-RufIMrq3p7P3OzPZQqhSiewg",
  authDomain: "todo-firebase-bb.firebaseapp.com",
  projectId: "todo-firebase-bb",
  storageBucket: "todo-firebase-bb.appspot.com",
  messagingSenderId: "759118660747",
  appId: "1:759118660747:web:3ac7b261a5cbc9dd81008e",
  measurementId: "G-KY4Z5Y48JK"
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)