import React from 'react';
import Menu from '../Menu/Menu';
import { MenuType } from '../../types/sidebar';

const Sidebar = () => {
  const MenuCategories: MenuType[] = [
    { topMenu: '대메뉴', bottomMenu: ['소메뉴', '소메뉴'] },
    { topMenu: '대메뉴', bottomMenu: ['소메뉴', '소메뉴'] }
  ];
  return (
    <div className='flex flex-col gap-3 w-[256px] bg-[#F6F7F8]'>
      <div></div>
      {MenuCategories.map((category: MenuType, i: number) => (
        <Menu key={i} category={category}></Menu>
      ))}
    </div>
  );
};

export default Sidebar;
