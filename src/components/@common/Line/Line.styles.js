import { css, styled } from 'styled-components';

const sizeCSS = {
	small: css`
		height: 1px;
		margin: 16px 0;
	`,
	medium: css`
		height: 2px;
		margin: 27px 0 32px 0;
	`,
	large: css`
		height: 2px;
		margin: 32px 0;
	`,
	xLarge: css`
		height: 1px;
		margin: 64px 0;
	`,
	full: css`
		height: 2px;
		margin: 42.5px 0 64px 0;
	`,
};

export const Line = styled.div`
	${({ size }) => sizeCSS[size]}
	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
`;
