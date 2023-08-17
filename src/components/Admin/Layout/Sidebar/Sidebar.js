import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AuditOutlined,
	FormOutlined,
	ReadOutlined,
	TagsOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Space, theme } from 'antd';
import { AdminSider, LogoBox } from './Sidebar.styles';
import AdminTable from '../../Table/AdminTable';

const Sidebar = () => {
	const navigate = useNavigate();
	// Dummy Data
	const navList = [
		'User',
		'Mentor Apply',
		'Category',
		'Study/Project',
		'Mentor Baord',
	];
	const removeHandler = key => {
		console.log(key);
	};

	// useEffect(() => {
	// 	console.log('render');
	// }, []);
	// 총 페이지
	const totalPages = 100;
	// Sider Nav Tabs
	const items = [
		TeamOutlined,
		AuditOutlined,
		TagsOutlined,
		ReadOutlined,
		FormOutlined,
	].map((icon, index) => ({
		key: navList[index],
		icon: React.createElement(icon),
		label: `${navList[index]}`,
	}));

	const [currentView, setCurrentView] = useState('User');

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const onClickHanlder = e => {
		// Tabs key로 구분
		console.log(e.key);
		// setCurrentView(e.key);
		if (e.key === 'User') {
			navigate('/admin');
			return;
		}
		navigate(`/admin/${e.key}`);
	};

	return (
		<>
			<AdminSider
				style={{
					background: colorBgContainer,
				}}
			>
				<LogoBox>
					<img src="/assets/img/logo/logo.svg" alt="Logo"></img>
				</LogoBox>
				{/* <div className="demo-logo-vertical" /> */}
				{/* <div/> */}
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={currentView}
					items={items}
					onClick={e => {
						onClickHanlder(e);
					}}
				/>
			</AdminSider>
		</>
	);
};

export default Sidebar;
