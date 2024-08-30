import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Homepage from './pages/Homepage.jsx';
// import LinkPage from './pages/LinkPage.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/linkpage" element={<LinkPage />} /> */}
        </Routes>
        <ToastContainer />
      </App>
    </BrowserRouter>
  </StrictMode>
);
