import firebase from 'firebase'
import 'firebase/firestore'



const fireBaseConfig = {
   
        apiKey: "AIzaSyAygpCZDINE3Z-h5cgDIbOFo2wzTdQ_1B8",
        authDomain: "mi-ecommerce.firebaseapp.com",
        projectId: "mi-ecommerce",
        storageBucket: "mi-ecommerce.appspot.com",
        messagingSenderId: "548977254366",
        appId: "1:548977254366:web:721cb90f2337c75fc0874f"
    
};

    const app = firebase.initializeApp(fireBaseConfig)

    export function getFirestore() {
        
        return firebase.firestore(app)

    }