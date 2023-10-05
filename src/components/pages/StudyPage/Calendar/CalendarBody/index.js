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
	// 현재 월에 표시되어야 하는 날짜 배열
	const [daysArr, setDaysArr] = useState([]);
	const [firstDayOfWeek, setFirstDayOfWeek] = useState(0);

	useEffect(() => {
		// 월의 마지막 날짜
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

		// 일과 월에 해당하는 요일 가져옴
		const firstDay = new Date(year, month, 1);

		// firstDay에서 얻은 요일 정보를 저장 ==> 해당 월의 첫번째 날이 무슨 요일인지 알 수 있음
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

	// 주
	const weeks = [];
	// 각 주에 해당하는 일자
	let week = [];

	// 첫 주에서 시작하는 빈칸 생성 ==> firstDayOfWeek 변수에 저장된 값에 따라 해당 주의 시작 위치 결정. 수요일 부터 시작하면 빈칸 3개
	for (let i = 0; i < firstDayOfWeek; i++) {
		week.push(<S.CalendarCell key={`${i}`}></S.CalendarCell>);
	}

	daysArr.forEach((day, idx) => {
		const isCurrentMonth = true;

		// 해당 날짜가 선택된 날짜인지
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
			// 한 주가 완성되거나 마지막 날짜일 때
			(firstDayOfWeek + idx + 1) % 7 === 0 ||
			idx === daysArr.length - 1
		) {
			// 해당 주를 weeks 배열에 추가.
			// week 배열 초기화
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
