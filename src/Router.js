import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import KakaoLogin from './components/KakaoLogin/kakaoLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
