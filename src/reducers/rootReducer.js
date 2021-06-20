import { combineReducers } from "redux";
import { slotMachineReducer } from "./slotMachineReducer";

export const rootReducer = combineReducers({
  slotMachineSlots: slotMachineReducer
})
