import {
  LOADING_DATA_SUCCESS
} from '../actions/action';

const initialState = {
  loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
      case LOADING_DATA_SUCCESS:
        return Object.assign({},state,{
          loading: true
        })
      default:
      return state;
    }
}
