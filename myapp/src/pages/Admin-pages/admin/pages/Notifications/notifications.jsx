import React from "react";
import "./notifications.scss"
import { useState } from "react";
import { useEffect } from "react";
import { getMessage } from "../../../../../platform/api/notifications-api";
import { PageHeader } from "../../../../../components/page-header/pageheader";


export const Notifications = () => {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
     getMessageListData();
  }, []);

  const getMessageListData = async () => {
        const result = await getMessage();
        if (result) {
           setMessageData(result.data);
        }
  };

  return (
     <div className="admin-notifications">
        <PageHeader title={"Notifications"} />
        <div className="message-titles">
           <p className="username">Username</p>
           <p className="mail">E-mail</p>
           <p className="subject">Subject</p>
           <p className="question">Message</p>
        </div>
        {messageData.map((message, index) => (
           <div className="message-description" key={index}>
              <p className="username">{message.name}</p>
              <p className="mail">{message.email}</p>
              <p className="subject">{message.subject}</p>
              <p className="question">{message.message}</p>
           </div>
        ))}
     </div>
  );
};
