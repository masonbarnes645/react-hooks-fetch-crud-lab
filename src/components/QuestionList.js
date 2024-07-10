import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDelete, answers, handlePatch }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>   {questions.map((question) => ( <QuestionItem key={question.id} {...question} handleDelete={handleDelete} handlePatch={handlePatch}/>))} </ul>
    </section>
  );
}

export default QuestionList;
