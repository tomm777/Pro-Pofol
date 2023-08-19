import * as R from './Recommend.styles';

RecommendCard.defaultProps = {
	profileimage: './assets/img/profile/profile.png',
	nickname: '마라탕',
	company: '네이버',
	position: '프론트엔드 개발',
	career: 9,
};

export default function RecommendCard({
	profileimage,
	nickname,
	company,
	position,
	career,
}) {
	return (
		<R.Container>
			<R.ProfileImage src={profileimage} alt="프로필 이미지" />
			<R.NickName>{nickname}</R.NickName>
			<R.Company>{company}</R.Company>
			<R.Position>{position}</R.Position>
			<R.Career>경력 {career}년</R.Career>
		</R.Container>
	);
}
