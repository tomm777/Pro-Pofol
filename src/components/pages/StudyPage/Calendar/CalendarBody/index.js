import React, { useEffect, useState } from 'react';
import * as S from './index.styles';

function CalendarBody({ selectedDate, setSelectedDate, setIsOpen }) {
	const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
	const year = selectedDate.getFullYear();
	const month = selectedDate.getMonth();
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
	const firstDayOfMonth = new Date(year, month, 1).getDay();
	const [selectedDay, setSelectedDay] = useState(null);

	const handleDateClick = day => {
		const selectedDay = new Date(year, month, day);
		setSelectedDate(selectedDay);
		setSelectedDay(day);
		setIsOpen(false);
	};

	// 달의 시작에서 앞에 빈칸
	const emptyCells = Array.from({ length: firstDayOfMonth }, (_, i) => (
		<S.CalendarCell key={`empty-${i}`} />
	));

	// 날짜
	const dayCells = days.map((day, idx) => (
		<S.CalendarCell
			key={idx}
			onClick={() => handleDateClick(day)}
			$isSelected={selectedDate.getDate() === day}
		>
			{day}
		</S.CalendarCell>
	));

	// 빈칸과 날짜를 합쳐서 새로운 배열로 만든다. => 일주일 단위로 끊음
	const weekRows = [];
	const totalCells = emptyCells.concat(dayCells);
	for (let i = 0; i < totalCells.length; i += 7) {
		const week = totalCells.slice(i, i + 7);
		weekRows.push(<tr key={i}>{week}</tr>);
	}

	// console.log(emptyCells, firstDayOfMonth);

	return (
		<S.Container>
			<S.CalendarTable>
				<S.CalendarTableHeader>
					<tr>
						{dayNames.map((dayName, index) => (
							<th key={index}>{dayName}</th>
						))}
					</tr>
				</S.CalendarTableHeader>
				<S.CalendarTableBody>{weekRows}</S.CalendarTableBody>
			</S.CalendarTable>
		</S.Container>
	);
}

export default CalendarBody;
