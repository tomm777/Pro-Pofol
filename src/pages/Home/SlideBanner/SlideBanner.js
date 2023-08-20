import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const IndicatorContainer = styled.div`
	position: absolute;
	bottom: -16px;
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Indicator = styled.button`
	width: 8px;
	height: 8px;
	margin: 0 5px;
	padding: 0;
	background-color: ${({ active }) => (active ? '#3377FF' : '#C8C8C8')};
	border: 1px solid ${({ active }) => (active ? '#3377FF' : '#C8C8C8')};
	border-radius: 50%;
	cursor: pointer;
	outline: none;
`;

const SliderContainer = styled.div`
	position: relative;
	width: 1080px;
	height: 300px;
	margin-bottom: 64px;
`;

const SliderItem = styled.div`
	position: absolute;
	top: 0;
	left: 100%;
	display: none;
	width: 1080px;
	height: 300px;
	overflow: hidden;
	transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	${({ active }) =>
		active &&
		css`
			left: 0;
			display: block;
		`}
	${({ prev }) =>
		prev &&
		css`
			left: -100%;
		`}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const RollingSlider = () => {
	const images = [
		'./assets/img/banner/banner01.png',
		'./assets/img/banner/banner02.png',
		'./assets/img/banner/banner03.png',
		'./assets/img/banner/banner04.png',
	];
	const [activeIndex, setActiveIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(images.length - 1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setPrevIndex(activeIndex);
			setActiveIndex(prev => (prev + 1) % images.length);
		}, 4000);
		return () => clearTimeout(timer);
	}, [activeIndex, images.length]);

	return (
		<SliderContainer>
			{images.map((src, index) => (
				<SliderItem
					key={src}
					active={index === activeIndex}
					prev={index === prevIndex}
				>
					<img src={src} alt={`배너이미지 ${index + 1}`} />
				</SliderItem>
			))}
			<IndicatorContainer>
				{images.map((_, index) => (
					<Indicator
						key={index}
						active={index === activeIndex}
						onClick={() => {
							setPrevIndex(activeIndex);
							setActiveIndex(index);
						}}
					/>
				))}
			</IndicatorContainer>
		</SliderContainer>
	);
};

export default RollingSlider;
