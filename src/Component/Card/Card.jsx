import React from "react";
import "./Card.scss"

const Card = ({ question, category, answers, type, difficulty, handleAnswer }) => {
 return (
  <div className="card">
   <div className="numOfQues">
    <h4 className="current-num">
     {1} / {15}
    </h4>
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
      return (
       <li
        key={idx}
        className="option"
        dangerouslySetInnerHTML={{ __html: answer }}
        onClick={() => handleAnswer(answer)}
       />
      );
     })}
    </ul>
   </div>
  </div>
 );
};

export default Card;
