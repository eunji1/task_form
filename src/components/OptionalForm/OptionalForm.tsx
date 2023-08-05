import React, { useState } from 'react';
import { FormType } from '../../types/form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatepickerRenderCustomHeader from '../DatepickerCustom/DatepickerRenderCustomHeader';
import { ko } from 'date-fns/locale';

// props로 type 받아오기 (text, input, calendar, check)
type props = {
  formInfomation: FormType[];
};
const OptionalForm: React.FC<props> = ({ formInfomation }) => {
  console.log(formInfomation);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  console.log(selectedDate);
  return (
    <>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className='w-40 px-3 py-1 text-sm border-[1px] border-[#DEDEDE] rounded hover:bg-[#F6F7F8] hover:cursor-pointer focus:outline-none focus:border-[#024EEE] focus:bg-white'
        // renderDayContents={DatepickerRenderDayContents}
        renderCustomHeader={DatepickerRenderCustomHeader}
        dateFormat='yyyy.MM.dd'
        dateFormatCalendar='yyyy년 MM월'
        locale={ko}
      ></ReactDatePicker>
      {formInfomation.map((info, i) => (
        <div key={i} className='flex gap-40 py-4  justify-start'>
          <div className='text-sm font-bold'>{info.description}</div>
          <div className='text-sm'>정보내용 {info.type}</div>
        </div>
      ))}
      <div className='h-40 '>
        <div className='flex gap-40 py-4  justify-start'>
          <div className='text-sm'>정보</div>
          <input
            value='정보 내용'
            className='w-40 px-3 py-1 text-sm border-[1px] border-[#DEDEDE] rounded focus:outline-none focus:border-[#024EEE]'
          ></input>
        </div>
        <div className='flex gap-40 py-4  justify-start'>
          <div className='text-sm'>정보</div>
          <input
            value='정보 내용'
            className='w-40 px-3 py-1 text-sm border-[1px] border-[#DEDEDE] rounded focus:outline-none focus:border-[#024EEE]'
          ></input>
        </div>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
      </div>
    </>
  );
};

export default OptionalForm;
