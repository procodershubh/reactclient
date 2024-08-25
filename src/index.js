import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Myloginpage from './module/auth/Myloginpage';
import "../src/assets/global.css";
import Myregistorpage from './module/auth/Myregistorpage';
import Mylandingpage from './module/dashboard/Mylandingpage';
import Myhomepage from './module/dashboard/Myhomepage';
import Profilepage from './module/dashboard/Profilepage';
import Myeditrecord from './module/dashboard/Myeditrecord';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Myloginpage/>}/>
      <Route path='registor' element={<Myregistorpage/>}/>

      <Route path='dashboard' element={<Mylandingpage/>}>
      <Route path='' element={<Myhomepage/>}/>
      <Route path='view/:id' element={<Profilepage/>}/>
      <Route path='edit/:id' element={<Myeditrecord/>}/>


      
      </Route>

      
    </Routes>

    </BrowserRouter>

  </React.StrictMode>
); 


