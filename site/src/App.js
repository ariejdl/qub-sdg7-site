import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "./pages/Home";
import { Scene3D } from "./components/Ball";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ErrorPage = ({ text = "Page Not Found" }) => {
  return <div>
    <h3 className="header">{ text }</h3>
    <img src="/Darwin1.png" alt="Page not ready" width="180" style={{ 'margin': 'auto' }}/>
  </div>
}

const PageWrapper = ({ Page, notFound=false }) => {

  const location = useLocation();
  const [largeBall, setLargeBall] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" || notFound) {
      setLargeBall(true)
    } else {
      setLargeBall(false)
    }
  }, [location.pathname, notFound])

  return (
    <>
      <div className="content-area">
        <Scene3D large={largeBall} />
        <div className="details" style={{ zIndex: -1 }}>
          <img
            src="/blocks.svg"
            style={{ position: "absolute", top: -20, left: 20 }}
          />
          <img src="/grid.svg" className="pulsing-mesh" />
          <img src="/grid.svg" className="rotating-mesh" />
        </div>
        <div className="content-wrapper">
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
    element: <PageWrapper Page={<ErrorPage text="Overview - Page not ready" />} />,
  },
  {
    path: "/our-progress",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/renewable-energy",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/three-pillars",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/business-benefits",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/recommendations",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/best-practice",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/quiz",
    element: <ErrorPage text="Page not ready" />,
  },
  {
    path: "/partnerships",
    element: <ErrorPage text="Page not ready" />,
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
