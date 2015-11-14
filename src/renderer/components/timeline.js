import React from 'react';
import remote from 'remote';

const twitterSignature = remote.getGlobal('twitterSignature');

export default class Timeline extends React.Component {
  render() {
    console.log(twitterSignature.accessToken);
    console.log(twitterSignature.accessTokenSecret);
    return <div>This is Timeline!</div>;
  }
}
