import React, { useState } from 'react';
import * as S from './index.styles';

function CalendarHeader({ selectedDate, handleMonthChange }) {
	// 이전 달 클릭
	const handleLeftClick = () => {
		const newDate = new Date(selectedDate);
		newDate.setMonth(newDate.getMonth() - 1);
		handleMonthChange(newDate);
	};

	// console.log(selectedDate)

	// 다음 달 클릭
	const handleRightClick = () => {
		const newDate = new Date(selectedDate);
		newDate.setMonth(newDate.getMonth() + 1);
		handleMonthChange(newDate);
	};

	const year = selectedDate.getFullYear();
	const month = selectedDate.toLocaleString('default', { month: 'long' });

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
