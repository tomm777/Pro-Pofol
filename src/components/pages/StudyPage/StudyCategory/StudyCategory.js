import React, { useState, useEffect, useRef } from 'react';
import * as S from './StudyCategory.styles';
import useApi from 'hooks/useApi';

const defaultCategories = [
	{ name: '스터디', id: 0 },
	{ name: '프로젝트', id: 1 },
];

function StudyCategory({ setData, selectedValues, setSelectedValues }) {
	const [position, setPosition] = useState([]);

	// 무한스크롤
	const [limit, setLimit] = useState(6);
	const [currentSkip, setCurrentSkip] = useState(6);

	// 포지션 리스트
	const {
		trigger,
		isLoading: isLoadingPosition,
		error,
		result: positionResult,
	} = useApi({
		path: '/positions',
		shouldFetch: true,
	});

	useEffect(() => {
		if (positionResult.positions) {
			setPosition(positionResult.positions);
		}
	}, [positionResult.positions]);

	// 전체, 스터디, 프로젝트 클릭
	const handleCategoryClick = classificationValue => {
		setLimit(6);
		setCurrentSkip(0);

		setSelectedValues(prev => ({
			...prev,
			classification: classificationValue,
		}));

		if (selectedValues.classificationValue !== classificationValue) {
			setData([]);
		}
	};

	// 포지션 클릭
	const handlePositionClick = positionValue => {
		setLimit(6);
		setCurrentSkip(0);

		setSelectedValues(prev => ({
			...prev,
			position: positionValue,
		}));

		if (selectedValues.position !== positionValue) {
			setData([]);
		}
	};

	return (
		<>
			<S.CategoryList>
				<S.CategoryItem
					onClick={() => handleCategoryClick('')}
					$isSelected={selectedValues.classification === ''}
				>
					전체
				</S.CategoryItem>
				{defaultCategories.map(el => (
					<S.CategoryItem
						key={el.id}
						onClick={() => handleCategoryClick(el.name)}
						$isSelected={selectedValues.classification === el.name}
					>
						{el.name}
					</S.CategoryItem>
				))}
			</S.CategoryList>

			<S.CategoryBottomList>
				<S.PositionCategoryList>
					<S.PositionCategoryItem
						onClick={() => handlePositionClick('')}
						$isSelected={selectedValues.position === ''}
					>
						전체
					</S.PositionCategoryItem>

					{position &&
						position.map(el => (
							<S.PositionCategoryItem
								$isSelected={
									selectedValues.position === el.name
								}
								key={el._id}
								onClick={() => handlePositionClick(el.name)}
							>
								{el.name}
							</S.PositionCategoryItem>
						))}
				</S.PositionCategoryList>
			</S.CategoryBottomList>
		</>
	);
}

export default StudyCategory;
