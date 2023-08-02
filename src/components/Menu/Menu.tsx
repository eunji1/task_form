import React, { useState } from 'react';
import { MenuType } from '../../types/sidebar';

type Props = {
  category: MenuType;
};
const Menu: React.FC<Props> = ({ category }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(category.topMenu, category.bottomMenu, isOpen);
  const openToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-[203px] text-sm text-[#565656]'>
      <ul
        onClick={() => openToggle()}
        className='w-[203px] text-sm text-[#565656]'
      >
        {category.topMenu}
      </ul>
      <img src='img/gnb_fold_active.png'></img>
      {isOpen
        ? category.bottomMenu.map((bottom, i) => <li key={i}>{bottom}</li>)
        : null}
    </div>
  );
};

export default Menu;
