import { useEffect, useState } from 'react';
import * as AM from './AccountManage.styles';
import axios from 'axios';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import { Button } from '../../../../../@common/Button/Button.styles';
import { useForm } from 'react-hook-form';
import useApi from '../../../../../../hooks/useApi';

function AccountManage() {
	// 유저 정보 담을 state
	const [user, setUser] = useState({});
	// 유저 정보 통신(GET)
	const { result, trigger, isLoading, error } = useApi({
		path: `/user`,
		shouldFetch: true,
	});

	// 유저 정보 state에 저장
	useEffect(() => {
		if (result) {
			setUser(result);
		}
		console.log(user);
	}, [result]);

	//
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		console.log(errors.currentPassword?.type);
	}, [errors.currentPassword?.type]);

	const submitHandler = data => {
		// const newArr = Object.entries(data);
		// const filterArr = newArr.filter(element => !(element[1] === ''));
		// const confirmText = filterArr
		// 	.map(element => `${element[0]}:${element[1]}`)
		// 	.join('\n');
		// const apply = confirm(confirmText);
		// const apply = confirm('정보를 변경하시겠습니까?');
		// if (apply) {
		// 	axios
		// 		.post('https://jsonplaceholder.typicode.com/posts', data)
		// 		.then(res => console.log(res))
		// 		.then(alert(`변경이 완료되었습니다.`));
		// } else {
		// 	return alert('변경이 취소 되었습니다.');
		// }

		// axios
		// 	.post('https://jsonplaceholder.typicode.com/posts', data)
		// 	.then(res => console.log(res))
		// 	.then(alert(`변경이 완료되었습니다.`));

		if (data.nickName === '') {
			data.nickName = user.nickName;
		}

		console.log(data);

		console.log({ ...user, ...data });
	};

	return (
		<AM.DetailOnboradWrapper>
			<AM.MainTitleBox>
				<AM.MainTitle>{MYPAGEOPTION.ACCOUNT.MANAGE.TITLE}</AM.MainTitle>
			</AM.MainTitleBox>
			<AM.ContentBox>
				<AM.UserCard>
					<AM.UserCardImg>
						<img src={user.profileImage} alt="프로필 사진"></img>
						<span>프로필 수정</span>
					</AM.UserCardImg>
					<AM.UserCardInfo>
						<AM.UserName>{user.name}</AM.UserName>
						<AM.UserEmail>{user.email}</AM.UserEmail>
					</AM.UserCardInfo>
				</AM.UserCard>

				<form onSubmit={handleSubmit(submitHandler)}>
					<AM.SubTitleBox>
						<AM.SubTitle>닉네임</AM.SubTitle>
						<input
							defaultValue={user.nickName}
							placeholder={'닉네임을 입력해 주세요.'}
							{...register('nickName')}
						/>
					</AM.SubTitleBox>
					<AM.SubTitleBox>
						<AM.SubTitle>직무</AM.SubTitle>
						<select
							defaultValue={user.position}
							{...register('position')}
						>
							<option value="프론트 엔드">프론트 엔드</option>
							<option value="백엔드">백엔드</option>
							<option value="풀스택">풀스택</option>
							<option value="안드로이드">안드로이드</option>
							<option value="IOS">IOS</option>
							<option value="ios">IOS</option>
							<option value="ios">IOS</option>
							<option value="ios">IOS</option>
						</select>
					</AM.SubTitleBox>
					{user.role === 'mentor' ? (
						<>
							<AM.SubTitleBox>
								<AM.SubTitle>경력</AM.SubTitle>
								<input
									type="number"
									defaultValue={user.career}
									placeholder={'경력 년수'}
									min={1}
									max={99}
									{...register('career', { min: 1, max: 99 })}
								/>
							</AM.SubTitleBox>
							<AM.SubTitleBox>
								<AM.SubTitle>재직중인 회사</AM.SubTitle>
								<input
									defaultValue={user.company}
									placeholder={'재직중인 회사'}
									{...register('company')}
								/>
							</AM.SubTitleBox>
						</>
					) : undefined}

					{/* <AM.SubTitleBox>
						<AM.SubTitle>변경 확인</AM.SubTitle>
						<input
							type="text"
							placeholder="변경하려면 아무거나 작성해주세요."
							{...register('confirm', { required: true })}
						/>
						{errors.confirm && (
							<p>정말 변경하려면 아무거나 작성해주세요.</p>
						)}
					</AM.SubTitleBox> */}
					<Button
						disabled={''}
						variant={'primary'}
						shape={'default'}
						size={'full'}
						type="submit"
					>
						수정
					</Button>
				</form>
			</AM.ContentBox>
		</AM.DetailOnboradWrapper>
	);
}

export default AccountManage;
