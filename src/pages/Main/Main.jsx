import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('accessToken : ', accessToken);

  return (
    <div className="main">
      <p>메인페이지입니다.</p>
    </div>
  );
};

export default Main;
