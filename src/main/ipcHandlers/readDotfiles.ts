// src/main/ipcHandlers/readDotfiles.ts
import { ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import dotfilesList from '../../files.json'; // Aggiorna il percorso al tuo file JSON

ipcMain.handle('read-dotfiles', async () => {
	const homedir = os.homedir();
	const dotfiles = dotfilesList.files.map((file: { fileName: string; path: string }) => file.fileName);

	return dotfiles.filter(dotfile => fs.existsSync(path.join(homedir, dotfile)));
});
