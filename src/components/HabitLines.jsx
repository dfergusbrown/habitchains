import { months, month, dateRow } from '../utilities/monthPicker';
import { habits } from "../utilities/habits";
import { Container, Row, Col } from "react-bootstrap";

const HabitLines = () => {

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
        </Container>

    )
}

export default HabitLines;