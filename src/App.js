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
import HeaderLayout from './components/Layouts/HeaderLayout/HeaderLayout';
import ProfileLayout from './components/Layouts/ProfileLayout/ProfileLayout';
import PagesChangeLayout from './components/Layouts/PagesChangeLayout/PagesChangeLayout';
import BottomLayout from './components/Layouts/BottomLayout/BottomLayout';

function App() {


  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
      {/* 페이지마다 중복되어 있는 값은 최상의 파일에 넣어줄것*/}
      {/* Router에는 렌더링 할거만 넣어줄것 */}
      <HeaderLayout />
      <ProfileLayout />
      <PagesChangeLayout />
        <Routes>
          <Route path='/' element={ <Feed />}/>
          {/* /feed/* *은 뒤에 값을 전부다 가져옴 */}
          <Route path='/feed/*' element={ <Feed />}/> 
          <Route path='/timeline' element={ <Timeline />}/>
          <Route path='/review' element={ <Review />}/>
          <Route path='/order' element={ <Order />}/>
          <Route path='/save' element={ <Save />}/>
        </Routes>
      <BottomLayout />
    </>
  );
}

export default App;
