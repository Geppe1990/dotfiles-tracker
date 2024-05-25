"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const homedir = os.homedir();
const dotfiles = [
    '.bashrc', '.zshrc', '.vimrc', '.gitconfig', '.profile', '.bash_profile', '.bash_logout',
    '.inputrc', '.nanorc', '.tmux.conf', '.screenrc', '.config/fish/config.fish',
    '.config/nvim/init.vim', '.config/nvim/init.lua', '.p10k.zsh', '.aliases', '.functions',
    '.exports', '.gitignore', '.gitattributes', '.wgetrc', '.curlrc', '.npmrc', '.yarnrc',
    '.eslintrc', '.prettierrc', '.stylelintrc', '.tern-project', '.jsconfig.json',
    '.viminfo', '.dircolors', '.cargo/config', '.rustfmt.toml', '.clang-format', '.ackrc'
];
electron_1.ipcMain.handle('read-dotfiles', () => __awaiter(void 0, void 0, void 0, function* () {
    return dotfiles.filter(dotfile => fs.existsSync(path.join(homedir, dotfile)));
}));