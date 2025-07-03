import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewSoil from './pages/ViewSoil';
import './App.css';
import {
  SandyLoam,
  Clay,
  Silty,
  Peaty,
  Loamy,
  Chalky
} from './pages/soil-info/SoilInfo';
import { SoilProvider } from './SoilContext'; // ✅ Fix this back
import AdminPostForm from './pages/AdminPostForm';

import Register from './pages/Register';         // ✅ added this
import Login from './pages/login'; // ✅ correct casing             
import AdminDashboard from './pages/AdminDashboard'; // ✅ Admin Dashboard
import UserHome from './pages/UserHome';         // ✅ User Home

function App() {
  return (
    <SoilProvider> {/* ✅ wrap everything here */}
      <Router>
        <Routes>
          <Route path="/admin/post" element={<AdminPostForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/view-soil" element={<ViewSoil />} />
          <Route path="/soil-info/sandy-loam" element={<SandyLoam />} />
          <Route path="/soil-info/clay" element={<Clay />} />
          <Route path="/soil-info/silty" element={<Silty />} />
          <Route path="/soil-info/peaty" element={<Peaty />} />
          <Route path="/soil-info/loamy" element={<Loamy />} />
          <Route path="/soil-info/chalky" element={<Chalky />} />
          <Route path="/register" element={<Register />} /> {/* ✅ added this line */}
          <Route path="/login" element={<Login />} />         {/* ✅ Login Route */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* ✅ Admin */}
          <Route path="/user-home" element={<UserHome />} />
            {/* ✅ User */}
        </Routes>
      </Router>
    </SoilProvider>
  );
}

export default App;
