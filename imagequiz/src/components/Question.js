import ListGroup from 'react-bootstrap/ListGroup'
import Figure from 'react-bootstrap/Figure'
import Table from 'react-bootstrap/Table'
let Question = (props) => {

    let choiceSelected = (choice) => {
        let isCorrect = props.question.answer === choice
        props.choiceSelected(isCorrect)
    }

    let shuffle = (array) => {
        let places = array.map((item, index) => index)
        return array.map((item, index, array) => {
            const rInd = Math.floor(Math.random() * places.length)
            const placesVal = places[rInd]
            places.splice(rInd, 1)
            return array[placesVal]
        }
        )
    }

    return (
        <Table>
            <tbody>
                <tr>
                    <td>
                        <Figure class="text-center">
                            <Figure.Image

                                alt={'flower image'}
                                src={props.question.picture}
                            />

                        </Figure>
                        <ListGroup>
                            {shuffle(props.question.choices).map(choice => <ListGroup.Item onClick={() => choiceSelected(choice)} action variant="light">
                                {choice}
                            </ListGroup.Item>)}

                        </ListGroup>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Question