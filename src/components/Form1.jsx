import React from "react";
import { useState } from "react";
import axios from "axios";
import MessageList from "./MessageList";
const Form1 = ({fetchMessages}) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange=(e)=> setName(e.target.value);
  const handleMessageChange=(e)=>setMessage(e.target.value);
  
  const handleSubmit= async (e)=>{
      e.preventDefault();
      const formName=name.trim();
      const formMessage=message.trim();
      if(formName==="" || formMessage===""){
         alert("Fill the required fields!");
         return;
      } 
      if(formName.length<3){
         alert("Name should be atleast 3 charaters long");
         return;
      }
      if(formMessage.length<10){
         alert("Message should be atleast 10 characters long");
         return;
      }
      await axios.post("https://pager-75d92-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
            {
                name: name,
                message: message
            }
       )
      setName("");
      setMessage("");
      fetchMessages();
  }
  return (
    <div className="form-container">
      <form action="">
        <div className="form-header">Send a message to Vishnu</div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <input
            type="text"
            placeholder="John Doe"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <input type="text" placeholder="send your message!" onChange={handleMessageChange} value={message} />
        </div>
        <div className="form-btn">
            <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form1;