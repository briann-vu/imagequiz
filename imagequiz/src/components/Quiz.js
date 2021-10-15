import quizzes from "./data";
import { useLocation } from 'react-router-dom'
import { Container } from "react-bootstrap";
import Question from "./Question";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
function Quiz() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [isOver, setIsOver] = useState(false)
    const location = useLocation()
    const history = useHistory()


    let retry = () => {
        setCurrentIndex(0)
        setScore(0)
        setIsOver(false)
    }

    let goHome = () => {
        history.push({ pathname: '/' });
    }

    let displayButtons = () => {
        return (
            <>
                <Button onClick={retry} variant="secondary">Retry</Button>{' '}
                <Button onClick={goHome} variant="secondary">Return to Home</Button>{' '}
            </>
        )
    }

    let displayScore = () => {
        return (
            <>
                Your Score: {score}
            </>
        )
    }

    let onChoiceSelected = (isCorrect, numOfQuestions) => {
        if (currentIndex < numOfQuestions - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setIsOver(true)
        }
        if (isCorrect) {
            setScore(score + 1)
        }
    }

    let displayTheQuiz = () => {
        let questions = quizzes.find(x => x.find(y => y.answer === location.state.flowerName))
        if (questions) {
            return (<Question question={questions[currentIndex]} choiceSelected={(isCorrect) => onChoiceSelected(isCorrect, questions.length)}></Question>)
        }

    }

    return (
        <Container>
            {isOver ? '' : displayTheQuiz()}
            {displayScore()}
            {isOver ? displayButtons() : ''}
        </Container>
    );
}

export default Quiz