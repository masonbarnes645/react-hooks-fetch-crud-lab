import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const API = "http://localhost:4000/questions/";
  const [questions, setQuestions] = useState([])
  
useEffect(() => {
  fetch(API)
  .then((res) => res.json())
  .then(setQuestions)
  .catch(console.log)
},[]);


const handlePatch = (questionId, integer) => {
  fetch(API + questionId,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "correctIndex": integer

    })
  })
  .then((res) => res.json())
  .then(patchedQuestion => setQuestions((current) => current.map((question) => question.id === patchedQuestion.id ? patchedQuestion : question)) )
  .catch(console.log())
}


const handleDelete = (questionId) =>  {
  fetch(`http://localhost:4000/questions/${questionId}`,{
    method: 'DELETE',
  })
  .then(res => {setQuestions(current => current.filter(question =>  question.id !== questionId))
  })
}

const handlePost = (newQuestion) => setQuestions(current => [...current, newQuestion])


  


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handlePost={handlePost}  /> : <QuestionList handleDelete={handleDelete} questions={questions} handlePatch={handlePatch} />}
    </main>
  );
}

export default App;
