const VALIDATE = {
	// eslint-disable-next-line no-useless-escape
	email: /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
	password:
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
	phone: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
	nickName: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/,
};

export default VALIDATE;
