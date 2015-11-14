import BrowserWindow from 'browser-window';
import NodeTwitterApi from 'node-twitter-api';

global.twitterSignature = {
  consumerKey: 'sKog2zZ9TvRWpHne98d0cHrHM',
  consumerSecret: 'rTyJIcNrcAFlT4t8llbpx274PbkmuHwnDG8IVX5pD7TcjA3fD5',
  accessToken: '',
  accessTokenSecret: ''
};

const twitter = new NodeTwitterApi({
  callback: 'http://example.com',
  consumerKey: global.twitterSignature.consumerKey,
  consumerSecret: global.twitterSignature.consumerSecret
});

const Authenticator = {
  openAuthenicationWindow: (callback) => {
    twitter.getRequestToken((_error, reqToken, reqTokenSecret) => {
      const authUrl = twitter.getAuthUrl(reqToken);
      const loginWindow = new BrowserWindow({ width: 800, height: 600, 'node-integration': false });
      loginWindow.webContents.on('will-navigate', (e, url) => {
        const closeWindow = () => setTimeout(() => loginWindow.close(), 0);
        let matched;
        if (matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)) {
          twitter.getAccessToken(reqToken, reqTokenSecret, matched[2], (__error, accessToken, accessTokenSecret) => {
            global.twitterSignature.accessToken = accessToken;
            global.twitterSignature.accessTokenSecret = accessTokenSecret;
            if (callback) {
              callback.call();
            }
          });
        }
        e.preventDefault();
        closeWindow();
      });
      loginWindow.loadUrl(authUrl);
    });
  }
};

export default Authenticator;
