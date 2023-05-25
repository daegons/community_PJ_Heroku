//firebase 버전호환문제로 from뒤에 수정해서 해결
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo0IlCfzLsV15ef2s2-hE-_vojZEo-Wnw",
  authDomain: "react-community-1a86c.firebaseapp.com",
  projectId: "react-community-1a86c",
  storageBucket: "react-community-1a86c.appspot.com",
  messagingSenderId: "323096512560",
  appId: "1:323096512560:web:350f4dec76e069132805f5",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
