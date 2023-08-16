import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import GlobalStyles from './Styles/global';

function App() {
	return (
		<>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</ThemeProvider>
			</RecoilRoot>
		</>
	);
}

export default App;
