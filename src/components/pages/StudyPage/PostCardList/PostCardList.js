import React, { useState, useEffect, useRef } from 'react';
import PostCard from '../PostCard/PostCard';
import * as S from './PostCardList.styles';
import LoadingBar from 'components/@common/Loading';
import EmptyMessage from 'components/@common/EmptyMessage';

function PostCardList({ data, observerElement }) {
	console.log(data);
	return (
		<>
			<S.PostCardContainer>
				{/* {isLoadingProjectStudy && !data.length && <LoadingBar />} */}
				{/* {!isLoadingProjectStudy && !data.length && <EmptyMessage />} */}
				{Array.isArray(data) && data.length > 0 && (
					<>
						{data.map((data, idx) => (
							<div key={data._id + idx}>
								<PostCard data={data} />
							</div>
						))}

						<div
							style={{
								height: '10px',
								border: 'none',
							}}
							ref={observerElement}
						/>
					</>
				)}
			</S.PostCardContainer>
		</>
	);
}

export default PostCardList;
