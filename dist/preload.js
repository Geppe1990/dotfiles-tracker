"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electron', {
    readDotfiles: () => electron_1.ipcRenderer.invoke('read-dotfiles'),
    readDotfile: (filePath) => electron_1.ipcRenderer.invoke('read-dotfile', filePath),
    saveDotfile: (filePath, content) => electron_1.ipcRenderer.invoke('save-dotfile', filePath, content),
});
