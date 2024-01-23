import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const LoginModal = ({ show, handleClose }) => {
  //FORM DATA
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const [errMsg, setErrMsg] = useState(null)

  const [registered, setRegStatus] = useState(true)
  const toggleRegisterLogin = () => {
    registered ? setRegStatus(false) : setRegStatus(true)
    setErrMsg(null)
  }

  const handleSubmitRegister = async () => {
    const url = "http://localhost:3000/users/register";
    const { email, username, password } = formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      if (response.status === 409) {
        setErrMsg('Account already exists with this email')
      }
      if (response.ok) {
        alert("Success! User Created!");
        handleClose();
        // refresh habits?
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitLogin = async () => {
    const url = "http://localhost:3000/users/login";
    const { username, password } = formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      if (response.ok) {
        alert("Success! You are logged in!");
        handleClose();
        // refresh habits?
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{registered ? "Login" : "Create Account"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Email */}
            {!registered ? <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                />
              </Col>
            </Form.Group> : null}

            {/* Username */}
            <Form.Group as={Row} className="mb-3" controlId="formUsername">
              <Form.Label column sm="2">
                Username
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Person McGee"
                />
              </Col>
            </Form.Group>

            {/*Password*/}
            <Form.Group as={Row} className="mb-3 d-flex" controlId="formPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password Here"
                />
              </Col>
              <Row className="d-flex align-items-center mt-3">
                  <p style={{color: 'red', textAlign: 'center'}}>{errMsg}</p>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {registered ? <Button variant="dark" onClick={toggleRegisterLogin}>
            Create Account
          </Button> : 
          <Button variant="dark" onClick={toggleRegisterLogin}>
            I have a login
          </Button>}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={registered ? handleSubmitLogin : handleSubmitRegister}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
