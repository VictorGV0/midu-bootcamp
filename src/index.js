import React from 'react';
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
import { GifsContextProvider } from './context/GifsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {


  

  return (

    <div className="App">

      <Navbar />

      <Route component={Home}
        path="/" />

      <Route component={Initial}
        path="/initial" />

      <Route component={FormApi}
        path="/api" />
      <GifsContextProvider>
        <Route component={Gif}
          path="/gif"
        />
        <Route component={Detail}
          path="/detail/:id" />

        <Route component={SearchGif}
          path="/search/:keyword" />
      </GifsContextProvider>

    </div>
  );
}



root.render(
  <>
    <App/>
  </>
);


