import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/header/header';
import AppFooter from './components/footer/footer';
import AppHome from './components/home/home';
import AppWork from './components/work/work';
import AppAbout from './components/about/about';
import AppBehind from './components/behind/behind';
import AppClient from './components/client/client';
import AppContact from './components/contact/contact';
import ErrorPage from './components/error/error';

function App() {
  return (
    <div className='App-container'>
      <div className='App-header'><AppHeader /></div>

      <div className='App-main'>
      <Routes>
        <Route path='/' element={<AppHome />} />
        <Route path='/about' element={<AppAbout />} />
        <Route path='/works' element={<AppWork />} />
        <Route path='/behind' element={<AppBehind />} />
        <Route path='/clients' element={<AppClient />} />
        <Route path='/contact' element={<AppContact />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>

      <div className='App-footer'><AppFooter /></div>
    </div>
  );
}

export default App;
