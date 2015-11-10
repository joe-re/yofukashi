import BrowserWindow from 'browser-window';

class MainWindow {
  constructor() {
    this.mainWindow =  new BrowserWindow({ width: 800, height: 600 });
    this.mainWindow.loadUrl('file://' + __dirname + '/index.html');
  }
}

export default MainWindow;
