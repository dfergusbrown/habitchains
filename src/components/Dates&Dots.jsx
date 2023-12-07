import { useState } from "react"
import { Row, Col } from "react-bootstrap"

const DatesnDots = ({habits, dateRow}) => { 

    

    return(
        <Col className='scrollContainer'>
        <Row>
            <Col className='dates'>
                {dateRow.map(item => {
                return(
                    <div key={item}>{item}</div>
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
                            const [buttonState, setButtonState] = useState(false)
                            const handleState = () => {
                                buttonState ? 
                                setButtonState(false) :
                                setButtonState(true)
                            }
                            return(
                                <span 
                                    className='circle' 
                                    key={index}
                                    style={
                                        buttonState ? 
                                        {backgroundColor: 'blue'} :
                                        {backgroundColor: 'white'}
                                    }
                                    onClick={handleState}
                                    />
                            )
                        })}
                    </div>
                    </div>
                </Row>
                )
            })}
        </Col>
    )
}

export default DatesnDots