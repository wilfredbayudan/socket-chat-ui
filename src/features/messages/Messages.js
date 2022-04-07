import React, { useEffect, useState } from "react";
import ActionCable from "actioncable";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const cable = ActionCable.createConsumer("ws://localhost:3000/cable");

  const createSubscription = () => {
    cable.subscriptions.create(
      { channel: "MessagesChannel" },
      { received: (message) => handleReceivedMessage(message) }
    );
  };

  const handleReceivedMessage = (message) => {
    setMessages((prevState) => {
      return [...prevState, message];
    });
  };

  useEffect(() => {
    createSubscription();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((res) => res.json())
      .then((json) => setMessages(json));
  }, []);

  const renderMessages = messages.map((message, idx) => {
    return (
      <div key={idx}>
        <p>{message.content}</p>Posted By User {message.user_id}
        <hr />
      </div>
    );
  });

  return (
    <div>
      {renderMessages}
      <br />
      Messages: {messages.length}
    </div>
  );
};

export default Messages;
