import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const isLogin = !!localStorage.getItem('accessToken');
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(`${process.env.REACT_APP_LOGOUT_URL_SERVER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: accessToken,
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json;
      })
      .then(data => {
        localStorage.removeItem('accessToken');
        alert('로그아웃되었습니다.');
        navigate('/');
        window.location.reload();
      });
  };

  return (
    <div className="header">
      <div className="logoImg">
        <img src="/images/logo2_small.png" alt="로고" />
        {isLogin ? (
          <button className="handleLogoutBtn" onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          <button className="handleLoginBtn" onClick={() => navigate('/login')}>
            로그인
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
