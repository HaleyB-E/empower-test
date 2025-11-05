import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
import CanvassDetails from './CanvassDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* todo: future cleanup work - move this to its own routes file */}
        <Route path='/' element={<App/>} />
        <Route path='new' element={<CanvassDetails/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
