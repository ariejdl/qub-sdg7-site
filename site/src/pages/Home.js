import "./Home.css"
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1 className="heading jumbo">
        Affordable and <br />
        clean energy
      </h1>

      <div className="line"></div>

      <div className="subtitle">
        <img src="/UN Logo.svg" />
        <div>
          <h3 className="heading">United Nations SDG7</h3>
          <h3 className="heading">Information pack for large organisations</h3>
        </div>
      </div>

      <p>
        "Ensure access to affordable, reliable, sustainable, and modern energy for all"
      </p>

      <p>
        As one of the UN Sustainable Development Goals (SDGs) adopted in 2015, Goal 7, targets world energy consumption and creation. While the goals are aspirational, concrete progress toward ensuring universal access to affordable, reliable and modern energy services is essential to equitable international development. Renewables and energy efficiency are large components of this goal, while cooperation and infrastructure are clear means by which this should be accomplished.
      </p>

      <br />

      <div className="bento-box heading">
        <Link to="/goal-overview" className="div1 action-item">
          Overview
          <div className="fancy-circle fancy-gradient" style={{ right: -40, bottom: -40, position: 'absolute' }} />
        </Link>
        <Link to="/our-progress" className="div2 action-item">
          Progress
          <img src="/shapes/2.png"  width="180" style={{ right: -20, bottom: -40, position: 'absolute' }} />
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
