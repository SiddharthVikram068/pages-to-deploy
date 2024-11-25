import React from "react";

const Sidebar = ({ chats, onNewChat, onSelectChat, selectedChatId }) => {
  return (
    <div className="sidebar">
      <button onClick={onNewChat} aria-label="Create a new chat">
        + New Chat
      </button>
      <ul>
        {chats.length === 0 ? (
          <li className="empty-state">No chats available</li>
        ) : (
          chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={chat.id === selectedChatId ? "active" : ""}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") onSelectChat(chat.id);
              }}
            >
              {chat.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

// import React from "react";

// const Sidebar = ({ chats, onNewChat, onSelectChat }) => {
//   return (
//     <div className="sidebar">
//       <button onClick={onNewChat}>+ New Chat</button>
//       <ul>
//         {chats.map((chat) => (
//           <li key={chat.id} onClick={() => onSelectChat(chat.id)}>
//             {chat.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
