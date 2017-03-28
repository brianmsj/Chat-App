import {
  SWITCH_CHANNEL
} from '../actions/action';

const initialState = {
  name: 'Lobby',
  id: 0,
};

export default function currentChannel(state = initialState, action) {
  switch (action.type) {
    case SWITCH_CHANNEL:
      return Object.assign({},state, {
        name: action.name,
        id: action.id
      });

      

  default:
    return state;
  }
}
