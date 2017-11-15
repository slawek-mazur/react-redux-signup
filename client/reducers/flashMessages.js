import {ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from '../actions/types';
import shortid from 'shortid';

export default (state = [], action = {}) => {

  console.log('reducer switch/case ' + action.type);

  switch (action.type) {
    case ADD_FLASH_MESSAGE:

      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];

    case REMOVE_FLASH_MESSAGE:
      return state.filter(message => message.id !== action.id);

    default:
      return state;
  }
};