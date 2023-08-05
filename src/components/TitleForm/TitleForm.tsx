import React from 'react';
import OptionalForm from '../OptionalForm/OptionalForm';
import { FormType } from '../../types/form';
// 텍스트, 인풋박스, 옵션박스, 날짜

const TitleForm = () => {
  const formInfomation: FormType[] = [
    { description: '정보1', type: 'string' },
    { description: '정보2', type: 'input' },
    { description: '정보3', type: 'string' },
    { description: '정보4', type: 'input' },
    { description: '날짜', type: 'calendar' },
    { description: '정보5', type: 'check' },
    { description: '정보6', type: 'check' }
  ];
  console.log('titleForm', formInfomation);
  return (
    <div>
      <div className=' border-y-2 py-4'>
        {/* <textform></textform>
        <inputform></inputform>
        <calendarform></calendarform>
        <optionalform></optionalform> */}
        <OptionalForm formInfomation={formInfomation}></OptionalForm>
      </div>
    </div>
  );
};

export default TitleForm;
