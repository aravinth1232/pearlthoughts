"use client"

import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import { DateContext } from '../DateContext';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(DateContext);

 
  
 
 
 
 
  return (
    <div className='flex flex-row gap-10 justify-center' >
      <div className='flex gap-3 justify-center items-center'>
      <label
      className=''
      >Start Date</label>
      <DatePicker 
        className='border-2 border-black px-3 py-1'
       dateFormat="dd-MM-yyyy"  
      selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div
      className='flex gap-3 justify-center items-center'
      >      <label>End Date   </label>
      <DatePicker
      className='border-2 border-black px-3 py-1'
        dateFormat="dd-MM-yyyy" selected={endDate} onChange={(date) => setEndDate(date)} isClearable />
    </div>
    </div>

  );
};

export default DatePickerComponent;
