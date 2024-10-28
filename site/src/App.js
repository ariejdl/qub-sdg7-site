import './App.css';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

import { Scene3D } from "./components/Ball";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { HomePage } from "./pages/Home";
import { GoalOverview } from './pages/GoalOverview';
import { ProgressPage } from './pages/Progress';
import { ThreePillarsPage } from './pages/ThreePillars';
import { QuizPage } from './pages/Quiz';
import { EnergyTypesPage } from './pages/EnergyTypes';
import { OrgBenefitsPage } from './pages/OrgBenefits';
import { RecommendationsPage } from './pages/Recommendations';
import { CaseStudiesPage } from './pages/CaseStudies';
import { PartnershipsPage } from './pages/Partnerships';
import { scrollTop } from './utils';

const ErrorPage = ({ text = "Page Not Found" }) => {
  return <div>
    <h3 className="header">{ text }</h3>
    <br />
    <img src="/Darwin1.png" alt="Page not ready" width="180" style={{ display: 'block' }}/>
    <br />
    <br />
    <Link to="/">Home</Link>
  </div>
}

const PageWrapper = ({ Page, notFound=false, secondary=false }) => {

  const location = useLocation();
  const [largeBall, setLargeBall] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const closeFn = () => {
        setMenuOpen(false);
      }
      document.body.addEventListener('click', closeFn);
      return () => {
        document.body.removeEventListener('click', closeFn);
      }
    }
  }, [menuOpen]);

  useEffect(() => {
    scrollTop();

    document.querySelectorAll(".anim-in").forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('loaded');
      }, i * 50);
    })

    if (location.pathname === "/" || notFound) {
      setLargeBall(true)
    } else {
      setLargeBall(false)
    }
  }, [location.pathname, notFound])

  useEffect(() => {
    const el = document.querySelector(".main-links")
    if (!el) {
      return
    }
    if (menuOpen) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  }, [menuOpen])

  return (
    <>
      <div className="content-area">
        { largeBall ? <Scene3D large={largeBall} /> : null }
        <div className="details" style={{ zIndex: -1 }}>
          <img
            src="/blocks.svg"
            style={{ position: "absolute", top: -20, left: 20 }}
          />
          <img src="/grid.svg" className="pulsing-mesh" />
          <img src="/grid.svg" className="rotating-mesh" />
        </div>
        <div className="content-wrapper">
          { largeBall ? <div className="watermark-image"></div> : null }
          {
            secondary ?
              <>
              <div style={{ display: 'flex', gap: 10, marginLeft: -10 }}>
                <div onClick={(e) => {
                  setMenuOpen(v => !v)
                  e.stopPropagation()
                }} className="hamburger-menu" style={{ marginTop: 16, height: 30, width: 30, padding: 5 }}>
                  <img src="hamburger.png" width="30" />
                </div>
                <Link className="no-link-style title-link" to="/"><h1 className="heading" style={{ marginTop: 10, marginBottom: 10 }}>Affordable and clean energy, SDG7</h1></Link>
              </div>
              <div className="main-links anim-in-fancy">
                <div className="inner">
                  <div className="column">
                    <h3>General</h3>
                    <Link to="/goal-overview" className="link-item">Overview</Link>
                    <Link to="/our-progress" className="link-item">Progress</Link>
                    <Link to="/three-pillars" className="link-item">Three Pillars</Link>
                  </div>
                  <div className="column">
                    <h3>Applications</h3>
                    <Link to="/org-benefits" className="link-item">Organisational Benefits</Link>
                    <Link to="/recommendations" className="link-item">Recommendations</Link>
                    <Link to="/case-studies" className="link-item">Case Studies</Link>
                    <Link to="/partnerships" className="link-item">Suggested Partnerships</Link>
                    <Link to="/energy-types" className="link-item">Energy Types</Link>
                  </div>
                  <div className="column">
                    <h3>Review</h3>
                    <Link to="/quiz" className="link-item">Quiz</Link>
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', left: 10, right: 10, height: 4, background: 'rgba(0,0,0,0.2)' }}></div>
              </>
              : null
          }
          { Page }
          <footer>Group 3 - LFE8031, QUB 2024</footer>
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper Page={<HomePage />} />,
    errorElement: <PageWrapper notFound={true} Page={<ErrorPage text="404 - Couldn't find that!" />} />
  },
  {
    path: "/goal-overview",
    element: <PageWrapper secondary Page={<GoalOverview />} />,
  },
  {
    path: "/our-progress",
    element: <PageWrapper secondary Page={<ProgressPage />} />,
  },
  {
    path: "/energy-types",
    element: <PageWrapper secondary Page={<EnergyTypesPage />} />,
  },
  {
    path: "/three-pillars",
    element: <PageWrapper secondary Page={<ThreePillarsPage />} />,
  },
  {
    path: "/org-benefits",
    element: <PageWrapper secondary Page={<OrgBenefitsPage />} />,
  },
  {
    path: "/recommendations",
    element: <PageWrapper secondary Page={<RecommendationsPage />} />,
  },
  {
    path: "/case-studies",
    element: <PageWrapper secondary Page={<CaseStudiesPage />} />,
  },
  {
    path: "/quiz",
    element: <PageWrapper secondary Page={<QuizPage />} />,
  },
  {
    path: "/partnerships",
    element: <PageWrapper secondary Page={<PartnershipsPage />} />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
