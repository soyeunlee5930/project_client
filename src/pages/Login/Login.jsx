import React from 'react';
import './Login.scss';

const Login = () => {
  const kakaoUrl = process.env.REACT_APP_KAKAO_REST_API;

  return (
    <div className="login">
      <form className="loginForm" method="POST">
        <div className="userLogin">
          <div className="login">
            <h1 className="logoTitle">Radiant Glimmer</h1>
            <div className="logo">
              <img src="/images/logo.png" alt="로고" />
            </div>
            <div className="subText">
              간편하게 로그인하고
              <br /> 다양한 서비스를 이용해 보세요.
            </div>
            <div className="btnKakaoLogin">
              <a href={kakaoUrl} className="btnInner">
                <span className="iconWrapper">
                  <img
                    className="iconImg"
                    src="/images/login_kakao.svg"
                    alt="카카오 로그인 버튼"
                  />
                </span>
                <span className="loginText">카카오 로그인</span>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
