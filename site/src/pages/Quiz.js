
import { useState } from "react";
import "./Quiz.css";

import regexifyString from 'regexify-string';

import { QUIZ_DATA } from "./QuizData";

const START_ID = QUIZ_DATA[0].id

export const QuizPage = () => {

  const [currentId, setCurrentId] = useState(START_ID);
  const [currentOption, setCurrentOption] = useState(undefined);
  const [resultInfo, setResult] = useState("");
  const data = QUIZ_DATA.filter(d => d.id === currentId)[0];

  return <div>

    <h1 className="heading anim-in">Quiz</h1>

    <p>Adoption of clean, sustainable energy is available today for your business. However, the correct sustainability solution will be different for every field. Take our interactive quiz to best guide your business’ action plan toward a more sustainable use of energy.</p>

    <hr />

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
          <p className="result-info">{ regexifyString({
            pattern: /\[\d+\]/gim,
            decorator: (match, index) => {
              return <sup key={index}>{match.replace('[', '').replace(']', '')}</sup>
            },
            input: resultInfo
          }) }</p>
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
    }}>Start again</button> : <>
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

    <ul className="unstyled references">
      <li>[1] Patrão, C., de Almeida, A.T., Harrison, B., Schlomann, B., Damnics, M. and Fonseca, P., (2017) Low power mode energy demand of household appliances—SELINA and APP projects. <i>Energy Efficiency</i>, 10(1): 1299-1314 https://doi.org/10.1007/s12053-017-9518-3</li>
      <li>[2] Oprea, S.V., Bâra, A. and Tor, O.B. (2018) June. Three-layer informatics solution for demand response management in the smart grid context. In <i>IOP Conference Series: Earth and Environmental Science</i> (Vol. 172, No. 1, p. 012001). IOP Publishing doi:10.1088/1755-1315/172/1/012001 </li>
      <li>[3] Gentile, N. (2022) Improving lighting energy efficiency through user response. <i>Energy and Buildings</i>, 26(3): 112-122 https://doi.org/10.1016/j.enbuild.2022.112022</li>
      <li>[4] Gans, W., Alberini, A. and Longo, A. (2013) Smart meter devices and the effect of feedback on residential electricity consumption: Evidence from a natural experiment in Northern Ireland. <i>Energy Economics</i>, 3(6): 729-743 https://doi.org/10.1016/j.eneco.2012.11.022</li>
      <li>[5] Budnitz, H. (2024) From interest to evangelist: Accelerating the adoption of electric vehicles via distinct parking and charging practices in the United Kingdom. <i>Energy Research & Social Science</i>, 11(6): 103-675 https://doi.org/10.1016/j.erss.2024.103675</li>
      <li>[6] Tingey, M. and Webb, J. (2020) Governance institutions and prospects for local energy innovation: Laggards and leaders among UK local authorities. <i>Energy Policy</i>, 13(8): 111-211 https://doi.org/10.1016/j.enpol.2019.111211</li>
      <li>[7] Keogh-Brown, M.R., Jensen, H.T., Edmunds, W.J. and Smith, R.D. (2020) The impact of Covid-19, associated behaviours and policies on the UK economy: A computable general equilibrium model. <i>SSM-population health</i>, 1(2): 100-651 https://doi.org/10.1016/j.ssmph.2020.100651</li>
      <li>[8] Lygnerud, K., Ottosson, J., Kensby, J. and Johansson, L. (2021) Business models combining heat pumps and district heating in buildings generate cost and emission savings. <i>Energy</i>, 23(4): 121-202 https://doi.org/10.1016/j.energy.2021.121202</li>
      <li>[9] Biswas, K., Patel, T., Shrestha, S., Smith, D. and Desjarlais, A. (2019) Whole building retrofit using vacuum insulation panels and energy performance analysis. <i>Energy and buildings</i>, 20(3): 109-430 https://doi.org/10.1016/j.enbuild.2019.109430</li>
      <li>[10] Liu, L. and Ma, R. (2021) Recent progress in CO2 transformation with arynes. <i>Chinese Science Bulletin</i>, 6(6): 739-747 https://doi.org/10.1360/TB-2020-0353</li>
      <li>[11] Jo, H.K., Park, H.M. and Kim, J.Y. (2023) Carbon Offset Service of Urban Park Trees and Desirable Planting Strategies for Several Metropolitan Cities in South Korea. <i>Forests</i>, 14(2): 278 https://doi.org/10.3390/f14020278</li>
      <li>[12] Mirjalili, S.M.A., Aslani, A. and Zahedi, R. (2023) Towards sustainable commercial-office buildings: harnessing the power of solar panels, electric vehicles, and smart charging for enhanced energy efficiency and environmental responsibility. <i>Case Studies in Thermal Engineering</i>, 5(2): 103-696 https://doi.org/10.1016/j.csite.2023.103696</li>
      <li>[13] Anber, M. and Aboshosha, B.W. (2024) The impact of using an IoT-based automatic solar panel cleaner on building energy performance. <i>International Journal of Low-Carbon Technologies</i>, 1(9): 1888-1900 https://doi.org/10.1093/ijlct/ctae137</li>
    </ul>

  </div>
}