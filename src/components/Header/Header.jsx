import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        if (res.status === 200) {
          localStorage.removeItem('accessToken');
          alert('로그아웃되었습니다.');
          navigate('/');
          window.location.reload();
        } else if (res.status === 401) {
          // 토큰이 만료된 경우
          throw new Error('token has expired');
        } else {
          throw new Error('Failed to logout');
        }
      })
      .catch(error => {
        console.error('Logout error:', error.message);
        // 토큰이 만료된 경우 로그인 페이지로 이동
        if (error.message === 'token has expired') {
          localStorage.removeItem('accessToken');
          navigate('/login');
        } else {
          // 그 외의 오류 처리
          alert('Failed to logout');
        }
      });
  };

  return (
    <header id="header" className="header">
      <div className="inner">
        <div className="nav">
          <div className="logoImg">
            <Link to="/">
              <img src="/images/logo2_small.png" alt="로고" />
            </Link>
          </div>
          <div className="categoriesList">
            <ul>
              <li className="dropDown">
                <Link to="/">STORE</Link>
                <ul className="dropDownMenu">
                  <li>
                    <Link to="/">STORE</Link>
                  </li>
                  <li>
                    <Link to="/">BRAND STORY</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li className="subDropDown">
                <Link to="/">
                  92.5
                  <br />
                  SILVER
                </Link>
                <div className="subCategoriesList">
                  <ul className="subCategories">
                    <li>
                      <Link to="/">NEW IN</Link>
                    </li>
                    <li>
                      <Link to="/">EARING</Link>
                    </li>
                    <li>
                      <Link to="/">NECKLACE</Link>
                    </li>
                    <li>
                      <Link to="/">RING</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="subDropDown">
                <Link to="/">
                  14K
                  <br />
                  GOLD
                </Link>
                <div className="subCategoriesList">
                  <ul className="subCategories">
                    <li>
                      <Link to="/">EARING</Link>
                    </li>
                    <li>
                      <Link to="/">NECKLACE</Link>
                    </li>
                    <li>
                      <Link to="/">RING</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="subDropDown">
                <Link to="/">CELEBRITY</Link>
                <div className="subCategoriesList">
                  <ul className="subCategories">
                    <li>
                      <Link to="/">CELEBRITY</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="subDropDown">
                <Link to="/">BOARD</Link>
                <div className="subCategoriesList">
                  <ul className="subCategories">
                    <li>
                      <Link to="/">NOTICE</Link>
                    </li>
                    <li>
                      <Link to="/">Q&A</Link>
                    </li>
                    <li>
                      <Link to="/">REVIEW</Link>
                    </li>
                    <li>
                      <Link to="/">EVENT</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="accountBox">
            <div className="myPage">
              {isLogin ? (
                <Link to="/#" className="moveMyPageBtn">
                  Account
                </Link>
              ) : (
                <Link to="/login" className="handleLoginBtn">
                  Account
                </Link>
              )}
              <ul>
                <li>
                  {isLogin ? (
                    <Link className="handleLogoutBtn" onClick={handleLogout}>
                      로그아웃
                    </Link>
                  ) : (
                    <Link to="/login" className="handleLoginBtn">
                      로그인
                    </Link>
                  )}
                </li>
                <li>
                  {isLogin ? (
                    <Link to="#" className="moveOrderPageBtn">
                      주문배송조회
                    </Link>
                  ) : (
                    <Link to="/login" className="handleLoginBtn">
                      주문배송조회
                    </Link>
                  )}
                </li>
                <li>
                  {isLogin ? (
                    <Link to="#" className="moveMyPageBtn">
                      마이페이지
                    </Link>
                  ) : (
                    <Link to="/login" className="handleLoginBtn">
                      마이페이지
                    </Link>
                  )}
                </li>
                <li>
                  <Link to="#">최근본상품</Link>
                </li>
              </ul>
            </div>
            <div className="searchBtn">
              <Link to="#" className="search">
                Search
              </Link>
            </div>
            <div className="moveCartPageBtn">
              <Link to="#" className="cart">
                Cart
              </Link>
              <Link to="#" className="count">
                0
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
