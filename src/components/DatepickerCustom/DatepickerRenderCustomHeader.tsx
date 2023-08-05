import React from 'react';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';

interface DatepickerHeaderType {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}
const DatepickerRenderCustomHeader: React.FC<DatepickerHeaderType> = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}) => {
  const years = range(getYear(new Date()), 2014, -1);

  return (
    <div className='bg-white flex gap-1 items-center justify-center'>
      <button
        type='button'
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        className='w-4 h-4'
      >
        <img src='img/calender_back_default.png'></img>
      </button>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(Number(value))}
        className='text-sm px-3 py-1 border-[1px] border-[#DEDEDE] rounded'
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}년
          </option>
        ))}
      </select>
      <select
        value={getMonth(date)}
        onChange={({ target: { value } }) => changeMonth(Number(value))}
        className='text-sm px-3 py-1 border-[1px] border-[#DEDEDE] rounded'
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((option) => (
          <option key={option} value={option}>
            {option}월
          </option>
        ))}
      </select>
      <button
        type='button'
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        className='w-4 h-4'
      >
        <img src='img/calender_next_default.png'></img>
      </button>
    </div>
  );
};

export default DatepickerRenderCustomHeader;
