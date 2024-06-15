import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from '../components/Table';
import Login from '../components/Login';
import HomePage from '../components/HomePage';
import GameDesign from '../components/GameDesign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' index element={ <App /> } />
        <Route path='/homePage' element={ <HomePage /> } />
        <Route path='/table' element={ <Table /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/game_design' element={ <GameDesign /> } />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
