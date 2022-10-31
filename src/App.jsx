import { useState, useEffect } from "react";
import "./App.scss";
import Card from "./Component/Card/Card";

function App() {
 const [questions, setQuestions] = useState([]);
 const [currentIndex, setCurrentIndex] = useState(0);
 const [score, setScore] = useState(0);
 const [showAnswer, setShowAnswer] = useState(false);

 useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=20")
   .then((res) => res.json())
   .then((data) => {
    const questions = data.results.map((question) => ({
     ...question,
     answers: [question.correct_answer, ...question.incorrect_answers].sort(
      () => Math.floor(Math.random() - 0.5)
     ),
     category: question.category,
     difficulty: question.difficulty,
     type: question.type,
    }));
    setQuestions(questions);
   });
 }, []);

 const handleAnswer = (answer) => {
  if (!showAnswer) {
   if (answer === questions[currentIndex].correct_answer) {
    setScore(score + 1);
   }
  }
  setShowAnswer(!false);
 };

 const handleNextQuestion = () => {
  setCurrentIndex(currentIndex + 1);
  setShowAnswer(false);
 };
 return (
  <div className="App">
   <h3 className="title">Trivia Game</h3>
   <p className="total-num">{questions.length} questions in this game.</p>

   {questions.length > 0 ? (
    <div className="container">
     {currentIndex >= questions.length ? (
      <p>Game Ended, Your score is {score}</p>
     ) : (
      <Card
       handleAnswer={handleAnswer}
       index={currentIndex + 1}
       handleNextQuestion={handleNextQuestion}
       data={questions[currentIndex]}
       showAnswer={showAnswer}
      />
     )}
    </div>
   ) : (
    <p className="pre-load">Fetching Questions...</p>
   )}
  </div>
 );
}

export default App;
