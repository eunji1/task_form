import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar></Sidebar>
      <div className="bg-blue-500 w-full"> Tailwind Css 적용 테스트 </div>
    </div>
  );
}

export default App;
