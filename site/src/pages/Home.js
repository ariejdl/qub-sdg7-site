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
        <Link to="/goal-overview" className="div1 action-item">i. Overview</Link>
        <div className="div2 action-item">2</div>
        <div className="div3 action-item">3</div>
        <div className="div4 action-item">4</div>
        <div className="div5 action-item">5</div>
        <div className="div6 row">
          <div className="action-item">6.1</div>
          <div className="action-item">6.2</div>
          <div className="action-item">6.3</div>
        </div>
        <div className="div7 action-item">7</div>
      </div>
    </>
  );
};

/*
    path: "/our-progress",
    path: "/renewable-energy",
    path: "/three-pillars",
    path: "/business-benefits",
    path: "/recommendations",
    path: "/best-practice",
    path: "/quiz",
    path: "/partnerships",
  */
