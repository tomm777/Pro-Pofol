import React, { useState } from 'react';
import * as S from './index.styles';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import CalendarInput from './CalendarInput';

function Calendar({ selectedCalendarDate, setSelectedCalendarDate }) {
	const [isOpen, setIsOpen] = useState(false);

	// 달력 아이콘 버튼
	const toggleCalendar = () => {
		setIsOpen(!isOpen);
	};

	// 선택한 날짜 ****
	// const [selectedDate, setSelectedDate] = useState(selectedCalendarDate);

	// console.log('상위 컴포넌트에서 선택해온 날짜', selectedCalendarDate);
	// console.log('캘린더에서 선택한 날짜', selectedDate);

	// Q. 캘린더 컴포넌트에서 선택한 날짜값을 캘린더 상위 컴포넌트 상태에서 업데이트 시켜주려면,
	// 	  상위 컴포넌트의 state를 가져와서 캘린더 컴포넌트에서 사용해야 하는데 이런 사용법이 맞는지.
	//    => 그러면 캘린더 컴포넌트는 사용할 때마다 무조건 부모 컴포넌트로부터 선택한 날짜를 관리하는 state를 가져와야 하는 건가요?
	//    (현 상황에서는 편집 페이지에 있는 setSelectedCalendarDate state를 캘린더에서 선택한 날짜로 업데이트 해줘야 합니다.)

	// Q. +) 상위 컴포넌트에서 state를 따로 관리해주면 로직이 또 달라지는데... 이 부분 어떻게 작성해야 할지 모르겠습니다.
	//		src/pages/StudyPage/StudyEditPost/index.js 에서 캘린더 사용 중인데,
	// 		selectedCalendarDate 라는 state를 하나 만들어서 사용하다보니.. selectedOptions state에 담아줄 때 어떻게 관리하면 좋을 지 모르겠습니다.

	// Q. 그리고 게시글 저장하면 날짜가 하루 줄어들어서 DB에 저장되는 문제가 생깁니다...😭😭😭😭

	const handleMonthChange = month => {
		setSelectedCalendarDate(month);
	};

	return (
		<S.Container>
			<CalendarInput
				selectedDate={selectedCalendarDate}
				toggleCalendar={toggleCalendar}
			/>

			{isOpen && (
				<S.CalendarContent>
					<CalendarHeader
						selectedDate={selectedCalendarDate}
						handleMonthChange={handleMonthChange}
					/>
					<CalendarBody
						selectedDate={selectedCalendarDate}
						setSelectedDate={setSelectedCalendarDate}
						setIsOpen={setIsOpen}
					/>
				</S.CalendarContent>
			)}
		</S.Container>
	);
}

export default Calendar;
