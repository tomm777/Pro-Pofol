import React, { useState } from 'react';
import * as S from './index.styles';

function CalendarHeader({ currentDate, handleMonthChange }) {
	// 이전 달 클릭
	const handleLeftClick = () => {
		const newDate = new Date(currentDate);
		newDate.setMonth(newDate.getMonth() - 1);
		handleMonthChange(newDate);
	};

	// 다음 달 클릭
	const handleRightClick = () => {
		const newDate = new Date(currentDate);
		newDate.setMonth(newDate.getMonth() + 1);
		handleMonthChange(newDate);
	};

	const year = currentDate.getFullYear();

	const month = currentDate.toLocaleString('default', { month: 'long' });

	return (
		<S.Container>
			<S.ArrowButton onClick={handleLeftClick}>
				<span className="material-symbols-outlined">chevron_left</span>
			</S.ArrowButton>
			<p>{`${year}년 ${month}`}</p>
			<S.ArrowButton onClick={handleRightClick}>
				<span className="material-symbols-outlined">chevron_right</span>
			</S.ArrowButton>
		</S.Container>
	);
}

export default CalendarHeader;
