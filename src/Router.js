import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import KakaoLogin from './components/KakaoLogin/kakaoLogin';
import Header from './components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<KakaoLogin />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
