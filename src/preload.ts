import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	readDotfiles: () => ipcRenderer.invoke('read-dotfiles')
});
