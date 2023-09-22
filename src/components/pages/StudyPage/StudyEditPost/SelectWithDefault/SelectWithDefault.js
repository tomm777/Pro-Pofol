import React, { useState } from 'react';
import * as S from './SelectWithDefault.styles';

function SelectWithDefault({ onChange, options, selectText, name }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = option => {
		setSelectedOption(option);
		setIsOpen(!isOpen);
		onChange(name, option.name);
	};

	const toggleSelect = () => {
		setIsOpen(!isOpen);
	};

	return (
		<S.Container>
			<S.SelectDefaultOptionBox onClick={toggleSelect}>
				<S.SelectDefaultOption
					value={selectedOption ? selectedOption.name : ''}
					onChange={onChange}
				>
					{selectedOption
						? selectedOption.name
						: `${selectText}을(를) 선택하세요`}
				</S.SelectDefaultOption>

				<span className="material-symbols-outlined">
					{isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
				</span>
			</S.SelectDefaultOptionBox>
			{isOpen && (
				<S.OptionList>
					{options.map(el => (
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
