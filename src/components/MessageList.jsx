import React, { useEffect, useState } from "react";

const MessageList = ({messages}) => {
  

  return (
    <div className="message-container">
      {messages.length > 0 &&
        messages.map((message) => {
          return (
            <div className="message-card">
              <div className="user-name">{message.name}</div>
              <div className="user-message">{message.message}</div>
            </div>
          );
        })}
    </div>
  );
};

export default MessageList;
