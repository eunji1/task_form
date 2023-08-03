import React, { useState } from 'react';
import { MenuType } from '../../types/sidebar';

type Props = {
  category: MenuType;
};
const Menu: React.FC<Props> = ({ category }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-[256px] text-sm text-[#565656]'>
      <div
        className='flex h-9 px-6 hover:bg-[#F0F2F3] hover:cursor-pointer active:font-bold active:bg-[#E0E4E8]'
        onClick={() => openToggle()}
      >
        <ul className='w-full my-auto text-sm text-[#333333]'>
          {category.topMenu}
        </ul>
        <img
          src={isOpen ? 'img/gnb_unfold_active.png' : 'img/gnb_fold_active.png'}
          className='w-5 h-5 my-auto'
        ></img>
      </div>
      {isOpen
        ? category.bottomMenu.map((bottom, i) => (
            <li
              key={i}
              className='flex items-center h-9 px-9 text-center hover:bg-[#F0F2F3] hover:cursor-pointer active:font-bold active:bg-[#E0E4E8]'
            >
              {bottom}
            </li>
          ))
        : null}
    </div>
  );
};

export default Menu;
