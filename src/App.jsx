import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quizFetch, setQuizFetch] = useState({
    isloading: true,
    errorMessage: "",
    data: null
  })

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      
    </div>
  )
}

export default App
