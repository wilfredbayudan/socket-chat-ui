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
    console.log(message);
  };

  useEffect(() => {
    createSubscription();
  }, []);

  return <div>Messages</div>;
};

export default Messages;
