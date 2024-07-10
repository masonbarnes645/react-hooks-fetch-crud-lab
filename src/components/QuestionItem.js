import React, { useState } from "react";

function QuestionItem({ id, prompt, answers, correctIndex, handleDelete, handlePatch }) {
  const [answerSelected, setAnswerSelected] = useState(correctIndex)
  const isAnswerCorrect = (option) => {
    setAnswerSelected(option.target.value)
    handlePatch(id, option.target.value)
  }
  
  console.log(answerSelected)
  const options = answers.map((answer, index) => (
    <option key={index} value={index} id={id}>
      {answer}
    </option>
  ));
  
  
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={answerSelected} onChange={(option) => isAnswerCorrect(option)}>{options}</select>
      </label>
      <button onClick={() => handleDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
