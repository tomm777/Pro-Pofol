import React, { useState, useEffect } from 'react';
import * as S from './Chip.styles';

function Chip({ category }) {
	// console.log('category', category);

	return (
		<>
			<S.ChipBox category={category}>
				<S.ChipText>{category}</S.ChipText>
			</S.ChipBox>
		</>
	);
}

export default Chip;
