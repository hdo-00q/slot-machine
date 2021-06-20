// LIBRARY
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
// COMPONENTS
import Slot from './slot';
// ACTIONS
import { rollSlotMachine } from '../actions/index';
// CSS
import './styles.css';

function SlotMachine() {
  const slots = useSelector(state => state.slotMachineSlots);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div className="slot-machine">
    <h1>SLOT MACHINE</h1>
      <table className="slot-machine-table">
        <tbody>
          <tr>
            {slots.map((slot) =>{
              return <th><Slot value={slot} key={id()}/></th>
            })}
          </tr>
        </tbody>
      </table>
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
    </div>
  );
}

export default SlotMachine;
