import { MOVE_CAR } from '../redux/actionCreators';

const INITIAL_STATE = {
  red: false,
  blue: false,
  yellow: false,
}

const carsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_CAR: 
      const { car, side } = action;
      return { ...state, [car]: side };
    default: return state;
  }
}

export default carsReducer;
