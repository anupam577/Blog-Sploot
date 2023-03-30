
import './App.css';

import Home from './Pages/Home';

import { useState } from 'react';

import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/authcontext';

import BlogPage from './Pages/BlogPage';
import About from './components/about/about';
import Contact from './components/contact/contact';
function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (

    <BrowserRouter>
      <AuthContextProvider>
        <Box style={{ marginTop: 64 }}>

          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

          </Routes>
        </Box>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
