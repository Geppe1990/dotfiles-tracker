// src/main/ipcHandlers/readDotfile.ts
import { ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

ipcMain.handle('read-dotfile', async (_, dotfile: string) => {
	const homedir = os.homedir();
	const filePath = path.join(homedir, dotfile);
	if (fs.existsSync(filePath)) {
		const content = fs.readFileSync(filePath, 'utf-8');
		return { path: filePath, content };
	} else {
		return { path: filePath, content: `Il dotfile ${dotfile} non esiste.` };
	}
});
