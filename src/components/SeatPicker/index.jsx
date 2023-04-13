import React from 'react';
import './style.css';
import { SeatRow } from '../SeatRow'

export const SeatPicker = ({seats, journeyId}) => {
  // const testRow = [
  //   {
  //     number: 33,
  //     isOccupied: false,
  //   },
  //   {
  //     number: 29,
  //     isOccupied: true,
  //   },
  //   {
  //     number: 25,
  //     isOccupied: false,
  //   },
  // ];

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seatRow) => <SeatRow row={seatRow} key={seatRow.index} isOccupied={seatRow.isOccupied}/>)}
      </div>
    </div>  
  )
}