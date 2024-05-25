import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	readDotfiles: () => ipcRenderer.invoke('read-dotfiles'),
	readDotfile: (dotfile: string) => ipcRenderer.invoke('read-dotfile', dotfile),
	saveDotfile: (dotfile: string, content: string) => ipcRenderer.invoke('save-dotfile', dotfile, content)
});
