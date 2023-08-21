import { useEffect } from 'react';

const NaverLogin = () => {
	const { naver } = window;
	const NAVER_CLIENT_ID = ''; // 발급 받은 Client ID 입력
	const NAVER_CALLBACK_URL = ''; // 작성했던 Callback URL 입력

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,
			isPopup: false,
			loginButton: { color: 'green', type: 1, height: 58 },
			callbackHandle: true,
		});
		naverLogin.init();
	};

	const userAccessToken = () => {
		window.location.href.includes('access_token') && getToken();
	};

	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0];
		console.log(token);
	};

	useEffect(() => {
		initializeNaverLogin();
		userAccessToken();
	}, []);

	return (
		<>
			<div id="naverIdLogin" style={{ display: 'none'}}>
				{' '}
			</div>
		</>
	);
};

export default NaverLogin;
