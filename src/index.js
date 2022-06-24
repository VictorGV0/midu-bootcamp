import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route } from 'wouter';
import { Initial } from './pages/Initial';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { FormApi } from './pages/APICRUD';
import { Gif } from './pages/Gif';
import { SearchGif } from './pages/Gif/SearchGif';
import { Detail } from './pages/Gif/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {

  useEffect(() => {
    let gifBody = document.querySelector(".gif_body")
  if (window.location.href.includes("gif")) {
    console.log("works")
    gifBody.classList.add("show")
  }    
  }, []);
  
  

  return (
    <div className="App">

      <Navbar/>

      <Route component={Home}
      path="/"/>
            
      <Route component={Initial}
      path="/initial"/>

      <Route component={FormApi}
      path="/api"/>

      <Gif/>

      <Route component={Detail}
      path="/detail/:id"/>
      
      <Route component={SearchGif}
      path="/gif/:keyword"/>
            
    </div>
    
  );
}






root.render(
  <>
    <App/>
  </>
);


