import EditModal from '../../Modal/Mentor/EditModal/EditModal';
import RefuseModal from '../../Modal/Mentor/RefuseModal/RefuseModal';
import { useState } from 'react';
import * as CCS from './ApplicationCard.styles';
import InfoViewModal from '../../Modal/Mentor/InfoViewModal/InfoViewModal';
import RefuseViewModal from '../../Modal/Mentee/RefuseViewModal/RefuseViewModal';
import InfoEditModal from '../../Modal/Mentee/InfoEditModal/InfoEditModal';
import EditViewModal from '../../Modal/Mentee/EditViewModal/EditViewModal';
import { useRecoilValue } from 'recoil';
import { mentoringItem } from '../../../../../../../recoil/atoms/myPage/myPage.atom';

// 카드 리스트
function ApplicationCard({ categoryKey }) {
	// 모달창 노출 여부 state
	const [infoModalOpenState, setInfoModalOpenState] = useState(false);
	const [editModalOpenState, setEditModalOpenState] = useState(false);
	const [refuseModalOpenState, setRefuseModalOpenState] = useState(false);

	// 모달창 노출
	const showInfoModal = () => {
		setInfoModalOpenState(true);
	};
	const showEditModal = () => {
		setEditModalOpenState(true);
	};
	const showRefuseModal = () => {
		setRefuseModalOpenState(true);
	};

	const mentoringData = useRecoilValue(mentoringItem);
	const totalData = mentoringData.total;
	const applyData = mentoringData.apply;
	const completedData = mentoringData.completed;
	const refuseData = mentoringData.refuse;

	return (
		<>
			{categoryKey === 'apply'
				? applyData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								showEditModal={showEditModal}
								editModalOpenState={editModalOpenState}
								setEditModalOpenState={setEditModalOpenState}
								categoryKey={categoryKey}
							></CardLayout>
						);
				  })
				: categoryKey === 'completed'
				? completedData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								showEditModal={showEditModal}
								editModalOpenState={editModalOpenState}
								setEditModalOpenState={setEditModalOpenState}
								categoryKey={categoryKey}
							></CardLayout>
						);
				  })
				: categoryKey === 'refuse'
				? refuseData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								categoryKey={categoryKey}
							></CardLayout>
						);
				  })
				: totalData.map((item, index) => {
						return (
							<CardLayout
								key={index}
								showInfoModal={showInfoModal}
								infoModalOpenState={infoModalOpenState}
								setInfoModalOpenState={setInfoModalOpenState}
								showRefuseModal={showRefuseModal}
								refuseModalOpenState={refuseModalOpenState}
								setRefuseModalOpenState={
									setRefuseModalOpenState
								}
								categoryKey={categoryKey}
								showEditModal={showEditModal} // 여긴 지워야함
								editModalOpenState={editModalOpenState} // 여긴 지워야함
								setEditModalOpenState={setEditModalOpenState} // 여긴 지워야함
							></CardLayout>
						);
				  })}
		</>
	);
}

export default ApplicationCard;

function CardLayout({
	showInfoModal,
	showEditModal,
	showRefuseModal,
	infoModalOpenState,
	editModalOpenState,
	refuseModalOpenState,
	setInfoModalOpenState,
	setEditModalOpenState,
	setRefuseModalOpenState,
	categoryKey,
}) {
	return (
		<CCS.CardWrapper>
			<CCS.Wrapper>
				<CCS.Title>포트폴리오 리뷰 신청</CCS.Title>
				<CCS.UserBox>
					<CCS.UserImage></CCS.UserImage>
					<CCS.UserInfoBox>
						<CCS.UserName>사용자이름</CCS.UserName>
						<CCS.ApplicationTitle onClick={showInfoModal}>
							신입입니다. 잘부탁드립니다.
						</CCS.ApplicationTitle>
						{infoModalOpenState && (
							<InfoViewModal
								setInfoModalOpenState={setInfoModalOpenState}
							/>
						)}
					</CCS.UserInfoBox>
				</CCS.UserBox>

				<CCS.ButtonBox>
					{categoryKey === 'apply' ? (
						<>
							<CCS.OneButton onClick={showEditModal}>
								첨삭하기
							</CCS.OneButton>
							{editModalOpenState && (
								<EditModal
									setEditModalOpenState={
										setEditModalOpenState
									}
								/>
							)}
						</>
					) : categoryKey === 'completed' ? (
						<>
							<CCS.OneButton onClick={showEditModal}>
								수정하기
							</CCS.OneButton>
							{editModalOpenState && (
								<EditModal
									setEditModalOpenState={
										setEditModalOpenState
									}
								/>
							)}
						</>
					) : categoryKey === 'refuse' ? (
						<>
							<CCS.OneButton
								onClick={() => {
									console.log('거절을 취소하시겠습니까?');
								}}
							>
								거절 취소하기
							</CCS.OneButton>
						</>
					) : (
						<>
							<CCS.RefuseButton onClick={showRefuseModal}>
								거절하기
							</CCS.RefuseButton>
							{refuseModalOpenState && (
								<RefuseModal
									setRefuseModalOpenState={
										setRefuseModalOpenState
									}
								/>
							)}
							<CCS.ApplyButton
								onClick={() => {
									alert('수락하시겠습니까?');
								}}
							>
								수락하기
							</CCS.ApplyButton>
							{editModalOpenState && (
								<EditViewModal
									setEditModalOpenState={
										setEditModalOpenState
									}
								/>
							)}
						</>
					)}
				</CCS.ButtonBox>
			</CCS.Wrapper>
		</CCS.CardWrapper>
	);
}
