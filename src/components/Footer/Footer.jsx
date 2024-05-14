import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="inner">
        <div className="infoBox">
          <div className="companyInfo">
            <div className="company">
              <div className="logoImg">
                <Link to="/">
                  <img src="/images/logo2_small.png" alt="로고" />
                </Link>
              </div>
              <ul className="footerInfo">
                <li>상호 : (주)래디언트 글리머</li>
                <li>대표 : 이소연</li>
                <li>대표전화 : 02-000-0000</li>
                <li>팩스 : 02-000-0001</li>
                <li className="block">
                  주소. 00000 서울특별시 가나다구 라마바사동 123-456 1층
                </li>
                <li>사업자등록번호. 000-00-00000</li>
                <li>통신판매업신고번호. 제2024-서울가나다구-0001호</li>
                <li className="block">
                  개인정보관리책임자. 래디언트 글리머(radiantGlimmer@test.com)
                </li>
                <li className="copy">
                  COPYRIGHT (C) Radiant Glimmer 2024. All rights reserved.
                </li>
              </ul>
            </div>
            <div className="cs">
              <div className="footerTitle">Customer Center</div>
              <ul className="footerInfo">
                <li className="phoneNumber">
                  02-0000-0000
                  <br />
                  02-0000-0001
                </li>
                <li>평일 09:00 - 17:00</li>
                <li>점심시간 12:00 - 13:00</li>
                <li>토요일 일요일 공휴일 휴무</li>
              </ul>
            </div>
            <div className="bank">
              <div className="footerTitle">Bank</div>
              <ul className="footerInfo">
                <li>신한 100-000-000000</li>
                <li>국민 000000-01-000000</li>
                <li>예금주 : (주)래디언트 글리머</li>
              </ul>
            </div>
            <div className="board">
              <div className="footerTitle">Board</div>
              <ul className="footerInfo">
                <li>
                  <Link to="#">Notice</Link>
                </li>
                <li>
                  <Link to="#">Q&A</Link>
                </li>
                <li>
                  <Link to="#">Review</Link>
                </li>
                <li>
                  <Link to="#">Event</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="about">
            <div className="help">
              <ul className="footerLink">
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms Of Use</Link>
                </li>
                <li>
                  <Link to="#">Guide</Link>
                </li>
              </ul>
            </div>
            <div className="sns">
              <ul className="footerLink">
                <li>
                  <Link to="#">Facebook</Link>
                </li>
                <li>
                  <Link to="#">Instagram</Link>
                </li>
                <li>
                  <Link to="#">Youtube</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
