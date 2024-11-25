import React, { useState } from "react";
import Sidebar from "./SideBar";
import ChatWindow from "./ChatWindow";
import "./ChatBot.css";

function ChatBot() {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      name: `Chat ${chats.length + 1}`,
      messages: [],
    };
    setChats([...chats, newChat]);
    setCurrentChat(newChat.id);
  };

  const handleSelectChat = (id) => {
    setCurrentChat(id);
  };

  const prompt1 =
    "I need to export fish. Give me compliances that I need to abide by ; Is there any incentives I can expect from Government of India ?";
  const reply1 = `To export fish from India, you need to comply with various regulations and documentation requirements. Here are some key compliances you need to abide by:
        1. Importer-Exporter Code (IEC): Obtain this code from DGFT.
        2. Register with the relevant Export Promotion Council.
        3. Customs Clearance: Submit documents like shipping bill, commercial invoice, etc.
        4. Quality Certification: HACCP, ISO 22000.
        5. Export License/Permit: Check requirements in the destination country.
        6. Food Safety Compliance: Ensure standards like HACCP, ISO 22000.
        7. Environmental Regulations Compliance: Sustainable fishing practices.
        Incentives:
        - RoDTEP
        - Export Promotion Councils (EPCs)
        - Niryat Bandhu Scheme
        - ECGC Export Credit Insurance
        - Duty Exemption Schemes like Advance Authorisation, DFIA.
  `;

  const prompt2 =
    "Give me an overview of Compliances, Incentives and risk analysis pertaining to export of textiles from India to US with examples";
  const reply2 = `Compliances, Incentives and risk analysis pertaining to export of textiles from India to US with examples:
        - Compliances: Adhere to export promotion councils, Indian Missions abroad.
        - Incentives: RoDTEP, export promotion councils.
        - Risk Analysis: Market size, competition, payment terms.
        - Examples: Drapes, blankets, kitchen linens, etc.
        - Additional Info: DGFT provides resources like the Niryat Bandhu scheme.
  `;

  // Function to replace newlines with <br /> for rendering
  const formatMessage = (message) => {
    return message.split('\n').map((str, index) => (
      <span key={index}>
        {str}
        <br />
      </span>
    ));
  };

  const handleSendMessage = (message, sender) => {
    const botResponses = {
      [prompt1.toLowerCase()]: reply1,
      [prompt2.toLowerCase()]: reply2,
      "hi": "Hey there!",
      "hello": "Hello! How can I assist you?",
      "bye": "See you soon!",
      "thanks": "You're welcome!",
    };

    const normalizedMessage = message.toLowerCase();

    const botReply =
      botResponses[normalizedMessage] || "I'm not sure I understand. Can you rephrase?";

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === currentChat
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { text: message, sender: "user" },
                { text: botReply, sender: "bot" },
              ],
            }
          : chat
      )
    );
  };

  return (
    <div className="app">
      <Sidebar
        chats={chats}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />
      {currentChat ? (
        <ChatWindow
          chat={chats.find((chat) => chat.id === currentChat)}
          onSendMessage={handleSendMessage}
          formatMessage={formatMessage}
        />
      ) : (
        <div className="welcome-screen">
          Select or Create a Chat to Get Started
        </div>
      )}
    </div>
  );
}

export default ChatBot;
