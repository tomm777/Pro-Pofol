import React, { useState, useEffect } from 'react';
import * as S from './index.styles';

function CalendarInput({
	selectedDate,
	selectedMonth,
	selectedYear,
	toggleCalendar,
}) {
	// 날짜 형식 변환
	const formatDate = (year, month, date) => {
		const formattedMonth = `${month < 10 ? '0' : ''}${month}`;
		const formattedDate = `${date < 10 ? '0' : ''}${date}`;
		return `${year}-${formattedMonth}-${formattedDate}`;
	};

	// Input에 들어가는 날짜
	const [inputValue, setInputValue] = useState(
		formatDate(selectedYear, selectedMonth, selectedDate),
	);

	const handleDateChange = date => {
		setInputValue(date);
	};

	useEffect(() => {
		setInputValue(formatDate(selectedYear, selectedMonth, selectedDate));
	}, [selectedYear, selectedMonth, selectedDate, inputValue]);

	return (
		<S.Container>
			<span
				className="material-symbols-outlined"
				onClick={toggleCalendar}
			>
				calendar_month
			</span>
			<input
				type="text"
				readOnly
				value={inputValue}
				onChange={e => handleDateChange(e.target.value)}
			/>
		</S.Container>
	);
}

export default CalendarInput;
