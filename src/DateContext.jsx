
"use client"


import React, { createContext, useState } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]); 
  const [nthDayOfMonth, setNthDayOfMonth] = useState("");

  return (
    <DateContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurrence,
        setRecurrence,
        interval,
        setInterval,
        selectedDays,
        setSelectedDays,
        nthDayOfMonth,
        setNthDayOfMonth,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
