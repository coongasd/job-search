import React from 'react';
import BoxSearch from './BoxSearch';
import Header from './Header';
import MostViewedJob from './MostViewedJob';
import TopCategory from './TopCategory';

function MainPage() {
  return (
    <div className="content-wraper max-w-7xl text-base mx-auto relative">
        <Header />
        <BoxSearch/>
        <TopCategory/>
        <MostViewedJob/>
       
    </div>
   
  )
}

export default MainPage