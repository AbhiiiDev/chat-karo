import '@mantine/core/styles.css';


import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './configs/Routes';
import React from 'react';

function App() {

  return (
 <RouterProvider router={router}/>
  )
}

export default App
