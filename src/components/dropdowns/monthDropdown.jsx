import { Col } from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';

const MonthDropdown = ({month, months, changeMonth}) => { 

 return(
    <Col className="d-flex justify-content-end px-0" xs={{ offset: 3 }}>
        <Dropdown>
            <Dropdown.Toggle variant="dark" size="lg">{month}</Dropdown.Toggle>
            <Dropdown.Menu>
                {
                months.map(item => {
                    return(
                    <Dropdown.Item onClick={() => changeMonth(item)} key={item}>{item}</Dropdown.Item>
                    )
                }
                )
                }
            </Dropdown.Menu>
        </Dropdown>
    </Col>
)
}

export default MonthDropdown