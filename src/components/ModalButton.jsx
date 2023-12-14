import { Col, Button } from "react-bootstrap";

const ModalButton = ({handleShow}) => {
  return (
    <Col className="d-flex justify-content-center">
      <Button variant="light" id="addButton" onClick={handleShow}>
        +
      </Button>
    </Col>
  );
};

export default ModalButton;
