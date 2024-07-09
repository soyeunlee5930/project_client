import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import KakaoLogin from './components/KakaoLogin/kakaoLogin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Router = () => {
  const isLogin = !!localStorage.getItem('accessToken');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/oauth2/login/kakao"
          element={isLogin ? <Navigate to="/" /> : <KakaoLogin />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
