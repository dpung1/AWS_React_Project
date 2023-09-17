import './App.css';
import { Reset } from 'styled-reset';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Signin from './pages/Signin/Signin';
import SignupCheck from './pages/Signup/SignupCheck/SignupCheck';
import SignupInfo from './pages/Signup/SignupInfo/SignupInfo';
import ModifyAndDelete from './pages/ModifyAndDelete/ModifyAndDelete';

function App() {
  const location = useLocation();
  const isSigninPage = location.pathname === '/signin';
  const isSignupPage = location.pathname === '/signup';
  const isSignupInfoPage = location.pathname === '/signupinfo'
  const isProfileSettingPage = location.pathname === '/profilesetting'

  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
      {/* 페이지마다 중복되어 있는 값은 최상의 파일에 넣어줄것*/}
      {/* Router에는 렌더링 할거만 넣어줄것 */}
      {isSigninPage || isSignupPage || isSignupInfoPage || isProfileSettingPage ? null : (
        <>
          <HeaderLayout />
          <ProfileLayout />
          <PagesChangeLayout />
        </>
      )}
        <Routes>
          <Route path='/' element={ <Feed />}/>
          {/* /feed/* *은 뒤에 값을 전부다 가져옴 */}
          <Route path='/feed/*' element={ <Feed />}/> 
          <Route path='/timeline' element={ <Timeline />}/>
          <Route path='/review' element={ <Review />}/>
          <Route path='/order' element={ <Order />}/>
          <Route path='/save' element={ <Save />}/>
          <Route path='/signin' element={ <Signin />}/>
          <Route path='/signup' element={ <SignupCheck />}/>
          <Route path='/signupinfo' element={ <SignupInfo />}/>
          <Route path='/profilesetting' element={ <ModifyAndDelete/> }/>
        </Routes>
        {isSigninPage || isSignupPage || isSignupInfoPage || isProfileSettingPage ? null : <BottomLayout />}
    </>
  );
}

export default App;
