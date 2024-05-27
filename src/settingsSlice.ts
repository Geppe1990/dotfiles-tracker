import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
	theme: string;
	fontSize: number;
	syntax: string;
	fontFamily: string;
	tabSize: number;
	showLineNumbers: boolean;
}

const loadSettingsFromLocalStorage = (): SettingsState => {
	const theme = localStorage.getItem('theme') || 'light';
	const fontSize = localStorage.getItem('fontSize');
	const syntax = localStorage.getItem('syntax') || 'bash';
	const fontFamily = localStorage.getItem('fontFamily') || 'monospace';
	const tabSize = localStorage.getItem('tabSize');
	const showLineNumbers = localStorage.getItem('showLineNumbers');

	return {
		theme,
		fontSize: fontSize ? parseInt(fontSize) : 14,
		syntax,
		fontFamily,
		tabSize: tabSize ? parseInt(tabSize) : 4,
		showLineNumbers: showLineNumbers === null ? true : JSON.parse(showLineNumbers),
	};
};

const initialState: SettingsState = loadSettingsFromLocalStorage();

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		updateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
			const newSettings = { ...state, ...action.payload };

			// Salva i nuovi valori su localStorage
			if (action.payload.theme !== undefined) {
				localStorage.setItem('theme', newSettings.theme);
			}
			if (action.payload.fontSize !== undefined) {
				localStorage.setItem('fontSize', newSettings.fontSize.toString());
			}
			if (action.payload.syntax !== undefined) {
				localStorage.setItem('syntax', newSettings.syntax);
			}
			if (action.payload.fontFamily !== undefined) {
				localStorage.setItem('fontFamily', newSettings.fontFamily);
			}
			if (action.payload.tabSize !== undefined) {
				localStorage.setItem('tabSize', newSettings.tabSize.toString());
			}
			if (action.payload.showLineNumbers !== undefined) {
				localStorage.setItem('showLineNumbers', JSON.stringify(newSettings.showLineNumbers));
			}

			return newSettings;
		},
	},
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
