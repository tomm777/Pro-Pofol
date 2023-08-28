import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userData } from '../../../../recoil/atoms/myPage/myPage.atom';
import useFooter from '../../../../hooks/useFooter';

function MyPageLayout() {
	useFooter(); // 마이페이지 푸터 제거
	const [user, setUser] = useRecoilState(userData);

	function getCookie(name) {
		const nameOfCookie = name + '=';
		let x = 0;

		while (x <= document.cookie.length) {
			const y = x + nameOfCookie.length;
			let endOfCookie = document.cookie.indexOf(';', y);
			if (document.cookie.substring(x, y) === nameOfCookie) {
				if (endOfCookie === -1) endOfCookie = document.cookie.length;

				return unescape(document.cookie.substring(y, endOfCookie));
			}

			x = document.cookie.indexOf(' ', x) + 1;

			if (x === 0) break;
		}

		return '';
	}

	const emailCookie = getCookie('email');
	console.log(emailCookie);

	// 서버통신(GET);
	useEffect(() => {
		async function getUserData() {
			try {
				const response = await axios.get(
					`http://localhost:8080/api/user/${emailCookie}`,
				);
				setUser(response.data);
				console.log(response.data);
			} catch (err) {
				console.log(err);
			}
		}
		getUserData();
	}, []);

	return (
		<M.Wrapper>
			<SideMenu
				userState={
					!user.completed // 임시
						? `${user.userId} 멘토님`
						: `${user.userId} 님`
				}
			></SideMenu>
			<Outlet />
		</M.Wrapper>
	);
}

export default MyPageLayout;
