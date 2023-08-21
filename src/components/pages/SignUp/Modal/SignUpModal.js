import React from 'react';
import * as H from './SignUpModal.styles';
import NaverLogin from '../NaverLogoin/NaverLogoin';

function SignUpModal({ onClose }) {
	const handleNaverClick = () => {
		const naverLoginButton = document.getElementById(
			'naverIdLogin_loginButton',
		);
		if (naverLoginButton) naverLoginButton.click();
	};
	return (
		<>
			<H.ModalWrapper>
				<H.ModalContentWrapper>
					<button onClick={onClose}>
						<img src="./assets/img/icons/closebtn.png" alt="닫기" />
					</button>
					<H.Contents>
						<H.Title>포폴에 오신것을 환영합니다 !</H.Title>
						<button onClick={handleNaverClick}>
							{' '}
							<img
								src="./assets/img/icons/naverlogo.png"
								alt="네이버로고"
							/>
						</button>
						<NaverLogin />
						<p>네이버로 시작하기</p>
					</H.Contents>
				</H.ModalContentWrapper>
			</H.ModalWrapper>
		</>
	);
}
export default SignUpModal;
