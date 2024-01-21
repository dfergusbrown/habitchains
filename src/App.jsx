// import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import HabitLines from './components/HabitLines';
import MainHeader from './components/Header';


function App() {


  return (
    <>
      <MainHeader />
      <div className='mainBody'>
        <HabitLines />
      </div>
    </>
  )
}

export default App
