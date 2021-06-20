import React,  { FC } from 'react';
import './styles.css';

type SlotProps = {
  value: number,
};

const Slot: FC<SlotProps> = ({ value }) => {
  return(
    <div className="slot">
      { value }
    </div>
  )
}

export default Slot;
