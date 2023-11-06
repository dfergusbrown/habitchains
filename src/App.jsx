// import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
// import { months, month, dateRow } from './utilities/monthPicker'
// import { habits } from './utilities/habits';
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
