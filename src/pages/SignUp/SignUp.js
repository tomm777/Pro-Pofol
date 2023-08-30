import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUp.styles';
import Button from '../../components/@common/Button/Button';
import Input from '../../components/@common/Input/Input';
import { getCookie } from '../../utils/cookie';
import Position from '../../components/@common/Position/Position';
import useFooter from '../../hooks/useFooter';
import useApi from '../../hooks/useApi';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [nickName, setNickName] = useState('');
	const [position, setPosition] = useState('');
	const [nameError, setNameError] = useState('');
	const [nicknameError, setNicknameError] = useState('');
	const navigate = useNavigate();
	useFooter();

	useEffect(() => {
		async function fetchUserData() {
			try {
				const decodedEmail = decodeURIComponent(getCookie('email'));
				setEmail(decodedEmail);
			} catch (error) {
				console.error('Failed to fetch user information', error);
			}
		}

		fetchUserData();
	}, []);

	const handleNameChange = event => {
		const newName = event.target.value;
		if (newName.length <= 10) {
			setName(newName);
			setNameError('');
		} else {
			setNameError('이름은 10자 이하로 입력해 주세요');
		}
	};

	const handleNicknameChange = event => {
		const value = event.target.value;
		const regex = /^[ㄱ-ㅎ|가-힣|a-zA-Z0-9]*$/;
		if (regex.test(value)) {
			setNickName(value);
			setNicknameError('');
		} else {
			setNicknameError('한글, 영어, 숫자만 입력 가능합니다.');
		}
	};

	const handleJobChange = event => {
		setPosition(event.target.value);
	};

	const { result, trigger, isLoading, error } = useApi();
	const handleSubmit = async event => {
		event.preventDefault();

		const userInfoData = { name, email, nickName, position };

		try {
			await trigger({
				path: '/auth/signup',
				method: 'post',
				data: userInfoData,
			});

			navigate('/signupdone');
		} catch (error) {
			console.error('회원가입 실패:', error);
		}
	};

	return (
		<S.Wrap>
			<S.RegisterForm onSubmit={handleSubmit}>
				<p>회원 가입</p>
				<div>
					<label>이메일</label>
					<Input type="text" value={email} readOnly size={'medium'} />
				</div>
				<div>
					<label>이름</label>
					<Input
						type="text"
						value={name}
						size={'medium'}
						onChange={handleNameChange}
						error={nameError}
					/>
					{nameError && <S.StyledError>{nameError}</S.StyledError>}
				</div>
				<div>
					<label>닉네임</label>
					<Input
						type="text"
						value={nickName}
						onChange={handleNicknameChange}
						size={'medium'}
					/>
					{nicknameError && (
						<S.StyledError>{nicknameError}</S.StyledError>
					)}
				</div>
				<div>
					<label>직무</label>
					<Position
						onChange={handleJobChange}
						position={position}
						size={'regular'}
						font={'regular'}
					/>
				</div>
				<Button
					variant={'primary'}
					shape={'default'}
					size={'big'}
					type="submit"
				>
					가입 완료하기
				</Button>
			</S.RegisterForm>
		</S.Wrap>
	);
}

export default SignUp;
// 주석