import React from 'react';
import Navbar from './Components/Navbar/Navbar';

import {Orginals,ActionMovies,HorrorMovies,Documentaries,ComedyMovies,RomanceMovies} from  './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
   <div className='App'>
    <Navbar/>
    <Banner/>
    <RowPost url={Orginals} title='Netflix Orginals'/>
    <RowPost url={ActionMovies} title='Action' isSmall/>
    <RowPost url={HorrorMovies} title='Horror' isSmall/>
    <RowPost url={Documentaries} title='Documentaries' isSmall/>
    <RowPost url={RomanceMovies} title='Romance' isSmall/>
    <RowPost url={ComedyMovies} title='Comedy' isSmall/>


   </div>
      
  )
}

export default App;
