import * as S from './ButtonBox.styles';

function ButtonBox() {
	return (
		<S.ButtonBox>
			<div>
				<S.Buttons>전체</S.Buttons>
				<S.Buttons>프론트엔드</S.Buttons>
				<S.Buttons>백엔드</S.Buttons>
				<S.Buttons>Android</S.Buttons>
				<S.Buttons>IOS</S.Buttons>
			</div>
			<div>
				<S.WriteButtons>작성하기</S.WriteButtons>
			</div>
		</S.ButtonBox>
	);
}

export default ButtonBox;
