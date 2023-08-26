import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './EditComments.styles';
import Button from '../../../components/@common/Button/Button';

function EditComments() {
	return (
		<S.Container>
			<S.Title>
				<p>댓글</p>
				<span>3</span>
			</S.Title>

			<S.CommentWrapper>
				<textarea placeholder="댓글을 등록하세요."></textarea>
				<S.ButtonWrapper>
					<Button variant={'add'} size={'normal'} shape={'medium'}>
						댓글 등록
					</Button>
				</S.ButtonWrapper>
			</S.CommentWrapper>
		</S.Container>
	);
}

export default EditComments;
