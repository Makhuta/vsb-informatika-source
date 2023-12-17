import React, { useState } from 'react';
import styles from './styles.module.css';

const QuizGenerator = (questionsData, page, numberToGenerate = 10) => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [resultState, setResultState] = useState(new Array(10).fill(''));
  const numberOfQuestions = Math.min(numberToGenerate, questionsData.length);

  const generateQuestions = () => {
    const selectedQuestions = new Set();
    while (selectedQuestions.size < numberOfQuestions) {
      const randomIndex = Math.floor(Math.random() * questionsData.length);
      const question = questionsData[randomIndex];
      selectedQuestions.add(question);
    }
    setQuestions(Array.from(selectedQuestions));
    setUserAnswers(new Array(numberOfQuestions).fill(-1));
    setResultState(new Array(numberOfQuestions).fill(styles.unanswered));
    setShowResults(false);
  };

  const handleAnswerChange = (index, event) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = parseInt(event.target.id);
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
    const updatedState = userAnswers.map((answer, index) => {
      return answer == -1 ? styles.unanswered : questions[index].correctAnswer.includes(answer) ? styles.right : styles.wrong;
    });
    setResultState(updatedState);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (questions[index].correctAnswer.includes(userAnswers[index])) {
        score += 1;
      }
    });
    return score;
  };

  function parser(string, type) {
    return (
      <div dangerouslySetInnerHTML={{ __html: string }} />
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.quizControlls}>
          <button onClick={generateQuestions} type="button">Generate</button>
          {(
            <div className={styles.quizResult}>
              <h2>Your Results:</h2>
              <p>{`You scored ${showResults ? calculateScore() : 0} out of ${numberOfQuestions}`}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </div>
        {questions.length > 0 && (
          <div className={styles.quizWindow}>
            {questions.map((question, index) => (
              <div key={index} class={styles.quizQuestion + ' ' + resultState[index]}>
                {question.question.text === "" ? "" : <h3>{parser(question.question.text)}</h3>}
                {question.question.image === "" ? "" :
                  <div className={styles.quizQuestionImage}>
                    <img
                      id={index}
                      src={require('../../pages/tests/' + page + "/images/" + question.question.image).default}
                    />
                  </div>
                }
                <ul>
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <div className={styles.quizValues}>
                          <input
                            type="radio"
                            name={`question_${index}`}
                            value={option}
                            id={optionIndex}
                            checked={userAnswers[index] === optionIndex}
                            onChange={(event) => handleAnswerChange(index, event)}
                            disabled={showResults}
                          />
                          {option.text === "" ? "" : <text>{parser(option.text)}</text>}
                          {option.image === "" ? "" :
                            <img
                              id={optionIndex}
                              src={require('../../pages/tests/' + page + "/images/" + option.image).default}
                            />
                          }
                        </div>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default QuizGenerator;