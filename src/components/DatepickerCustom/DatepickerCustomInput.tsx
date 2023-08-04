import React, { forwardRef } from 'react';
interface InputProps {
  value: string;
  onClick: () => void;
}

const DatepickerCustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onClick }, ref) => (
    <input
      className='w-40 px-3 py-1 text-sm border-[1px] border-[#DEDEDE] rounded'
      type='text'
      value={value}
      ref={ref}
      onClick={onClick}
    />
  )
);
// forwardRef 사용 시ㅡ displayname을 써줘야함
DatepickerCustomInput.displayName = 'DatepcikerCustomInput';
export default DatepickerCustomInput;
