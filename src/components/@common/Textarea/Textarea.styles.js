import { css, styled } from 'styled-components';

const sizeCSS = {
	regular: css`
		width: 400px;
		height: 130px;
		resize: none;
	`,

	large: css`
		width: 1077px;
		height: 568px;
		resize: none;
	`,
};

export const Textarea = styled.textarea`
	${({ size }) => sizeCSS[size]}
	padding: 12px;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
`;
