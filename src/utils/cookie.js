export const getCookie = targetKey => {
	const cookies = document.cookie.split('; ').map(cookie => {
		const [key, value] = cookie.split('=');
		return {
			[key]: value,
		};
	});

	const cookiesObject = Object.assign({}, ...cookies);

	return cookiesObject[targetKey];
};
