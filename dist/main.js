"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const mainWindow_1 = require("./windows/mainWindow");
require("./ipcHandlers");
let mainWindow;
function onReady() {
    mainWindow = (0, mainWindow_1.createMainWindow)();
}
electron_1.app.on('ready', onReady);
