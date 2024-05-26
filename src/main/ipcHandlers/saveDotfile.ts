// src/main/ipcHandlers/saveDotfile.ts
import { ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

ipcMain.handle('save-dotfile', async (_, dotfile: string, content: string) => {
	const homedir = os.homedir();
	const filePath = path.join(homedir, dotfile);
	try {
		fs.writeFileSync(filePath, content, 'utf-8');
		return 'success';
	} catch (error) {
		console.error(`Errore durante il salvataggio del dotfile ${dotfile}:`, error);
		throw error;
	}
});
