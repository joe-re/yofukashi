import electron from 'electron';
import ClashReporter from 'crash-reporter';
import Authenticator from './authenticator';
import MainWindow from './main_window';

ClashReporter.start();

electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

electron.app.on('ready', () => {
  Authenticator.openAuthenicationWindow(() => new MainWindow());
});
