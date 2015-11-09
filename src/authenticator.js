import BrowserWindow from 'browser-window';
import NodeTwitterApi from 'node-twitter-api';

const twitter = new NodeTwitterApi({
  consumerKey: 'sKog2zZ9TvRWpHne98d0cHrHM',
  consumerSecret: 'rTyJIcNrcAFlT4t8llbpx274PbkmuHwnDG8IVX5pD7TcjA3fD5'
});

const Authenticator = {
  openAuthenicationWindow: () => {
    twitter.getRequestToken((_error, reqToken, reqTokenSecret) => {
      const authUrl = twitter.getAuthUrl(reqToken);
      const loginWindow = new BrowserWindow({ width: 800, height: 600, 'node-integration': false });
      loginWindow.webContents.on('will-navigate', (e, url) => {
        e.preventDefault();
        const m = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
        const closeWindow = () => setTimeout(() => loginWindow.close(), 0);
        if (!m) {
          closeWindow();
          return;
        }
        twitter.getAccessToken(reqToken, reqTokenSecret, m[2], (__error, accessToken, accessTokenSecret) => {
          this.accessToken = accessToken;
          this.accessTokenSecret = accessTokenSecret;
        });
        closeWindow();
      });
      loginWindow.loadUrl(authUrl);
    });
  }
};

export default Authenticator;
