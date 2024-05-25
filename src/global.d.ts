export interface ElectronAPI {
	readDotfiles: () => Promise<string[]>;
	readDotfile: (dotfile: string) => Promise<{path: string, content: string,}>;
	saveDotfile: (dotfile: string, content: string) => Promise<void>;
}

declare global {
	interface Window {
		electron: ElectronAPI;
	}
}
