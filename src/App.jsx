// import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import HabitLines from './components/HabitLines';


function App() {


  return (
    <>
      <header>
        <div className='avatar'></div>
      </header>
      <body className='body'>
        <HabitLines />
      </body>
    </>
  )
}

export default App
