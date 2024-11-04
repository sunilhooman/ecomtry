import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Dashboard from './components/Dashboard';


function App() {
  return (
  <>
<Router>
<Routes>
<Route path="/" element={<Loginpage/>} />
<Route path="/start" element={<Dashboard/>} />


</Routes>


  
</Router>
  
  
  
  
  </>  
  );
}

export default App;
