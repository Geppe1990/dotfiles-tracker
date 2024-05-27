// src/settingsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
	theme: string;
	fontSize: number;
	syntax: string;
	fontFamily: string;
	tabSize: number;
	showLineNumbers: boolean;
}

const initialState: SettingsState = {
	theme: 'light',
	fontSize: 14,
	syntax: 'bash',
	fontFamily: 'monospace',
	tabSize: 4,
	showLineNumbers: true,
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		updateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
