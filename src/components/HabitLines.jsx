import { months, currentMonth, years, currentYear, dateRow } from "../utilities/monthPicker";
import { Container, Row } from "react-bootstrap";
import AddModal from "./modal/AddModal";
import { useState, useEffect } from "react";
import DatesnDots from "./Dates&Dots";
import Descriptions from "./Descriptions";
import ModalButton from "./modal/ModalButton";
import MonthDropdown from "./dropdowns/monthDropdown";
import YearDropdown from "./dropdowns/yearDropdown";

const HabitLines = ({loggedIn}) => {
  /* Month Picker */
  const [month, setMonth] = useState(currentMonth)
  const changeMonth = (input) => {
    setMonth(input)
  }

  /* Year Picker */
  const [year, setYear] = useState(currentYear)
  const changeYear = (input) => {
    setYear(input)
  }

  /* Set Habits */
  let habitList = [];
  const [habits, setHabit] = useState(habitList);

  useEffect(() => {
    fetch('http://localhost:3000/users/byId/habits')
    .then(response => response.json())
    .then(data => {
        setHabit(data)
        console.log('logged in:', loggedIn)
    })
  },[loggedIn])

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
        <MonthDropdown month={month} months={months} changeMonth={changeMonth} />
        <YearDropdown year={year} years={years} changeYear={changeYear} />
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