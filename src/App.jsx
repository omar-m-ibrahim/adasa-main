import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, children: [
      { path: '/', element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogDetails /> },
      { path: 'about', element: <About /> },
    ]
  }
], {
  basename: '/adasa'
});

export default function App() {
  return <RouterProvider router={router} />;
}
