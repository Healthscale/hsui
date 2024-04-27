import React, { useState, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import "./Chat.css";

const socket: Socket = io("http://127.0.0.1:5000"); // replace with your server URL

function Chat(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // listen for incoming messages from the server
    socket.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send the message to the server
    socket.emit("message", inputValue);
    setInputValue("");
  };

  return (
    <div className="chat">
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-text">{message}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
