import styled from 'styled-components';

export const SliderWrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	overflow: hidden;
	margin: auto;
`;

export const SlideContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	transition: transform 0.5s ease-in-out;
	gap: 20px;
`;

export const Controls = styled.div`
	position: absolute;
	top: 44%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Button = styled.button`
	background-color: white;
	width: 25px;
	height: 25px;
	border-radius: 100%;
	cursor: pointer;
	box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.2);
	> img {
		width: 30%;
	}
`;
