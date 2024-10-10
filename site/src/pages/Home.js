import { useEffect } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import anime from "animejs";

export const HomePage = () => {

  useEffect(() => {

    anime.timeline()
      .add({
        targets: '.ml7 .word',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        opacity: 1,
        translateZ: 0,
        rotateZ: [10, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 200 * i
      })
    
  }, [])

  return (
    <>

      <h1 className="heading jumbo ml7" style={{ width: '80%' }}>
        <span className="text-wrapper">
          <span className="words">
            {
              "Affordable and clean energy".split(" ").map((v, i) => <span key={v + i} className="word">{ v }</span>)
            }</span>
        </span>
      </h1>

      <div className="line anim-in"></div>

      <div className="subtitle anim-in">
        <img src="/UN Logo.svg" />
        <div>
          <h3 className="heading">United Nations SDG7</h3>
          <h3 className="heading">Information pack for large organisations</h3>
        </div>
      </div>

      <p className="anim-in">
        "Ensure access to affordable, reliable, sustainable, and modern energy for all"
      </p>

      <p className="anim-in">
        As one of the UN Sustainable Development Goals (SDGs) adopted in 2015, Goal 7, targets world energy consumption and creation. While the goals are aspirational, concrete progress toward ensuring universal access to affordable, reliable and modern energy services is essential to equitable international development. Renewables and energy efficiency are large components of this goal, while cooperation and infrastructure are clear means by which this should be accomplished.
      </p>

      <br />

      <div className="bento-box heading anim-in">
        <Link to="/goal-overview" className="div1 action-item focus">
          Overview
          <img src="/shapes/9.png"  width="140" style={{ right: -20, bottom: -40, position: 'absolute' }} />
        </Link>
        <Link to="/our-progress" className="div2 action-item">
          Progress
          <img src="/shapes/2.png"  width="160" style={{ right: -20, bottom: -40, position: 'absolute' }} />
        </Link>
        <Link to="/three-pillars" className="div3 action-item">
          Three Pillars
          <img src="/shapes/1.png"  width="180" style={{ right: -20, bottom: -20, position: 'absolute' }} />
        </Link>
        <Link to="/business-benefits" className="div4 action-item">
          Business Benefits
          <img src="/shapes/8.png"  width="120" style={{ right: 20, bottom: 0, position: 'absolute' }} />
        </Link>
        <Link to="/recommendations" className="div5 action-item">
          Recommendations
          <img src="/shapes/4.png"  width="100" style={{ right: 20, bottom: -20, position: 'absolute' }} />
        </Link>
        <div className="div6 row">
          <Link to="/best-practice" className="action-item">
            Best Practice
            <img src="/shapes/6.png"  width="80" style={{ right: 20, bottom: -10, position: 'absolute' }} />
          </Link>
          <Link to="/partnerships" className="action-item">
            Organisation Partnerships
            <img src="/shapes/3.png"  width="120" style={{ right: -10, bottom: -20, position: 'absolute' }} />
          </Link>
          <Link to="/renewable-energy" className="action-item">
            Renewable Energy
            <img src="/shapes/8.png"  width="140" style={{ right: -20, bottom: -20, position: 'absolute' }} />
          </Link>
        </div>
        <Link to="/quiz" className="div7 action-item">
          Quiz

          <img src="/shapes/5.png"  width="100" style={{ right: 20, bottom: -20, position: 'absolute' }} />
        </Link>
      </div>
    </>
  );
};
