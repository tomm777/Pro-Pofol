import { useEffect, useState } from 'react';
import * as AM from './AccountManage.styles';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userData } from '../../../../../../recoil/atoms/myPage/myPage.atom';
import MYPAGEOPTION from '../../../../../../constants/mypage';
import Input from '../../../../../@common/Input/Input';
import Select from '../../../../../@common/Select/Select';
import { Button } from '../../../../../@common/Button/Button.styles';
import { useForm } from 'react-hook-form';

function AccountManage() {
	const user = useRecoilValue(userData);
	const newUser = { ...user };
	newUser.role = 'mentor';

	// 비밀번호 보이기
	const [hidePassword, setHidePassword] = useState(true);

	// 비밀번호 보이기 토글
	const toggleHidePassword = () => {
		setHidePassword(!hidePassword);
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(errors.currentPassword?.type);

	const submitHandler = data => {
		const newArr = Object.entries(data);
		const filterArr = newArr.filter(element => !(element[1] === ''));
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

		axios
			.post('https://jsonplaceholder.typicode.com/posts', data)
			.then(res => console.log(res))
			.then(alert(`변경이 완료되었습니다.`));
	};

	return (
		<AM.DetailOnboradWrapper>
			<AM.MainTitleBox>
				<AM.MainTitle>{MYPAGEOPTION.ACCOUNT.MANAGE.TITLE}</AM.MainTitle>
			</AM.MainTitleBox>
			<AM.ContentBox>
				<AM.UserCard>
					<AM.UserCardImg>
						<img></img>
						<span>프로필 수정</span>
					</AM.UserCardImg>
					<AM.UserCardInfo>
						<AM.UserName>사용자 이름</AM.UserName>
						<AM.UserEmail>email@email.com</AM.UserEmail>
					</AM.UserCardInfo>
				</AM.UserCard>

				<form onSubmit={handleSubmit(submitHandler)}>
					<AM.SubTitleBox>
						<AM.SubTitle>닉네임</AM.SubTitle>
						<input
							defaultValue={'닉네임'}
							placeholder={'닉네임을 입력해 주세요.'}
							{...register('nickName')}
						/>
					</AM.SubTitleBox>
					<AM.SubTitleBox>
						<AM.SubTitle>비밀번호</AM.SubTitle>
						<input
							type={hidePassword ? 'password' : 'text'}
							placeholder={'현재 비밀번호를 입력해 주세요.'}
							{...register('currentPassword', {
								minLength: 8,
								maxLength: 15,
								pattern:
									/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
							})}
						/>
						{errors.currentPassword?.type === 'pattern' && (
							<p>
								비밀번호는 영문 숫자 특수기호 조합 8자리 이상
								15자리 이하의 문자열이어야 합니다.
							</p>
						)}
						<input
							type={hidePassword ? 'password' : 'text'}
							placeholder={'변경할 비밀번호를 입력해 주세요.'}
							{...register('changePassword', {
								pattern:
									/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
								minLength: 0,
								maxLength: 100,
							})}
						/>
						{errors.changePassword?.type === 'pattern' && (
							<p>
								비밀번호는 영문 숫자 특수기호 조합 8자리 이상
								15자리 이하의 문자열이어야 합니다.
							</p>
						)}
						<input
							type={hidePassword ? 'password' : 'text'}
							placeholder={
								'변경할 비밀번호를 한번 더 입력해 주세요.'
							}
							{...register('changePasswordConfirm', {
								pattern:
									/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
								minLength: 8,
								maxLength: 15,
							})}
						/>
						{/* {errors.changePasswordConfirm?.type === 'pattern' ? (
							<p>
								비밀번호는 영문 숫자 특수기호 조합 8자리 이상
								15자리 이하의 문자열이어야 합니다.
							</p>
						) : errors.changePasswordConfirm?.type ===
						  'minLength' ? (
							<p>
								비밀번호가 너무 짧습니다. 8글자 이하
								문자열이여야 합니다.
							</p>
						) : errors.changePasswordConfirm?.type ===
						  'maxLength' ? (
							<p>
								비밀번호가 너무 깁니다. 15글자 이하 문자열이여야
								합니다.
							</p>
						) : (
							<p>??</p>
						)} */}
						{errors.changePasswordConfirm?.type === 'pattern' && (
							<p>
								비밀번호는 영문 숫자 특수기호 조합 8자리 이상
								15자리 이하의 문자열이어야 합니다.
							</p>
						)}
						{errors.changePasswordConfirm?.type === 'minLength' && (
							<p>
								비밀번호가 너무 짧습니다. 8글자 이하
								문자열이여야 합니다.
							</p>
						)}
						{errors.changePasswordConfirm?.type === 'maxLength' && (
							<p>
								비밀번호가 너무 깁니다. 15글자 이하 문자열이여야
								합니다.
							</p>
						)}
					</AM.SubTitleBox>
					<AM.SubTitleBox>
						<AM.SubTitle>직무</AM.SubTitle>
						<select {...register('position')}>
							<option value="" hidden>
								선택
							</option>
							<option value="frontend">프론트엔드 개발</option>
							<option value="backend">백엔드 개발</option>
							<option value="fullstack">풀스택 개발</option>
							<option value="android">안드로이드 개발</option>
							<option value="ios">IOS 개발</option>
						</select>
					</AM.SubTitleBox>
					{newUser.role === 'mentor' ? (
						<>
							<AM.SubTitleBox>
								<AM.SubTitle>경력</AM.SubTitle>
								<input
									type="number"
									defaultValue={6}
									placeholder={'경력 년수'}
									min={1}
									max={99}
									{...register('career', { min: 1, max: 99 })}
								/>
							</AM.SubTitleBox>
							<AM.SubTitleBox>
								<AM.SubTitle>재직중인 회사</AM.SubTitle>
								<input
									defaultValue={'당근~'}
									placeholder={'재직중인 회사'}
									{...register('company')}
								/>
							</AM.SubTitleBox>
						</>
					) : undefined}

					<AM.SubTitleBox>
						<AM.SubTitle>변경 확인</AM.SubTitle>
						<input
							type="text"
							placeholder="변경하려면 아무거나 작성해주세요."
							{...register('confirm', { required: true })}
						/>
						{errors.confirm && (
							<p>정말 변경하려면 아무거나 작성해주세요.</p>
						)}
					</AM.SubTitleBox>
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
