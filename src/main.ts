import { app, BrowserWindow } from 'electron';
import { createMainWindow } from './windows/mainWindow';
import './ipcHandlers';

let mainWindow: BrowserWindow;

function onReady() {
	mainWindow = createMainWindow();
}

app.on('ready', onReady);
