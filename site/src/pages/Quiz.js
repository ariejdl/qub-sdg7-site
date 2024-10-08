
import { useState } from "react";
import "./Quiz.css";

import { QUIZ_DATA } from "./QuizData";
import { QUIZ_REFERENCES } from "./QuizReferences";

const START_ID = QUIZ_DATA[0].id

export const QuizPage = () => {

  const [currentId, setCurrentId] = useState(START_ID);
  const [currentOption, setCurrentOption] = useState(undefined);
  const [resultInfo, setResult] = useState("");
  const data = QUIZ_DATA.filter(d => d.id === currentId)[0];

  return <div>

    <h1 className="heading anim-in">Quiz</h1>

    {
      data?.question ? <><p>
        { data.question }
      </p>
      <br />
      </> : null
    }
    
    {
      (!data && !resultInfo) ?
        <p>Something went wrong!</p> : null
    }

    {
      resultInfo ?
        <>
          <strong>Your Result:</strong>
          <p className="result-info">{ resultInfo }</p>
        </> :
        <div className="radio-group" key={currentId}>
          {
            (data?.options || []).map((option, i) => {
              return <label key={i + 1} onClick={() => {
                if (option.result) {
                  setCurrentOption(i + 1);
                } else {
                  setCurrentOption(i + 1)
                }
              }}>
                    { option.value }
                    <input type="radio" name="option" value={i + 1} />
                    <span className="checkmark"></span>
                </label>
            })
          }
        </div>
    }

  
    <br />

    { resultInfo ? <button onClick={() => {
      setCurrentId(START_ID);
      setResult("")
    }}>Reset</button> : <>
      <button onClick={() => {
        if (data && currentOption) {
          const option = data.options[currentOption - 1]
          if (option.id) {
            setCurrentId(option.id)
          } else if (option.result) {
            setResult(option.result)
            setCurrentId(undefined);
          } else {
            throw new Error("invalid option")
          }
          setCurrentOption(undefined)
        }
      }}>Next</button>
    </>}

    <hr />

    <ul className="unstyled quiz-references">
      {
        QUIZ_REFERENCES.map((v, i) => {
          return <li key={i}>{ v }</li>
        })
      }
    </ul>

  </div>
}