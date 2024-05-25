import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	readDotfiles: () => ipcRenderer.invoke('read-dotfiles'),
	readDotfile: (dotfile: string) => ipcRenderer.invoke('read-dotfile', dotfile)
});
