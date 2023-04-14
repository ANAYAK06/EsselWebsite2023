
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Ongoing from './Components/Projects/Ongoing/Ongoing'
import Overview from './Components/Pages/Overview'
import Sustainability from './Components/Pages/Sustainability'
import { useEffect } from 'react';
import Careers from './Components/Careers/Careers';
import Closed from './Components/Projects/Closed/Closed';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navbar/Navbar';


function App() {

  const location = useLocation();

  useEffect(()=>{
    if(location.hash){
      const element = document.querySelector(location.hash)
      if(element){
        element.scrollIntoView({behavior:'smooth'})
      }
    }
  })


  return (
    <>
    
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        
        <Route  path='/about' element={<Overview/>} />
        <Route  path='/sustainability' element={<Sustainability/>  }  />
        <Route path='/career' element = {<Careers />  } />
        <Route  path='/running' element={<Ongoing />} />
        <Route path='/closed' element = {<Closed />  } />


      </Routes>
      <Footer />
    
    
       
   


    </>
      
     
  
  );
}

export default App;
