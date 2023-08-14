import { RouterProvider } from 'react-router-dom';
import router from './Routes/routing';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<>
			<RecoilRoot>
				<ThemeProvider>
					<RouterProvider router={router} />
				</ThemeProvider>
			</RecoilRoot>
		</>
	);
}

export default App;
