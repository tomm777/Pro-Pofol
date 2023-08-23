import { atom } from 'recoil';

export const mentoringItem = atom({
	key: 'mentoringItem',
	default: {
		total: [],
		apply: [],
		completed: [],
		refuse: [],
	},
});
