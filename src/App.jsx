import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { months, month, lastdate } from './utilities/monthPicker'


function App() {

  console.log(lastdate)
  const dateRow = []
  for (let i = 1; i <= lastdate; i++) {
      dateRow.push(i)
  }

  const habits = ["Drink Water", "Exercise", "Journal"]

  return (
    <>
      <header>
        <div className='avatar'></div>
      </header>
      <body className='body'>
        <Container fluid>
          <Row className="month">
            <Col xs={{offset: 2}}><h2>{months[month]}</h2></Col>
          </Row>
          <Container className='scrollContainer'>
            <Row>
              <Col xs={{offset: 2}} className='dates'>
                  {dateRow.map(item => {
                    return(
                      <div>{item}</div>
                    )
                  })}
              </Col>
            </Row>
            {habits.map(goal => {
              return(
                <Row className='habitRow'>
                  <Col className='description' xs={2}>
                    <h4>{goal}</h4>
                  </Col>
                  <div>
                    <div className='habitLine'>
                      {dateRow.map(index => {
                        return(
                          <span className='circle' key={index}></span>
                        )
                      })}
                    </div>
                  </div>
                </Row>
              )
            })}
          </Container>
        </Container>
      </body>
    </>
  )
}

export default App
