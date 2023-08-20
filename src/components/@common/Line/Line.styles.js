import { css, styled } from 'styled-components';

const sizeCSS = {
	small: css`
		height: 1px;
	`,
	medium: css`
		height: 2px;
	`,
};

export const Line = styled.div`
	${({ size }) => sizeCSS[size]}
	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
`;
