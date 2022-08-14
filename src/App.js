import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';
import MovieDetail from './component/MovieDetail/MovieDetail';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/footer/Footer';

function App() {
return (
    <div className='app'>

      <Router>
      <Header />
      <div className='container'>
        
      <Routes>
      <Route path='/' exact  element={<Home />} />
      <Route path='/movie/:imdbID' element={<MovieDetail />} />
      <Route path='*' element={<PageNotFound />} />
      </Routes>
      </div>
       <Footer />
      </Router>
    </div>
  )
};




export default App;
