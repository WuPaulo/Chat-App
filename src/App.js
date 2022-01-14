import "./App.css";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn.js";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  //use authstate hook to see if user is signed in or not
  //if they're logged in, it should return an object with user id , email..etc
  //if signed out user = null
  const [user] = useAuthState(auth);

  return (
    <div className="appContainer">
      <h1>ChatApp</h1>
      <div className="dashboard">
        <Profile user={user} />
        {user ? <Chat /> : <LogIn />}
      </div>
    </div>
  );
}

export default App;
