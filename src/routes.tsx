import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Dashboard from  './pages/dashboard';
import NewOrder from  './pages/newOrder';



const AppRoutes: React.FC = () => {
  return(
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/new-order" element={<NewOrder/>} />
    </Routes>
  );
}

export default AppRoutes;