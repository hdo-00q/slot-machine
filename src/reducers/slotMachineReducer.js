const initialState = [1, 1, 1];

export const slotMachineReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ROLL_SLOTMACHINE':
      return action.slotMachine;
    default:
      return state;
  }
};
