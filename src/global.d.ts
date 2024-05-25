export interface ElectronAPI {
	readDotfiles: () => Promise<string>;
}

declare global {
	interface Window {
		electron: ElectronAPI;
	}
}
