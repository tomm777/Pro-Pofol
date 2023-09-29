import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './StudyPage.styles';

import Slider from 'components/@common/Slider';
import SignupModal from 'components/pages/SignUp/Modal/SignUpModal';
import Button from 'components/@common/Button';
import MESSAGE from 'constants/message';
import StudyCategory from 'components/pages/StudyPage/StudyCategory/StudyCategory';
import PostCardList from 'components/pages/StudyPage/PostCardList/PostCardList';

import useApi from 'hooks/useApi';

import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/index.atom';

function StudyPage() {
	const { isAuth, nickName } = useRecoilValue(userAtom);
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();
	const [selectedValues, setSelectedValues] = useState({
		classification: '',
		position: '',
	});

	// 스터디 프로젝트 데이터
	const [data, setData] = useState([]);

	// 글작성 버튼
	const onClickAddPost = () => {
		if (!isAuth) {
			alert(MESSAGE.LOGIN.REQUIRED);
			setOpenModal(true);
		} else {
			navigate('/study/post');
		}
	};

	// 카테고리에 맞는 스터디 프로젝트
	const {
		trigger: triggerProjectStudy,
		isLoading: isLoadingProjectStudy,
		error: errorProjectStudy,
		result: resultProjectStudy,
	} = useApi({
		path: '/projectStudies',
		shouldFetch: true,
	});

	// 카테고리 선택해서 바뀔 때 마다 trigger 호출
	useEffect(() => {
		triggerProjectStudy({
			path: '/projectStudies',
			data: {
				classification: selectedValues.classification,
				position: selectedValues.position,
			},
			applyResult: true,
		});
	}, [selectedValues]);

	// trigger 호출해서 불러오는 데이터가 바뀔 때 마다 새롭게 데이터 set
	useEffect(() => {
		if (resultProjectStudy.projectStudies) {
			setData(resultProjectStudy.projectStudies);
		}
	}, [resultProjectStudy]);

	// 로그인 모달
	const handleSignupClose = () => {
		setOpenModal(false);
	};

	// 스크롤 맨 위로
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<>
			<S.Container>
				<S.PopularContents>
					{/* 인기 스터디, 프로젝트 */}
					<S.TitleWrapper>
						<S.TopBox>
							<S.Title>
								<img
									src="assets/img/icons/fire.svg"
									alt="불 아이콘"
								/>
								{isAuth && nickName
									? `${nickName} 님 추천 스터디 / 프로젝트`
									: '추천 스터디 / 프로젝트'}
							</S.Title>
							<S.SubTitle>
								{isAuth
									? '포지션에 맞는 스터디, 프로젝트를 확인해 보세요!'
									: '로그인하고 스터디, 프로젝트에 참여해 보세요!'}
							</S.SubTitle>
						</S.TopBox>
						{/*  */}
						<Button
							variant={'add'}
							shape={'default'}
							size={'normal'}
							onClick={onClickAddPost}
						>
							글쓰기
						</Button>
					</S.TitleWrapper>

					<S.PopularCardWrapper>
						<Slider
							$background="whiteBackground"
							url={
								isAuth
									? '/projectStudies/recommend/recommendProjectStudy'
									: '/projectStudies/recommend/recommendProjectStudyForGuest'
							}
							slidesToShow={4}
						/>
					</S.PopularCardWrapper>
				</S.PopularContents>

				<S.StudyContents>
					<S.TitleWrapper>
						<S.Title>
							<img
								src="assets/img/icons/stars.svg"
								alt="별 아이콘"
							/>{' '}
							함께 성장할 동료를 찾아보세요!
						</S.Title>
					</S.TitleWrapper>

					{/* 필터 카테고리 버튼 영역 */}
					<S.CategoryContainer>
						<StudyCategory
							setData={setData}
							selectedValues={selectedValues}
							setSelectedValues={setSelectedValues}
						/>
						<PostCardList data={data} />
					</S.CategoryContainer>
				</S.StudyContents>
			</S.Container>

			{openModal && <SignupModal onClose={handleSignupClose} />}
		</>
	);
}

export default StudyPage;
