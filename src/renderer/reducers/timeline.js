import { GET_TIMELINE } from '../actions/timeline';

export default function counter(state = [], action) {
  switch (action.type) {
  case GET_TIMELINE:
    return action.tweets;
  default:
    return state;
  }
}
