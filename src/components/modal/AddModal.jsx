import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const AddModal = ({show, handleClose, addHabit}) => {

    const [habitName, setHabitName] = useState('')

    return(
        <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Habit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="HabitName">
                        <Form.Label>Habit Name:</Form.Label>
                        <Form.Control value={habitName} onChange={e => setHabitName(e.target.value)} type="name" placeholder="Give your goal habit a name"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="" placeholder="give a little bit more detail here" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="dark" onClick={() => {
                    handleClose()
                    addHabit(habitName)
                    }}
                >
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddModal;