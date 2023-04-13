import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';


export const Home = () => {

  const [journey, setJourney] = useState(null)


  const handleJourneyChange = (journeyInfo) => {
    setJourney(journeyInfo)
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      { journey === null ? " ": `Nalezeno spojení s id ${journey.journeyId}` }
    </main>
  )
}

;
