import app from 'app';
import ClashReporter from 'crash-reporter';
import Authenticator from './authenticator';
import MainWindow from './main_window';

ClashReporter.start();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  Authenticator.openAuthenicationWindow(() => new MainWindow());
});
