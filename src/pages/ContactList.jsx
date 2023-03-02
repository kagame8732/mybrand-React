import React, { useState, useEffect } from "react";
import axios from "axios";

function ListOfMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://apis-lvc4.onrender.com/api/contacts")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListOfMessage;
