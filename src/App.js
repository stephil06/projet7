// import des 4 pages
import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'; 
import Home from './pages/Home/Home';
import BaseLayout from './components/BaseLayout/BaseLayout'; 

import DetailLocation from './pages/DetailLocation/DetailLocation';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />} errorElement={<Error404 />}>
      <Route index element={<Home />} />
      <Route path="location/:id" element={<DetailLocation />} />
      <Route path="apropos" element={<About />} />
   </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />  
    );
}

export default App;
