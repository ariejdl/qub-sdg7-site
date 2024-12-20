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

      <h1 className="heading jumbo ml7" style={{ width: '85%' }}>
        <span className="text-wrapper">
          <span className="words">
            {
              "Affordable and clean energy".split(" ").map((v, i) => <span key={v + i} className="word">{ v }</span>)
            }</span>
        </span>
      </h1>

      <div className="line anim-in"></div>


      <p className="anim-in">
        Sustainable Development Goal (SDG) No. 7: "Ensure access to affordable, reliable, sustainable, and modern energy for all."
      </p>

      <p className="anim-in">
        As one of the UN Sustainable Development Goals (SDGs) adopted in 2015, Goal 7, targets world energy consumption and creation. While the goals are aspirational, concrete progress toward ensuring universal access to affordable, reliable and modern energy services is essential to equitable international development. Renewables and energy efficiency are large components of this goal, while cooperation and infrastructure are clear means by which this should be accomplished.
      </p>

      <br />

      <div className="bento-box heading anim-in">
        <Link to="/goal-overview" className="div1 action-item focus">
          Overview
          <img alt="decorative graphic" src="/shapes/9.png"  width="140" style={{ right: -20, bottom: -40, position: 'absolute' }} />
        </Link>
        <Link to="/our-progress" className="div2 action-item">
          Progress
          <img alt="decorative graphic" src="/shapes/2.png"  width="160" style={{ right: -20, bottom: -40, position: 'absolute' }} />
        </Link>
        <Link to="/three-pillars" className="div3 action-item">
          Three Pillars
          <img alt="decorative graphic" src="/shapes/1.png"  width="180" style={{ right: -20, bottom: -20, position: 'absolute' }} />
        </Link>
        <Link to="/org-benefits" className="div4 action-item">
          Organisational Benefits
          <img alt="decorative graphic" src="/shapes/8.png"  width="120" style={{ right: 20, bottom: 0, position: 'absolute' }} />
        </Link>
        <Link to="/recommendations" className="div5 action-item">
          Recommendations
          <img alt="decorative graphic" src="/shapes/4.png"  width="100" style={{ right: 20, bottom: -20, position: 'absolute' }} />
        </Link>
        <div className="div6 row">
          <Link to="/case-studies" className="action-item">
            Case Studies
            <img alt="decorative graphic" src="/shapes/6.png"  width="80" style={{ right: 20, bottom: -10, position: 'absolute' }} />
          </Link>
          <Link to="/partnerships" className="action-item" style={{ flex: 2 }}>
            Suggested Partnerships
            <img alt="decorative graphic" src="/shapes/3.png"  width="120" style={{ right: -10, bottom: -20, position: 'absolute' }} />
          </Link>
          <Link to="/energy-types" className="action-item">
            Energy Types
            <img alt="decorative graphic" src="/shapes/8.png"  width="140" style={{ right: -20, bottom: -20, position: 'absolute' }} />
          </Link>
        </div>
        <Link to="/quiz" className="div7 action-item">
          Quiz

          <img alt="decorative graphic" src="/shapes/5.png"  width="100" style={{ right: 20, bottom: -20, position: 'absolute' }} />
        </Link>
      </div>
    </>
  );
};
