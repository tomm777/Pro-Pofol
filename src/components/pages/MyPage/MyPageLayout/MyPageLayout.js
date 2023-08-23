import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import * as M from './MyPageLayout.Styles';
import axios from 'axios';

function MyPageLayout() {
	const [user, setUser] = useState([]);
	// 서버통신 (GET)
	useEffect(() => {
		async function getUserData() {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos/1',
				);
				setUser(response.data);
			} catch (err) {
				console.log(err);
			}
		}
		getUserData();
	}, []);

	return (
		<>
			<M.Wrapper>
				<SideMenu
					userState={
						user.completed === true
							? `${user.userId}님`
							: `${user.userId}멘토님`
					}
				></SideMenu>
				<Outlet />
			</M.Wrapper>
		</>
	);
}

export default MyPageLayout;
