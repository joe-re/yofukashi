/* @flow */

import { List } from 'immutable';
import { GET_TIMELINE, TWEET } from '../actions/timeline';

type State = List<Object>;

export default function timeline(state: State = List(), action: any): State {
  switch (action.type) {
  case GET_TIMELINE:
    return List(action.tweets);
  case TWEET:
    return state.unshift(action.tweet);
  default:
    return state;
  }
}
