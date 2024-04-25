import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const [userName, setUserName] = useState();

  // 인가코드 가져와서 변수에 담기
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    code &&
      fetch(`${process.env.REACT_APP_KAKAO_REDIRECT_URI_SERVER}?code=${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to fetch');
          }
          // AccessToken 저장
          const accessToken = res.headers.get('Authorization').split(' ')[1];
          localStorage.setItem('accessToken', accessToken);
          return res.json();
        })
        .then(data => {
          setUserName(data.name);
          navigate('/');
        })
        .catch(error => {
          console.error('Fetch error:', error);
          alert('kakao login 실패');
        });
  }, [code]);

  return null;
};

export default KakaoLogin;
