
"use client"

import React, { useContext, useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { addDays, addMonths, addYears } from 'date-fns';
import { DateContext } from '../DateContext';

const normalizeDate = (date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

const VisualPreview = () => {
  const { startDate, endDate, recurrence, interval, selectedDays, nthDayOfMonth } = useContext(DateContext);
  const [highlightDates, setHighlightDates] = useState([]);

  const getRecurringDates = () => {
    const dates = [];
    let currentDate = startDate;
    const maxDate = endDate || addYears(startDate, 1); // Default to 1 year if no end date

    while (currentDate <= maxDate) {
      if (recurrence === 'daily') {
        dates.push(normalizeDate(currentDate));
        currentDate = addDays(currentDate, interval);
      } else if (recurrence === 'weekly') {
        if (selectedDays.includes(currentDate.getDay())) {
          dates.push(normalizeDate(currentDate));
        }
        currentDate = addDays(currentDate, 1); 
      } else if (recurrence === 'monthly') {
        const nthOccurrenceDate = getNthOccurrenceOfMonth(currentDate, nthDayOfMonth);
        dates.push(normalizeDate(nthOccurrenceDate));
        currentDate = addMonths(currentDate, interval);
      } else if (recurrence === 'yearly') {
        dates.push(normalizeDate(currentDate));
        currentDate = addYears(currentDate, interval);
      }
    }
    setHighlightDates(dates);
    return dates;
  };

  
  const getNthOccurrenceOfMonth = (date, nthDay) => {
    const targetDay = date.getDay();
    let nthOccurrenceDate = new Date(date.getFullYear(), date.getMonth(), 1);

    let occurrences = 0;
    while (nthOccurrenceDate.getMonth() === date.getMonth()) {
      if (nthOccurrenceDate.getDay() === targetDay) {
        occurrences++;
        if (occurrences === nthDay) {
          break;
        }
      }
      nthOccurrenceDate = addDays(nthOccurrenceDate, 1);
    }
    return nthOccurrenceDate;
  };

  useEffect(() => {
    getRecurringDates(); 
  }, [startDate, endDate, recurrence, interval, selectedDays, nthDayOfMonth]);

  const isHighlighted = (date) => {
    return highlightDates.some((highlightDate) => highlightDate.getTime() === normalizeDate(date).getTime());
  };

  return (
    <div>
      {/* <h3>Recurring Dates Preview:</h3> */}
      
    
      <Calendar
        value={new Date()} 
        tileContent={({ date, view }) => 
          view === 'month' && isHighlighted(date) ? (
            <div className="dot"></div >
          ) : null
        }
      />

    
      <style jsx>{`
        .dot {
          height: 8px;
          width: 8px;
          background-color: #10b981;
          border-radius: 50%;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default VisualPreview;
