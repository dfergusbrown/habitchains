import { Col, Row } from "react-bootstrap";

const Descriptions = ({habits}) => {
  return (
    <Col xs={3} className="d-flex flex-column">
      <div className="descriptionBox">
        {habits.map((goal) => {
          return (
            <Row className="description" key={goal}>
              <h4>{goal}</h4>
            </Row>
          );
        })}
      </div>
    </Col>
  );
};

export default Descriptions;
