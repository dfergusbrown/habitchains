import { months, month, dateRow } from "../utilities/monthPicker";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddModal from "./AddModal";
import { useState, useReducer, useEffect } from "react";
import DatesnDots from "./Dates&Dots";
import Descriptions from "./Descriptions";
import ModalButton from "./ModalButton";

const HabitLines = () => {
  let habitList = [];
  const [habits, setHabit] = useState(habitList);

  useEffect(() => {
    fetch('http://localhost:3000/user/habits')
    .then(response => response.json())
    .then(data => {
        setHabit(data)
    })
  },[])

  function addHabit(newHabit) {
    setHabit([...habits, newHabit]);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Row className="month">
        <Col xs={{ offset: 2 }}>
          <h2>{months[month]}</h2>
        </Col>
      </Row>
      <Container className="d-flex">
        <Descriptions habits={habits}/>
        <DatesnDots habits={habits} dateRow={dateRow} />
      </Container>
      <Row>
        <ModalButton handleShow={handleShow}/>
        <AddModal handleClose={handleClose} show={show} addHabit={addHabit} />
      </Row>
    </Container>
  );
};

export default HabitLines;