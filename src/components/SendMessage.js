import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

const SendMessage = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  async function submitMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    if (currentMessage.length) {
      await db.collection("messages").add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        text: currentMessage,
        photoURL,
        uid,
      });
    } else {
      return false;
    }
    setCurrentMessage("");
  }

  return (
    <div>
      <form onSubmit={submitMessage} className="sendContainer">
        <input
          className="inputBox"
          placeholder="Aa"
          onChange={(e) => setCurrentMessage(e.target.value)}
          value={currentMessage}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
