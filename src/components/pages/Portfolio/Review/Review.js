import * as S from './Review.styles';

import ReviewComment from './ReviewComment/ReviewComment';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Review() {
	const [review, setReview] = useState([]);

	useEffect(() => {
		const getReview = async () => {
			const res = await axios.get('/mock/review.json');
			const data = res.data.data;

			setReview([...data]);
		};

		getReview();
	}, []);

	return (
		<S.ReviewBox>
			<S.TopBox>
				<strong>후기</strong>
				<span>{review.length}</span>
			</S.TopBox>

			<S.CommentBox>
				<ReviewComment review={review} />
			</S.CommentBox>
		</S.ReviewBox>
	);
}

export default Review;
