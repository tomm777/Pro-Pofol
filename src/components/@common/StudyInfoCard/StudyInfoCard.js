import * as H from './StudyInfoCard.styles';
import Chip from '../Chip/Chip';

function StudyInfoCard({
	category,
	title,
	languages,
	numberPeople,
	position,
	deadline,
	background,
	postId,
}) {
	return (
		<H.Container>
			<H.StudyInfoCard
				href={`/study/detail/${postId}`}
				background={background}
			>
				<Chip category={category} />
				<H.Title>{title}</H.Title>
				<H.LanguagesWrapper>
					{languages.map((lang, idx) => {
						return (
							<H.Language
								key={`${lang}-${idx}-${title}`}
								lang={lang}
							>
								{lang}
							</H.Language>
						);
					})}
				</H.LanguagesWrapper>
				<H.DetailInfoWrapper>
					<div>
						<H.NumberPeople>{numberPeople}명</H.NumberPeople>
						<span>|</span>
						{position.map((pos, idx) => (
							<H.Position key={`${pos}-${idx}-${title}`}>
								{pos}
							</H.Position>
						))}
					</div>
					<H.Deadline>마감 {deadline}일 전</H.Deadline>
				</H.DetailInfoWrapper>
			</H.StudyInfoCard>
		</H.Container>
	);
}

export default StudyInfoCard;
