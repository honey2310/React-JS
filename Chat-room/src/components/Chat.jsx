import React, { useState } from "react";
import "./chat.css";

export default function ChatRoom() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hey there! 👋", time: "10:02", sender: "other" },
    { text: "Hi! How are you?", time: "10:03", sender: "me" },
    { text: "I'm good, thanks! What about you?", time: "10:04", sender: "other" },
    { text: "Doing great 😄", time: "10:05", sender: "me" }
  ]);
  const [editIndex, setEditIndex] = useState(null);

  const sendMessage = () => {
    if (text.trim() === "") return;

    const newMessage = {
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "me",
    };

    if (editIndex !== null) {
      const updatedMessages = [...messages];
      updatedMessages[editIndex].text = text;
      setMessages(updatedMessages);
      setEditIndex(null);
    } else {
      setMessages([...messages, newMessage]);
    }

    setText("");
  };

  const editMessage = (index) => {
    setText(messages[index].text);
    setEditIndex(index);
  };

  const deleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <div className="chat-container">
      {/* HEADER */}
      <div className="chat-header">
        <img src="https://i.pravatar.cc/45?img=1" alt="User" />
        <div className="info">
          <strong>John Doe</strong>
          <small>Online</small>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            className={`message ${msg.sender === "me" ? "sent" : "received"}`}
            key={i}
          >
            <img
              src={
                msg.sender === "me"
                  ? "https://i.pravatar.cc/32?img=2"
                  : "https://i.pravatar.cc/32?img=3"
              }
              alt="avatar"
            />
            <div className="bubble">
              <span>{msg.text}</span>
              <div className="meta">
                <span className="time">{msg.time}</span>
                {msg.sender === "me" && (
                  <div className="actions">
                    <button onClick={() => editMessage(i)}>✏️</button>
                    <button onClick={() => deleteMessage(i)}>🗑️</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>
          {editIndex !== null ? "✓" : "➤"}
        </button>
      </div>
    </div>
  );
}
