import firebase from "firebase/compat/app";
import SignOut from "./SignOut";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="profileInfo">
        {user ? (
          <img
            src={firebase.auth().currentUser.photoURL}
            alt="user profile image"
          />
        ) : (
          <img src="./assets/personIcon.jpg" alt="user profile image" />
        )}
        {user ? (
          <h2>{firebase.auth().currentUser.displayName}</h2>
        ) : (
          <h2>Please Log In</h2>
        )}
      </div>
      <SignOut />
    </div>
  );
};

export default Profile;
