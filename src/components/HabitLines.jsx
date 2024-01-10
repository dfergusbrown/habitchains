import { months, currentMonth, dateRow } from "../utilities/monthPicker";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import AddModal from "./modal/AddModal";
import { useState, useEffect } from "react";
import DatesnDots from "./Dates&Dots";
import Descriptions from "./Descriptions";
import ModalButton from "./modal/ModalButton";

const HabitLines = () => {
  /* Month Picker */
  const [month, setMonth] = useState(currentMonth)

  /* Set Habits */
  let habitList = [];
  const [habits, setHabit] = useState(habitList);

  useEffect(() => {
    fetch('http://localhost:3000/user/habits')
    .then(response => response.json())
    .then(data => {
        setHabit(data)
    })
  },[])

  /* Modal */
  function addHabit(newHabit) {
    setHabit([...habits, newHabit]);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Row className="month mb-3">
        <Col xs={{ offset: 2 }}>
          <Dropdown>
            <Dropdown.Toggle variant="dark" size="lg">{month}</Dropdown.Toggle>
          </Dropdown>
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