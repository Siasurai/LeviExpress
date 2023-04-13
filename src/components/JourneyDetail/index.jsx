import React, { useState } from 'react';
import './style.css';
import { BusStop } from '../BusStop';



export const JourneyDetail = ({journey}) => {

  return (
    <div className="journey-detail container">
    <h2>Podrobnosti cesty</h2>
    {journey.stops.map((stop) => <BusStop name={stop.name} station={stop.station} time={stop.time} key={stop.name} />)}
  </div>
  )
}