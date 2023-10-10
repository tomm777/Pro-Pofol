import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { sitemapRoutes } from 'data/sitemapRoutes';

const exceptionPaths = [
	'/portfolio/post',
	'/portfolio/edit',
	'/study/detail',
	'/study/edit',
];

const getSeoData = targetPath => {
	const exceptedPath = exceptionPaths.find(
		exceptionPath =>
			targetPath &&
			typeof targetPath === 'string' &&
			targetPath.includes(exceptionPath),
	);
	const { title, desc } = sitemapRoutes.find(
		({ path: sitemapPath }) => sitemapPath === (exceptedPath || targetPath),
	);
	return { title, desc };
};

const targetMetaTags = ['description', 'og:title', 'og:description'];
const Seo = () => {
	const location = useLocation();

	const [seoData, setSeoData] = useState({ title: '', desc: '' });
	const checkSeoData = pathname => {
		setSeoData(getSeoData(pathname));
	};

	useEffect(() => {
		checkSeoData(location.pathname);
	}, [location.pathname]);

	useEffect(() => {
		document.title = seoData.title;
		const metaTags = document.getElementsByTagName('meta');
		Array.from(metaTags).forEach(metaTag => {
			if (targetMetaTags.includes(metaTag.getAttribute('name'))) {
				document.head.removeChild(metaTag);
			}
		});

		const newMetaTag1 = document.createElement('meta');
		newMetaTag1.setAttribute('name', 'description');
		newMetaTag1.setAttribute('content', seoData.desc);
		document.head.append(newMetaTag1);

		const newMetaTag2 = document.createElement('meta');
		newMetaTag2.setAttribute('name', 'og:title');
		newMetaTag2.setAttribute('content', seoData.title);
		document.head.append(newMetaTag2);

		const newMetaTag3 = document.createElement('meta');
		newMetaTag3.setAttribute('name', 'og:description');
		newMetaTag3.setAttribute('content', seoData.desc);
		document.head.append(newMetaTag3);
	}, [seoData]);

	return (
		<Helmet>
			<title>{seoData.title}</title>
			{/* <meta name="description" content={seoData.desc} />
			<meta name="og:title" content={seoData.title} />
			<meta name="og:description" content={seoData.desc} /> */}
			{/* 다른 <meta/> 추가 적용 ..... */}
		</Helmet>
	);
};

export default Seo;
