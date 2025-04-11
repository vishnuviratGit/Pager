import React, { useState, useEffect } from 'react'

import Form1 from './components/Form1';
import MessageList from './components/MessageList'
import axios from "axios";
import "./App.css"
const App = () => {
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    const response = await axios.get(
      "https://pager-75d92-default-rtdb.asia-southeast1.firebasedatabase.app/message.json"
    );
    let arr = Object.values(response.data).map((value) => value);
    arr.reverse();
    let arrDisplayed = arr.slice(0, 5);
    setMessages(arrDisplayed);
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    
    <div className='container'>
         
         <Form1 fetchMessages={fetchMessages}/>
         <MessageList messages={messages}/>
    </div>
  )
}

export default App

