import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbarcomp } from '../navbar/Navbarcomp';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarcomp />
        <Outlet />
      <Footer />
    </div>
  );
}
