
"use client"


import React from 'react';
import { DateProvider } from '../DateContext';
import RecurrenceOptions from '../components/RecurrenceOptions';
import DatePickerComponent from '../components/DatePickerComponent';
import VisualPreview from '../components/VisualPreview';

function App() {
  return (
    <DateProvider>
      <div className=' py-2 flex flex-col gap-4 items-center'>
        <DatePickerComponent />
        <RecurrenceOptions />
        <VisualPreview />
      </div>
    </DateProvider>
  );
}

export default App;
