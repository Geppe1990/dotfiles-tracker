import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import store from '../store';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const root = createRoot(document.getElementById("root"));
root.render(
	<FluentProvider theme={webLightTheme}>
		<Provider store={store}>
			<App />
		</Provider>
	</FluentProvider>
);
