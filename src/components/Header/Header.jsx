import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const isLogin = !!localStorage.getItem('accessToken');
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="header">
      <div className="logoImg">
        <img src="/images/logo2_small.png" alt="로고" />
      </div>
    </div>
  );
};

export default Header;
