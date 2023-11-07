import { months, month, dateRow } from '../utilities/monthPicker';
import { Container, Row, Col, Button } from "react-bootstrap";
import AddModal from './AddModal';
import { useState, useReducer } from 'react';


const HabitLines = () => {
    const habitList = ["Drink Water", "Exercise", "Journal", "Do homework", "Make dinner"]
    const [habits, setHabit] = useState(habitList)

    function addHabit (newHabit) {
        setHabit([...habits, newHabit])
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let props = {
        show,
        handleClose,
        handleShow
    }

    return(
        <Container fluid>
        <Row className="month">
          <Col xs={{offset: 2}}><h2>{months[month]}</h2></Col>
        </Row>
            <Container className="d-flex">
            <Col xs={3} className='d-flex flex-column'>
                <div className='descriptionBox'> 
                {habits.map(goal => {
                    return(
                    <Row className='description'>
                        <h4>{goal}</h4>
                    </Row>
                    )
                })}
                </div> 
            </Col>
            <Col className='scrollContainer'>
                <Row>
                    <Col className='dates'>
                        {dateRow.map(item => {
                        return(
                            <div>{item}</div>
                        )
                        })}
                    </Col>
                </Row>
                {habits.map(goal => {
                    return(
                    <Row className='habitRow' key={goal}>
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
            </Col>
            </Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button variant="light" id="addButton" onClick={handleShow}>+</Button>
                </Col>
                <AddModal 
                    handleClose={handleClose} 
                    show={show}
                    addHabit={addHabit}
                />
            </Row>
        </Container>

    )
}

export default HabitLines;