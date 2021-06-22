// LIBRARY
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
// COMPONENTS
import Slot from './slot';
// ACTIONS
import { rollSlotMachine } from '../actions/index';
// CSS
// import './styles.css';
import styled from 'styled-components';

function SlotMachine() {
  const slots = useSelector(state => state.slotMachineSlots);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SlotMachine = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `;
  const MachineTable = styled.table`
    margin-left: auto;
    margin-right: auto;
  `;

  // GENERATE A UNIQUE KEY
  const id = () => {
    return Math.floor(Math.random() * 100);
  }
  // RETURN AN ARRAY OF SIZE 3, VALUES GENERATED ARE FROM 0-3
  const rollslots = (numOfSlots = 3) => {
    const slots = [];
    for(let i = 0; i < numOfSlots; i++){
      slots.push(Math.floor(Math.random() * numOfSlots) + 1);
    }
    checkWinner(slots);
    return slots;
  }

  // CHECK FOR 3 IN A ROW
  const checkWinner = (slots) => {
    for(let i = 1; i < slots.length; i++){
      if(slots[i - 1] !== slots[i]) return;
    }
    handleShow();
  }

  return (
    <SlotMachine>
    <h1>SLOT MACHINE</h1>
      <MachineTable>
        <tbody>
          <tr>
            {slots.map((slot) =>{
              return <th><Slot value={slot} key={id()}/></th>
            })}
          </tr>
        </tbody>
      </MachineTable>
      <Button variant="primary"
        onClick={() => dispatch(rollSlotMachine(rollslots()))}
        >
          Pull Lever
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CONGRATULATIONS</Modal.Title>
        </Modal.Header>
        <Modal.Body> YOU WON!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </SlotMachine>
  );
}

export default SlotMachine;
