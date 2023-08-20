import * as M from './Home.styles';
import RecommendCard from '../../components/pages/Home/RecommendCard/RecommendCard';
import PopularCard from '../../components/@common/Card/Card';
import RollingSlider from './SlideBanner/SlideBanner';

function Home() {
	return (
		<>
			<M.Wrap>
				<M.Content>
					<RollingSlider />
					{/* <M.SlideBanner>
						<img src="./assets/img/banner/banner01.png"></img>
					</M.SlideBanner> */}
					<M.RecommendMentor>
						<M.Title>👀 000님에게 추천하는 멘토</M.Title>
						<M.RecommendCards>
							<RecommendCard link="" />
							<RecommendCard link="#" />
							<RecommendCard link="#" />
							<RecommendCard link="#" />
							<RecommendCard link="#" />
						</M.RecommendCards>
					</M.RecommendMentor>
					<M.NewStudy>
						<M.TitleBox>
							<M.Title>🔥 방금 올라온 스터디/ 프로젝트</M.Title>
							<M.ViewAll>
								전체보기
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="5"
									height="11"
									viewBox="0 0 5 11"
									fill="none"
								>
									<path
										d="M0 10.5V0.5L5 5.5L0 10.5Z"
										fill="#3377FF"
									/>
								</svg>
							</M.ViewAll>
						</M.TitleBox>
						<M.SlideStudyCard></M.SlideStudyCard>
					</M.NewStudy>
					<M.PopularMento>
						<M.Title>✨ 지금 인기 있는 멘토</M.Title>
						<M.PopularCards>
							<PopularCard background="whiteBackground" />
							<PopularCard background="whiteBackground" />
							<PopularCard background="whiteBackground" />
							<PopularCard background="whiteBackground" />
						</M.PopularCards>
					</M.PopularMento>
				</M.Content>
			</M.Wrap>
		</>
	);
}

export default Home;
