import app from 'app';
import BrowserWindow from 'browser-window';
import ClashReporter from 'crash-reporter';
import NodeTwitterApi from 'node-twitter-api';

ClashReporter.start();

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const twitter = new NodeTwitterApi({
    consumerKey: 'sKog2zZ9TvRWpHne98d0cHrHM',
    consumerSecret: 'rTyJIcNrcAFlT4t8llbpx274PbkmuHwnDG8IVX5pD7TcjA3fD5'
  });

  twitter.getRequestToken((error, requestToken, requestTokenSecret) => {
    const authUrl = twitter.getAuthUrl(requestToken);
    const loginWindow = new BrowserWindow({ width: 800, height: 600, 'node-integration': false });
    loginWindow.webContents.on('will-navigate', (e, url) => {
      let matched;
      if (matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)) {
        twitter.getAccessToken(requestToken, requestTokenSecret, matched[2], (error, accessToken, accessTokenSecret) => {
          console.log('accessToken', accessToken);
          console.log('accessTokenSecret', accessTokenSecret);
        });
      }
      e.preventDefault();
      setTimeout(() => loginWindow.close(), 0);
    });
    loginWindow.loadUrl(authUrl);
  });
});
