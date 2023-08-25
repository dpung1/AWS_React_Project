import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GSCommon } from './styles/common';
import Save from './pages/Save/Save';

function App() {
  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
        <Routes>
          <Route path='/feed'/>
          <Route path='/timeline'/>
          <Route path='/review'/>
          <Route path='/order'/>
          <Route path='/save' element={ <Save />}/>
        </Routes>
    </>
  );
}

export default App;
