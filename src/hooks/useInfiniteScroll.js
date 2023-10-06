// import { useState, useEffect, useRef } from 'react';

// // 범용적으로 사용 => 데이터를 불러오는 용도로만 사용하는 것이 아니기 때문에 func 와 같이 이름 수정하는 것
// function useInfiniteScroll(func) {
// 	const observer = useRef();

// 	useEffect(() => {
// 		const options = {
// 			root: null,
// 			rootMargin: '0px',
// 			threshold: 1.0,
// 		};

// 		observer.current = new IntersectionObserver(entries => {
// 			const target = entries[0];
// 			// console.log(target, 'target', entries);
// 			if (target.isIntersecting) {
// 				func();
// 			}
// 		}, options);

// 		return () => {
// 			if (observer.current) {
// 				observer.current.disconnect();
// 			}
// 		};
// 	}, [func]);

// 	const observeElement = useRef(null);
// 	useEffect(() => {
// 		if (observeElement.current && observer.current) {
// 			observer.current.observe(observeElement.current);
// 		}
// 		return () => {
// 			if (observeElement.current && observer.current) {
// 				observer.current.unobserve(observeElement.current);
// 			}
// 		};
// 	}, [observeElement]);

// 	return { observeElement };
// }

// export default useInfiniteScroll;

import { useState, useEffect, useRef } from 'react';

function useInfiniteScroll(loadData, deps) {
	const [targetRef, setTargetRef] = useState(useRef(null));

	const intersectionObserver = new IntersectionObserver(entries => {
		const target = entries[0];
		if (target.isIntersecting) {
			intersectionObserver.unobserve(targetRef.current);
			loadData();
		}
	});

	useEffect(() => {
		if (targetRef?.current) {
			intersectionObserver.observe(targetRef.current);
		}
		return () => {
			if (targetRef?.current && targetRef.current) {
				intersectionObserver.disconnect();
			}
		};
	}, [targetRef.current, ...deps]);

	return { setTargetRef };
}

export default useInfiniteScroll;
