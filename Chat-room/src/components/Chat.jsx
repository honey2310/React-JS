import React, { useState } from "react";
import "./chat.css";

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Message
  const handleSend = () => {
    if (!text.trim()) return;

    if (editIndex !== null) {
      // Update existing message
      const updated = [...messages];
      updated[editIndex].text = text;
      setMessages(updated);
      setEditIndex(null);
    } else {
      // Add new message
      setMessages([...messages, { text, time: new Date().toLocaleTimeString() }]);
    }

    setText("");
  };

  // Delete Message
  const handleDelete = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  // Edit Message
  const handleEdit = (index) => {
    setText(messages[index].text);
    setEditIndex(index);
  };

  return (
    <div className="chat-container">
      <h2>💬 Chat Room</h2>

      <div className="chat-box">
        {messages.length === 0 ? (
          <p className="no-msg">No messages yet...</p>
        ) : (
          messages.map((msg, index) => (
            <div className="message" key={index}>
              <span className="msg-text">{msg.text}</span>
              <span className="msg-time">{msg.time}</span>
              <div className="msg-actions">
                <button onClick={() => handleEdit(index)}>✏️</button>
                <button onClick={() => handleDelete(index)}>🗑️</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSend}>
          {editIndex !== null ? "Update" : "Send"}
        </button>
      </div>
    </div>
  );
}
