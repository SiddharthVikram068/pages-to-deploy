import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function ChatWindow({ chat, onSendMessage }) {
  const [typing, setTyping] = useState(false);
  const [botMessageIndex, setBotMessageIndex] = useState(null); // Track the index of the latest bot message

  useEffect(() => {
    if (
      chat.messages.length > 0 &&
      chat.messages[chat.messages.length - 1].sender === "bot"
    ) {
      setTyping(true);
      setBotMessageIndex(chat.messages.length - 1); // Update the index of the latest bot message
    }
  }, [chat.messages]);

  const handleSend = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    onSendMessage(message, "user");
    e.target.message.value = ""; // Clear input field
  };

  const formatWithLineBreaks = (text) => {
    return text.split("\n").join("<br>");
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {chat.messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
            style={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            {msg.sender === "user" ? (
              msg.text
            ) : index === botMessageIndex && typing ? (
              <Typewriter
                onInit={(typewriter) => {
                  const formattedText = formatWithLineBreaks(msg.text);
                  typewriter
                    .pauseFor(4000) // Pause for 4 seconds after typing
                    .typeString(formattedText) // Type the message
                    .pauseFor(4000) // Pause for 4 seconds after typing
                    .callFunction(() => {
                      setTyping(false); // Stop typing after the pause
                    })
                    .start();
                }}
                options={{
                  loop: false,
                  delay: 10,
                  html: true,
                }}
              />
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: formatWithLineBreaks(msg.text),
                }}
              />
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <input type="text" name="message" placeholder="Type your message ..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
