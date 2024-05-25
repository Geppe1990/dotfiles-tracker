"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electron', {
    readDotfiles: () => electron_1.ipcRenderer.invoke('read-dotfiles'),
    readDotfile: (dotfile) => electron_1.ipcRenderer.invoke('read-dotfile', dotfile),
    saveDotfile: (dotfile, content) => electron_1.ipcRenderer.invoke('save-dotfile', dotfile, content)
});
