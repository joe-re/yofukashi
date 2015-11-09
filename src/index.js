import app from 'app';
// import BrowserWindow from 'browser-window';
import ClashReporter from 'crash-reporter';
import Authenticator from './authenticator';

ClashReporter.start();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  Authenticator.openAuthenicationWindow();
});
