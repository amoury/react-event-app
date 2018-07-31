import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9f4FMDbr77Qeop-pi95L7N_lmb170PHY",
  authDomain: "react-events-app.firebaseapp.com",
  databaseURL: "https://react-events-app.firebaseio.com",
  projectId: "react-events-app",
  storageBucket: "react-events-app.appspot.com",
  messagingSenderId: "657352188365"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;