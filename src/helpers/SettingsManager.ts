const SETTINGS_KEY = 'dotfiles-tracker-settings';

export const loadSettings = () => {
	const settings = localStorage.getItem(SETTINGS_KEY);
	return settings ? JSON.parse(settings) : {};
};

export const saveSettings = (settings: any) => {
	localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};
