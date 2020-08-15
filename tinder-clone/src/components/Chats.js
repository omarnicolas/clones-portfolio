import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you 😃"
        timestamp="35 minutes ago"
        profilePic="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      />
      <Chat
        name="Ellen"
        message="Whats up?"
        timestamp="30 minutes ago"
        profilePic="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      />
      <Chat
        name="Sandra"
        message="Hola!"
        timestamp="3 days ago"
        profilePic="https://rickandmortyapi.com/api/character/avatar/14.jpeg"
      />
      <Chat
        name="Natasha"
        message="Oops there is he is... 🐕"
        timestamp="1 week ago"
        profilePic="https://rickandmortyapi.com/api/character/avatar/26.jpeg"
      />
    </div>
  );
}

export default Chats;
