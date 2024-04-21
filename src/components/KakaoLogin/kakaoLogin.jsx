import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();

  // 인가코드 가져와서 변수에 담기
  const code = searchParams.get('code');
  console.log(code);
  const navigate = useNavigate();

  useEffect(() => {
    code &&
      fetch(`${process.env.REACT_APP_REDIRECT_URL}?code=${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(res => {
          console.log(res);
          console.log(res.accessToken);
          localStorage.setItem('accessToken', res.data.accessToken);
          // navigate('/');
          // if (result.message === 'LOGIN_SUCCESS') {
          //   localStorage.setItem('newUser', result.data.accessToken);
          //   if (result.data.isNew) {
          //     navigate('/sign-up');
          //   } else {
          //     localStorage.setItem('accessToken', result.data.accessToken);
          //     navigate('/');
          //   }
          // } else {
          //   alert('오류입니다. 관리자에게 문의하세요.');
          // }
        })
        .catch(error => {
          console.error('Fetch error:', error);
          alert('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
        });
  }, [code]);

  return null;
};

export default KakaoLogin;
