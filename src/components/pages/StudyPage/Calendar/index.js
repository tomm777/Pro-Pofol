import React, { useState } from 'react';
import * as S from './index.styles';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import CalendarInput from './CalendarInput';

function Calendar({ selectedCalendarDate, setSelectedCalendarDate }) {
	const [isOpen, setIsOpen] = useState(false);
	// 현재 날짜 / 시간
	const [currentDate, setCurrentDate] = useState(selectedCalendarDate);

	// 차례대로, 유저가 선택한 연, 월, 일
	const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
	const [selectedMonth, setSelectedMonth] = useState(
		currentDate.getMonth() + 1,
	);
	const [selectedDate, setSelectedDate] = useState(new Date().getDate());

	const handleMonthChange = newDate => {
		setCurrentDate(newDate);
	};

	const handleDateInputChange = newDate => {
		setSelectedDate(newDate);
		// 상위 컴포넌트에서 저장하는 유저가 선택한 값
		setSelectedCalendarDate(newDate);
	};

	// 달력 아이콘 버튼
	const toggleCalendar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<S.Container>
			<CalendarInput
				setSelectedCalendarDate={setSelectedCalendarDate}
				selectedCalendarDate={selectedCalendarDate}
				selectedDate={selectedDate}
				selectedMonth={selectedMonth}
				selectedYear={selectedYear}
				toggleCalendar={toggleCalendar}
			/>

			{isOpen && (
				<S.CalendarContent>
					<CalendarHeader
						currentDate={currentDate}
						onMonthChange={handleMonthChange}
					/>
					<CalendarBody
						currentDate={currentDate}
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						selectedYear={selectedYear}
						setSelectedYear={setSelectedYear}
						selectedMonth={selectedMonth}
						setSelectedMonth={setSelectedMonth}
						handleDateInputChange={handleDateInputChange}
						setIsOpen={setIsOpen}
					/>
				</S.CalendarContent>
			)}
		</S.Container>
	);
}

export default Calendar;
