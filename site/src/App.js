import './App.css';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "./pages/Home";
import { Scene3D } from "./components/Ball";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoalOverview } from './pages/GoalOverview';
import { ProgressPage } from './pages/Progress';
import { ThreePillarsPage } from './pages/ThreePillars';
import { QuizPage } from './pages/Quiz';

const ErrorPage = ({ text = "Page Not Found" }) => {
  return <div>
    <h3 className="header">{ text }</h3>
    <img src="/Darwin1.png" alt="Page not ready" width="180" style={{ 'margin': 'auto' }}/>
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
    window.scrollTo(0, 0);

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
          <div className="watermark-image"></div>
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
                    <Link to="/business-benefits" className="link-item">Business Benefits</Link>
                    <Link to="/recommendations" className="link-item">Recommendations</Link>
                    <Link to="/best-practice" className="link-item">Best Practice</Link>
                    <Link to="/partnerships" className="link-item">Partnerships</Link>
                    <Link to="/renewable-energy" className="link-item">Renewable Energy</Link>
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
    errorElement: <PageWrapper notFound={true} Page={<ErrorPage text="Overview - Page not ready" />} />
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
    path: "/renewable-energy",
    element: <PageWrapper secondary Page={<ErrorPage text="Renewable Energy - Page not ready" />} />,
  },
  {
    path: "/three-pillars",
    element: <PageWrapper secondary Page={<ThreePillarsPage />} />,
  },
  {
    path: "/business-benefits",
    element: <PageWrapper secondary Page={<ErrorPage text="Business Benefits - Page not ready" />} />,
  },
  {
    path: "/recommendations",
    element: <PageWrapper secondary Page={<ErrorPage text="Recommendations - Page not ready" />} />,
  },
  {
    path: "/best-practice",
    element: <PageWrapper secondary Page={<ErrorPage text="Best Practice - Page not ready" />} />,
  },
  {
    path: "/quiz",
    element: <PageWrapper secondary Page={<QuizPage />} />,
  },
  {
    path: "/partnerships",
    element: <PageWrapper secondary Page={<ErrorPage text="Partnerships - Page not ready" />} />,
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
