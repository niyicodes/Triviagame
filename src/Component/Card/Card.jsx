import React from "react";
import "./Card.scss";

const Card = ({
 data: { question, category, answers, correct_answer, type, difficulty },
 handleAnswer,
 index,
 handleNextQuestion,
 showAnswer,
}) => {
 return (
  <div className="card">
   <div className="numOfQues">
    <h4 className="current-num">Question {index}</h4>
    <div className="details">
     <p className="detail">
      Category: <span>{category}</span>
     </p>
     <p className="detail">
      Type: <span>{type}</span>
     </p>
     <p className="detail">
      Difficulty: <span>{difficulty}</span>
     </p>
    </div>
   </div>

   <div className="triviaArea">
    <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
    <ul className="option-list">
     {answers.map((answer, idx) => {
      const specialClassName = showAnswer
       ? answer === correct_answer
         ? "green-button"
         : "red-button"
       : "";
      return (
       <button
        className={`normal-button ${specialClassName}`}
        onClick={() => handleAnswer(answer)}
        dangerouslySetInnerHTML={{ __html: answer }}
       />
      );
     })}
    </ul>
   </div>
   {showAnswer && <button onClick={handleNextQuestion}>Next</button>}
  </div>
 );
};

export default Card;
