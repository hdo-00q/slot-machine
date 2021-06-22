import React,  { FC } from 'react';

import styled from 'styled-components';

type SlotProps = {
  value: number,
};

const SlotNumber = styled.div`
  font-size: 10vw;
  border-style: solid;
`;

const Slot: FC<SlotProps> = ({ value }) => {
  return(
    <SlotNumber>
      { value }
    </SlotNumber>
  )
}

export default Slot;
