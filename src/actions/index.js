export const ROLL_SLOTMACHINE = 'ROLL_SLOTMACHINE';

export function rollSlotMachine(slotMachine){
  return {
    type: ROLL_SLOTMACHINE,
    slotMachine
  };
}
