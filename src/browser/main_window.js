import BrowserWindow from 'browser-window';

export default class MainWindow {
  constructor() {
    this.mainWindow =  new BrowserWindow({ width: 800, height: 600 });
    this.mainWindow.loadURL('file://' + __dirname + '/../renderer/index.html');
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }
}
