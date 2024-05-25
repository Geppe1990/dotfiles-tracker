import { BrowserWindow } from 'electron';
import * as path from 'path';

export function createMainWindow(): BrowserWindow {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, '..', 'preload.js'),
			contextIsolation: true,
		}
	});

	// Apri gli strumenti di sviluppo
	mainWindow.webContents.openDevTools();

	mainWindow.loadFile('index.html');

	return mainWindow;
}
