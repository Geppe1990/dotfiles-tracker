export interface ElectronAPI {
	readDotfiles: () => Promise<string[]>;
	readDotfile: (dotfile: string) => Promise<string>;
}

declare global {
	interface Window {
		electron: ElectronAPI;
	}
}
