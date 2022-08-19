import React from 'react';
import BoxSearch from './BoxSearch';
import Header from './Header';
import TopCategory from './TopCategory';

function MainPage() {
  return (
    <div className="content-wraper max-w-6xl text-base mx-auto relative">
        <Header />
        <BoxSearch/>
        <TopCategory/>
     
       
    </div>
   
  )
}

export default MainPage