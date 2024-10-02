import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/Home";

const ErrorPage = ({ text = "Page Not Found" }) => {
  return <div>
    <h3 className="header">{ text }</h3>
    <img src="/Darwin1.png" alt="Page not ready" width="180" style={{ 'margin': 'auto' }}/>
  </div>
}

/*
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import AmorphousBall from './Ball'

<Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AmorphousBall />
      <OrbitControls />
    </Canvas>
    */

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/goal-overview",
    element: <ErrorPage text="Overview - Page not ready" />,
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
      <div className="content-area">
        <div className="details">
          <img src="/blocks.svg" style={{ position: 'absolute', top: -20, left: 20 }} />
          <img src="/grid.svg" style={{ position: 'absolute', top: 40, left: -40, transform: 'rotate(30deg) scale(0.8)' }} />
          <img src="/grid.svg" style={{ position: 'absolute', top: -40, left: 360, transform: 'rotate(20deg) scale(1.5)', opacity: 0.5 }} />
        </div>
        <div className="content-wrapper">
          <RouterProvider router={router} />

          <footer>Group 3 - LFE8031, QUB 2024</footer>
        </div>
      </div>
    </>
  );
}

export default App;
