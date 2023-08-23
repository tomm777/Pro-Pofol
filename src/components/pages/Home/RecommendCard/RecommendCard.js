import * as H from './Recommend.styles';

RecommendCard.defaultProps = {
	profileimage: './assets/img/profile/profile.png',
	nickname: '닉네임',
	company: '회사',
	position: '프론트엔드 개발',
	career: 1,
};

export default function RecommendCard(props) {
	return (
		<H.Container href={props.link}>
			<H.ProfileImage src={props.profileimage} alt="프로필 이미지" />
			<H.NickName>{props.name}</H.NickName>
			<H.Company>{props.company}</H.Company>
			<H.Position>{props.position}</H.Position>
			<H.Career>경력 {props.career}년</H.Career>
		</H.Container>
	);
}
