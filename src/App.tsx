import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import TitleForm from './components/TitleForm/TitleForm';

function App() {
  return (
    <div className='flex w-screen h-screen'>
      <Sidebar></Sidebar>
      <div className='h-full w-screen'>
        <div className='mx-10 h-full'>
          <h1 className='my-8 text-2xl'>타이틀</h1>
          <div className='line'></div>
          <TitleForm></TitleForm>
        </div>
      </div>
    </div>
  );
}

export default App;
