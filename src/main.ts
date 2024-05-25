import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

let mainWindow: BrowserWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			contextIsolation: true,
		}
	});

	// Apri gli strumenti di sviluppo
	mainWindow.webContents.openDevTools();

	mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

ipcMain.handle('read-dotfiles', async () => {
	const homedir = os.homedir();
	const dotfiles = ['.bashrc', '.zshrc', '.vimrc', '.gitconfig']; // List of dotfiles to check
	return dotfiles.filter(dotfile => fs.existsSync(path.join(homedir, dotfile)));
});

ipcMain.handle('read-dotfile', async (_, dotfile: string) => {
	const homedir = os.homedir();
	const filePath = path.join(homedir, dotfile);
	if (fs.existsSync(filePath)) {
		return fs.readFileSync(filePath, 'utf-8');
	} else {
		return `Il dotfile ${dotfile} non esiste.`;
	}
});
