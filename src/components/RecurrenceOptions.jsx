"use client"


import React, { useContext } from 'react';
import { DateContext } from '../DateContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence, interval, setInterval, selectedDays, setSelectedDays, nthDayOfMonth, setNthDayOfMonth } = useContext(DateContext);

  const handleRecurrenceChange = (e) => {
    setRecurrence(e.target.value);
  };

  const handleIntervalChange = (e) => {
    setInterval(Number(e.target.value));
  };

  const handleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className='flex flex-col gap-5 items-center'>
      <div >      <label>Recurrence Pattern:</label>
      <select
      className='ml-2 px-2 border-2 border-black'
      value={recurrence} onChange={handleRecurrenceChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      </div>
    <div>
      <label>Every:</label>
      <input 
      className='ml-2 px-2 border-2 border-black w-24'
      type="number" value={interval} onChange={handleIntervalChange} min="1" />
</div>
      {recurrence === 'weekly' && (
        <div>
          {/* <label>Specific Days of the Week:</label> */}
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, idx) => (
            <button key={idx} onClick={() => handleDaySelection(idx)}
            className='mx-2 px-2' 
            style={
              { backgroundColor: selectedDays.includes(idx) ? 'lightgreen' : 'transparent' }
            }>
              {day}
            </button>
          ))}
        </div>
      )}

      {recurrence === 'monthly' && (
        <div>
          <label>Nth Day of the Month:</label>
          <input 
          className='ml-2 px-2 border-2 border-black'
          type="number"  value={nthDayOfMonth} onChange={(e) => setNthDayOfMonth(Number(e.target.value))} min="" max="31" />
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
