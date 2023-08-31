import { useEffect, useState } from 'react';
import MentoringPage from '../../../../components/pages/MyPage/RightContent/Mentor/MentoringPage/MentoringPage';
import * as M from './MentoringListPage.styles';
import CardList from '../../../../components/pages/MyPage/RightContent/Mentor/CardList/CardList';
import axios from 'axios';
import { mentoringItem } from '../../../../recoil/atoms/myPage/myPage.atom';
import { useRecoilState } from 'recoil';
import useApi from '../../../../hooks/useApi';

function MentoringListPage() {
	// const [userData, setUserData] = useRecoilState(mentoringItem); // 멘토링 신청 받은 총 내역
	// const [error, setError] = useState(null); // 에러 state

	// 멘토링 신청 정보 담을 state
	const [mentoringData, setMentoringData] = useRecoilState(mentoringItem);
	// 멘토링 신청 정보 통신(GET)
	const { result: mentoringDatas, trigger: mentoringDatasT } = useApi({
		path: `/portfolio/mentor/mentoringRequests`,
		shouldFetch: true,
	});

	// 멘토링 신청 정보가 변경될 때 리렌더링
	useEffect(() => {
		if (mentoringDatas && mentoringDatas.length > 0) {
			setMentoringData(mentoringDatas);
			const totalData = mentoringDatas.filter(
				item => item.status === 'requested',
			);
			const applyData = mentoringDatas.filter(
				item => item.status === 'apply',
			);
			const completedData = mentoringDatas.filter(
				item => item.status === 'completed',
			);
			const refuseData = mentoringDatas.filter(
				item => item.status === 'refuse',
			);
			setMentoringData({
				total: totalData,
				apply: applyData,
				completed: completedData,
				refuse: refuseData,
			});
		}
		// console.log(mentoringData);
	}, [mentoringDatas]);

	return (
		<M.Wrapper>
			<M.LightContent>
				<MentoringPage></MentoringPage>
				<CardList></CardList>
			</M.LightContent>
		</M.Wrapper>
	);
}

export default MentoringListPage;
