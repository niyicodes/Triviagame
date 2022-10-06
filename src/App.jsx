import { useState, useEffect } from "react";
import "./App.scss";
import Card from "./Component/Card/Card";


function App() {
 const [questions, setQuestions] = useState([]);
 const [currentIndex, setCurrentIndex] = useState(0);
 const [score, setScore] = useState(0);



 useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=10")
   .then((res) => res.json())
   .then((data) => {
    const questions = data.results.map((question) => ({
     ...question,
     answers: [question.correct_answer, ...question.incorrect_answers].sort(
      () => Math.floor(Math.random() * 0.5)
     ),
     category: question.category,
     difficulty: question.difficulty,
     type: question.type,
    }));
    setQuestions(questions);
   });
 }, []);

 const handleAnswer = (answer) => {
  if (answer === questions[currentIndex].correct_answer) {
   setScore(score + 1);
  }
  setCurrentIndex(currentIndex + 1);
 };
 return (
  <div className="App">
   <h3 className="title">Trivia Game</h3>
   <p className="total-num">{questions.length} questions in this game.</p>
   {questions.map((question) => {
    return (
     <Card
      question={question.question}
      answers={question.answers}
      category={question.category}
      type={question.type}
      difficulty={question.difficulty}
      handleAnswer={handleAnswer}
     />
    );
   })}
  </div>
 );
}
{
 /* <Trivia handleAnswer={handleAnswer} data={questions[currentIndex]} /> */
}

{
 /* <Trivia 
            key={correct_answer}
            cat={category}
            correct_answer={correct_answer}
            answers={answers}
            type={type}
            question={question}
            difficulty={difficulty}
          /> */
}
export default App;
