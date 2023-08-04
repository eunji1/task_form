import React from 'react';
import { getYear } from 'date-fns';
// import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';

interface DatepickerHeaderType {
  date: Date;
  //   changeYear: () => string;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}
const DatepickerRenderCustomHeader: React.FC<DatepickerHeaderType> = ({
  date,
  //   changeYear,
  //   changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}) => {
  const years = range(2023, getYear(new Date()) + 1, 1);

  return (
    <div className='bg-white'>
      <button
        type='button'
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <img src='img/calender_back_default.png'></img>
      </button>
      <select
        value={getYear(date)}
        // onChange={({ target: { value } }) => changeYear(value)}
        className=''
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className=''>년</span>
      <select
        // value={Number(MONTH_CONST.LIST[getMonth(date)])}
        // onChange={({ target: { value } }) =>
        //   changeMonth(MONTH_CONST.LIST.indexOf(value))
        // }
        className=''
      >
        {/* {MONTH_CONST.LIST.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))} */}
      </select>
      <span className=''>월</span>
      <button
        type='button'
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <img src='img/calender_next_default.png'></img>
      </button>
    </div>
  );
};

export default DatepickerRenderCustomHeader;
