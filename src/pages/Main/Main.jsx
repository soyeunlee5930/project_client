import React, { useState, useEffect } from 'react';
import './Main.scss';

const Main = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/clients/userpage')
      .then(res => res.text())
      .then(message => setMsg(message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);
  return <div className="main">{msg}</div>;
};

export default Main;
