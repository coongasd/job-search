import React from 'react';
import BoxSearch from './BoxSearch';
import Header from './Header';

function MainPage() {
  return (
    <div className="content-wraper max-w-6xl text-base mx-auto px-8">
        <Header />
        <BoxSearch/>
    </div>
   
  )
}

export default MainPage