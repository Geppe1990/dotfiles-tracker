import { ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

ipcMain.handle('read-dotfile', async (_, dotfile: string) => {
	const homedir = os.homedir();
	const filePath = path.join(homedir, dotfile);
	if (fs.existsSync(filePath)) {
		return fs.readFileSync(filePath, 'utf-8');
	} else {
		return `Il dotfile ${dotfile} non esiste.`;
	}
});
