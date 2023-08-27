import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GSCommon } from './styles/common';
import Save from './pages/Save/Save';
import Feed from './pages/Feed/Feed';
import Timeline from './pages/Timeline/Timeline';
import Review from './pages/Review/Review';
import Order from './pages/Order/Order';

function App() {
  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
        <Routes>
          <Route path='/' element={ <Feed />}/>
          <Route path='/feed' element={ <Feed />}/>
          <Route path='/timeline' element={ <Timeline />}/>
          <Route path='/review' element={ <Review />}/>
          <Route path='/order' element={ <Order />}/>
          <Route path='/save' element={ <Save />}/>
        </Routes>
    </>
  );
}

export default App;
