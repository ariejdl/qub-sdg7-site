
import "./Quiz.css";


// TODO
const QUIZ_DATA = {
  question: "1 Lorem ipsum abc def?",
  options: [
    {
      value: 'abc',
      next: {
        question: "1.1 Lorem",
        options: []
      }
    },
    {
      value: 'def',
      next: {
        question: "1.2 Lorem",
        options: []
      }
    },
    {
      value: 'ghi',
      next: {
        question: "1.2 Lorem",
        options: []
      }
    }
  ]
}

export const QuizPage = () => {

  return <div>

    <h1 className="heading">Quiz</h1>

    <p>Lorem ipsum dolor sit amet, consectetur<sup>1</sup> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim?</p>
    
    <br />

    <div className="radio-group">
        <label>
            Option 1
            <input type="radio" name="option" value="1" />
            <span className="checkmark"></span>
        </label>

        <label>
            Option 2
            <input type="radio" name="option" value="2" />
            <span className="checkmark"></span>
        </label>

        <label>
            Option 3
            <input type="radio" name="option" value="3" />
            <span className="checkmark"></span>
        </label>
    </div>

    <br />

    <button>Next</button>

    <hr />

    <ul className="unstyled">
      <li>1. XYZ, 123</li>
      <li>2. ABC, 123</li>
    </ul>

  </div>
}