import React, { useEffect, useState } from 'react';
import * as S from './index.styles';

function CalendarBody({
	currentDate,
	setSelectedDate,
	selectedDate,
	setSelectedYear,
	setSelectedMonth,
	handleDateInputChange,
	setIsOpen,
}) {
	const [daysArr, setDaysArr] = useState([]);
	const [firstDayOfWeek, setFirstDayOfWeek] = useState(0);

	useEffect(() => {
		const getDaysInMonth = (year, month) => {
			return new Date(year, month + 1, 0).getDate();
		};
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();

		const daysInMonth = getDaysInMonth(year, month);

		const newDaysArray = Array.from(
			{ length: daysInMonth },
			(_, index) => index + 1,
		);

		setDaysArr(newDaysArray);

		const firstDay = new Date(year, month, 1);
		setFirstDayOfWeek(firstDay.getDay());
	}, [currentDate]);

	const handleDateClick = day => {
		const newDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day,
			new Date().getHours(),
			new Date().getMinutes(),
			new Date().getSeconds(),
		);

		handleDateInputChange(newDate);

		setSelectedDate(day);
		setSelectedYear(currentDate.getFullYear());
		setSelectedMonth(currentDate.getMonth() + 1);
		setIsOpen(false);
	};

	// 하단 로직 ************************
	const weeks = [];
	let week = [];

	for (let i = 0; i < firstDayOfWeek; i++) {
		week.push(<S.CalendarCell key={`${i}`}></S.CalendarCell>);
	}

	daysArr.forEach((day, idx) => {
		const isCurrentMonth = true;
		const isSelected = selectedDate === day;

		week.push(
			<S.CalendarCell
				key={idx}
				$isCurrentMonth={isCurrentMonth}
				$isSelected={isSelected}
				onClick={() => isCurrentMonth && handleDateClick(day)}
			>
				{isCurrentMonth ? day : ''}
			</S.CalendarCell>,
		);

		if (
			(firstDayOfWeek + idx + 1) % 7 === 0 ||
			idx === daysArr.length - 1
		) {
			weeks.push(<tr key={weeks.length}>{week}</tr>);
			week = [];
		}
	});

	return (
		<S.Container>
			<S.CalendarTable>
				<S.CalendarTableHeader>
					<tr>
						{['일', '월', '화', '수', '목', '금', '토'].map(
							(dayName, index) => (
								<th key={index}>{dayName}</th>
							),
						)}
					</tr>
				</S.CalendarTableHeader>
				<S.CalendarTableBody>{weeks}</S.CalendarTableBody>
			</S.CalendarTable>
		</S.Container>
	);
}

export default CalendarBody;
