import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js'

const LogIn = () => {


    const googleLogIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return (
        <div className="logInContainer">
            <button onClick={googleLogIn}>Log in with your Google Account 
            to use the chat</button>
        </div>
    )
}

export default LogIn
