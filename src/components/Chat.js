import React, { useEffect, useState, useRef } from "react";
import { db, auth } from "../firebase";
import SendMessage from "./SendMessage";
import firebase from "firebase/compat/app";

const Chat = () => {
  const scroll = useRef(null);
  // const date = new Date();
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt", "asc")
      .limit(1000)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    // db.collection("messages").limit(25).onSnapshot((querySnapshot)=>{
    //  querySnapshot.forEach((doc) => {
    //    items.push(doc.data())
    //  })
    //  setMessages(items);
    // })

    // db.collection("messages")
    //   .orderBy('createdAt')
    //   .limit(100)
    //   .onSnapshot(snapshot => {
    //     snapshot.forEach((doc) =>{
    //       items.push(doc.data);
    //     })
    //     setMessages(items);
    //     items.splice(0, items.length)
    //   });d
  }, []);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <div className="chatContainer">
      <div className="chat">
        {messages.map(({ id, text, photoURL, uid, createdAt }) => (
          <div>
            <div
              key={id}
              className={`messages ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <div>
                <h3 className="displayedName">
                  {firebase.auth().currentUser.displayName}
                </h3>
                <p>{text}</p>
              </div>
              {/* <p>{new Date(createdAt.seconds * 1000).toLocaleTimeString()}</p> */}
            </div>
          </div>
        ))}
        <div ref={scroll} />
      </div>
      <SendMessage />
    </div>
  );
};

export default Chat;
