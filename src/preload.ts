import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	readDotfiles: () => ipcRenderer.invoke('read-dotfiles'),
	readDotfile: (filePath: string) => ipcRenderer.invoke('read-dotfile', filePath),
	saveDotfile: (filePath: string, content: string) => ipcRenderer.invoke('save-dotfile', filePath, content),
});
