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
			preload: path.join(__dirname, 'preload.js')
		}
	});

	mainWindow.loadFile(path.join(__dirname, 'index.html'));

	// Apri gli strumenti di sviluppo
	mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

const dotfiles = ['.bashrc', '.zshrc', '.vimrc'];

ipcMain.handle('read-dotfiles', async () => {
	const homedir = os.homedir();
	let content = '';
	for (const file of dotfiles) {
		const filePath = path.join(homedir, file);
		if (fs.existsSync(filePath)) {
			const data = fs.readFileSync(filePath, 'utf-8');
			content += `<h2>${file}</h2><pre><code class="language-bash">${data}</code></pre>`;
		} else {
			content += `<h2>${file}</h2><p>Non esiste.</p>`;
		}
	}
	return content;
});
