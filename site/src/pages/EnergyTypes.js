import { useEffect, useState } from "react";
import "./EnergyTypes.css";

/* can delete when finished */
export const EnergyTypesPage = () => {
  // https://jsfiddle.net/juanjus98/b5vAQ/

  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    document.querySelectorAll(".flip").forEach((el, i) => {
      el.addEventListener("click", () => {
        setFlipped(i);
      });
      // $(this).find(".card").toggleClass("flipped");
    });
  }, []);

  return (
    <div>
      <h1 className="heading anim-in">Energy Types</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur<sup>1</sup> adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis<sup>2</sup> nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum
      </p>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Fossil</th>
            <th style={{ width: "50%" }}>Renewable</th>
          </tr>
        </thead>
      </table>

      <div className="parent">
        <div className="div1">

          <div className="flip">
            <div className={"card " + ((flipped === 0) ? "flipped": "") }>
              <div className="face front">Coal</div>
              <div className="face back">Back</div>
            </div>
          </div>

        </div>
        <div className="div2">

         <div className="flip">
            <div className={"card " + ((flipped === 1) ? "flipped": "") }>
              <div className="face front">Wind</div>
              <div className="face back">Back</div>
            </div>
          </div>

        </div>
        <div className="div3">
           <div className="flip">
            <div className={"card " + ((flipped === 2) ? "flipped": "") }>
              <div className="face front">Oil</div>
              <div className="face back">Back</div>
            </div>
          </div>
        </div>
        <div className="div4">
           <div className="flip">
            <div className={"card " + ((flipped === 3) ? "flipped": "") }>
              <div className="face front">Solar</div>
              <div className="face back">Back</div>
            </div>
          </div>
        </div>
        <div className="div5">
           <div className="flip">
            <div className={"card " + ((flipped === 4) ? "flipped": "") }>
              <div className="face front">Natural Gas</div>
              <div className="face back">Back</div>
            </div>
          </div>
        </div>
        <div className="div6">
           <div className="flip">
            <div className={"card " + ((flipped === 5) ? "flipped": "") }>
              <div className="face front">Hydrogen</div>
              <div className="face back">Back</div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <ul className="unstyled references">
        <li>1. XYZ, 123</li>
        <li>2. ABC, 123</li>
      </ul>
    </div>
  );
};
