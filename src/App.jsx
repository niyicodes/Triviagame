import { useState, useEffect } from "react";
import "./App.scss";

function App() {
 const [quizFetch, setQuizFetch] = useState({
  isloading: true,
  errorMessage: "",
  data: null,
 });

 const fetchQuiz = async () => {
  const res = await fetch("https://opentdb.com/api.php?amount=10");
  const data = await res.json();
  setQuizFetch({
   isloading: false,
   errorMessage: "",
   data: data,
  });
  console.log(data);
 };

 useEffect(() => {
  fetchQuiz();
 }, []);
 return (
  <div className="App">
   <h3 className="title">Trivia Game</h3>
   <p className="total-num">{15} questions in this game.</p>
   <div className="numOfQues">
    <h4 className="current-num">
     {1} / {15}
    </h4>
    <div className="details">
     <p className="detail">
      Category: <span>{"Entertainment"}</span>
     </p>
     <p className="detail">
      Type: <span>{"boolean"}</span>
     </p>
     <p className="detail">
      Difficulty: <span>{"medium"}</span>
     </p>
    </div>
   </div>
   <div className="triviaArea">
    <p className="question">{"What does the acronym CDN stand for in terms of networking?"}</p>
    <ul className="option-list">
      <li className="option">Lagos</li>
      <li className="option">abuja</li>
      <li className="option">Ekiti</li>
      <li className="option">Kaduna</li>
    </ul>
   </div>
   <button>Next ➡</button>
  </div>
 );
}

export default App;
