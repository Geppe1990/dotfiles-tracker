import { ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

const homedir = os.homedir();
const dotfiles = [
	'.bashrc', '.zshrc', '.vimrc', '.gitconfig', '.profile', '.bash_profile', '.bash_logout',
	'.inputrc', '.nanorc', '.tmux.conf', '.screenrc', '.config/fish/config.fish',
	'.config/nvim/init.vim', '.config/nvim/init.lua', '.p10k.zsh', '.aliases', '.functions',
	'.exports', '.gitignore', '.gitattributes', '.wgetrc', '.curlrc', '.npmrc', '.yarnrc',
	'.eslintrc', '.prettierrc', '.stylelintrc', '.tern-project', '.jsconfig.json',
	'.viminfo', '.dircolors', '.cargo/config', '.rustfmt.toml', '.clang-format', '.ackrc'
];

ipcMain.handle('read-dotfiles', async () => {
	return dotfiles.filter(dotfile => fs.existsSync(path.join(homedir, dotfile)));
});
