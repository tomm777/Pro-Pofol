import * as S from './Portfolio.styles';

import Line from '../../components/@common/Line/Line';
import MentorCard from '../../components/@common/Card/Card';
import Button from '../../components/@common/Button/Button';
import Category from '../../components/@common/Category/Category';
import useApi from '../../hooks/useApi';
import { useEffect, useState } from 'react';

function Portfolio() {
	// 버튼 클릭시 렌더링 되는 데이터 다르게 하는 로직 작성
	// infinite scroll → intersection observer 사용...? 모르겠음

	// 로그인한 유저가 멘토인지 아닌지 검사하는 로직
	const [isMentor, setIsMentor] = useState(false);

	const { result, error } = useApi({
		path: '/user', // 유저인지 멘토인지 확인할 수 있는 api 필요
		shouldFetch: true,
	});

	useEffect(() => {
		const checkMentor = () => {
			if (result.role === 'user') {
				setIsMentor(true);
			}
		};

		checkMentor();
	}, []);

	return (
		<S.PortfolioBox>
			<S.BannerBox>
				{/* banner */}
				<S.BannerImage src="./assets/img/banner/banner02.png" />

				{isMentor && (
					<S.ApplyBox>
						<a href="/portfolio/apply">
							<Button
								variant={'add'}
								shape={'default'}
								size={'normal'}
							>
								작성하기
							</Button>
						</a>
					</S.ApplyBox>
				)}
			</S.BannerBox>

			<Category variant={'cancel'} shape={'round'} size={'medium'} />

			<div>
				{/* 지금 인기 있는 멘토들 제목 */}
				<S.TitleBox>
					<span>✨ 지금 인기 있는 멘토</span>
				</S.TitleBox>

				{/* 지금 인기 있는 멘토들 목록 */}
				<S.MentorCardBox>
					<MentorCard
						variant={'blue'}
						url={'/portfolio/recommend/topMentor'}
					/>
				</S.MentorCardBox>
			</div>

			<Line size={'small'} />

			<S.MentorBox>
				{/* 모든 멘토 제목 */}
				<S.MentorTitleBox>
					<span>🌟 모든 멘토</span>
					<S.Input placeholder="검색어를 입력하세요." />
				</S.MentorTitleBox>

				<S.MentorCardBox>
					<MentorCard variant={'white'} url={'/portfolio'} />
				</S.MentorCardBox>
			</S.MentorBox>
		</S.PortfolioBox>
	);
}

export default Portfolio;
