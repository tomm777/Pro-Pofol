import React, { useState, useEffect } from 'react';
import * as S from './SelectWithDefault.styles';

function SelectWithDefault({ onChange, options, selectText }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = option => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	const toggleSelect = () => {
		setIsOpen(!isOpen);
	};

	return (
		<S.Container>
			<S.SelectDefaultOptionBox onClick={toggleSelect}>
				<S.SelectDefaultOption
					value={selectedOption}
					onChange={onChange}
				>
					{selectedOption
						? selectedOption.name
						: `${selectText}를(을) 선택하세요`}
				</S.SelectDefaultOption>

				{isOpen ? (
					<span className="material-symbols-outlined">
						arrow_drop_up
					</span>
				) : (
					<span className="material-symbols-outlined">
						arrow_drop_down
					</span>
				)}
			</S.SelectDefaultOptionBox>
			{isOpen && (
				<S.OptionList>
					{options.map((el, idx) => (
						<S.Option
							key={el.value}
							onClick={() => handleSelect(el)}
						>
							{el.name}
						</S.Option>
					))}
				</S.OptionList>
			)}
		</S.Container>
	);
}

export default SelectWithDefault;
