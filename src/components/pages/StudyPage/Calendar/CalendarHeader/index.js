import React, { useCallback, useMemo } from 'react';
import * as S from './index.styles';

function CalendarHeader({ selectedDate, handleMonthChange }) {
	const handleClickNav = useCallback(
		direction => {
			const newDate = new Date(selectedDate);
			newDate.setMonth(newDate.getMonth() + direction);
			handleMonthChange(newDate);
		},
		[selectedDate, handleMonthChange],
	);

	const year = useMemo(() => selectedDate.getFullYear(), [selectedDate]);
	const month = useMemo(
		() => selectedDate.toLocaleString('default', { month: 'long' }),
		[selectedDate],
	);

	return (
		<S.Container>
			<S.ArrowButton onClick={() => handleClickNav(-1)}>
				<span className="material-symbols-outlined">chevron_left</span>
			</S.ArrowButton>
			<p>{`${year}년 ${month}`}</p>
			<S.ArrowButton onClick={() => handleClickNav(1)}>
				<span className="material-symbols-outlined">chevron_right</span>
			</S.ArrowButton>
		</S.Container>
	);
}

export default CalendarHeader;
