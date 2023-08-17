import { useEffect, useState } from 'react';
import { AdminContent } from '../Home/Admin.styles';
import AdminTable from '../../../Components/Admin/Table/AdminTable';
import { Space, theme } from 'antd';

const AdminCategory = () => {
	const data = [
		{
			key: '1',
			name: '김현규',
			nickname: '닉넴1',
			email: 'eilce1@naver.com',
		},
		{
			key: '2',
			name: '김기범',
			nickname: '닉넴2',
			email: 'eilce2@naver.com',
		},
		{
			key: '3',
			name: '조아연',
			nickname: '닉넴3',
			email: 'eilce3@naver.com',
		},
		{
			key: '4',
			name: '이헤진',
			nickname: '닉넴4',
			email: 'eilce4@naver.com',
		},
		{
			key: '5',
			name: '예은선',
			nickname: '닉넴5',
			email: 'eilce5@naver.com',
		},
		{
			key: '6',
			name: '박민준',
			nickname: '닉넴6',
			email: 'eilce@naver.com',
		},
	];
	const columns = [
		{
			title: '번호',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: '이름',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '닉네임',
			dataIndex: 'nickname',
			key: 'nickname',
		},
		{
			title: '이메일',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: '버튼',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => removeHandler(record.key)}>삭제</a>
				</Space>
			),
		},
	];
	const modifiedData = data.map((item, index) => ({
		...item,
		key: String(index + 1), // 번호 값을 index로부터 생성
	}));
	const [tableData, setTableData] = useState(modifiedData);
	const removeHandler = () => {
		console.log('Remove');
	};

	useEffect(() => {
		console.log('카테고리 페이지');
	}, []);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AdminContent background={colorBgContainer}>
			<AdminTable
				columns={columns}
				dataSource={tableData}
				totalPages={0}
			/>
		</AdminContent>
	);
};
export default AdminCategory;
