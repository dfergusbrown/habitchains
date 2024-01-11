import { Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const YearDropdown = ({year, years, changeYear}) => { 

 return(
    <Col className="d-flex justify-content-start px-0">
        <Dropdown>
            <Dropdown.Toggle variant="dark" size="lg">{year}</Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    years.map(item => {
                        return(
                        <Dropdown.Item onClick={() => changeYear(item)} key={item}>{item}</Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    </Col>
)
}

export default YearDropdown