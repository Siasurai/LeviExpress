import React from 'react';
import { Seat } from '../Seat'

export const SeatRow = ({row}) => {
  
  return (
    <div className="seat-row">
     {row.map((r) => <Seat number={r.number} key={r.number}/>)}
      
    </div>
  )
}
