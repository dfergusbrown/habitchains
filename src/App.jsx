// import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import HabitLines from './components/HabitLines';
import MainHeader from './components/Header';
import { useState } from 'react';


function App() {
  /* User Logged In */
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <MainHeader setLoggedIn={setLoggedIn}/>
      <div className='mainBody'>
        <HabitLines loggedIn={loggedIn}/>
      </div>
    </>
  )
}

export default App
