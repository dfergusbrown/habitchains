// import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import HabitLines from './components/HabitLines';


function App() {


  return (
    <>
      <header>
        <div className='avatar'></div>
      </header>
      <div className='mainBody'>
        <HabitLines />
      </div>
    </>
  )
}

export default App
