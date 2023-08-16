import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';

function App() {
	return (
		<>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<RouterProvider router={router} />
				</ThemeProvider>
			</RecoilRoot>
		</>
	);
}

export default App;
