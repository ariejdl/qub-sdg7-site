import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const ErrorPage = ({ text = "Page Not Found" }) => {
  return <div>
    <h3 className="header">{ text }</h3>
    <img src="/Darwin1.png" alt="Page not ready" width="180" style={{ 'margin': 'auto' }}/>
  </div>
}

const HomePage = () => {
  return <><h1 className="heading jumbo">Affordable and <br/>clean energy</h1>

  <p>
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
  </p>

  <div className="bento-box">
    <div className="div1 action-item">1</div>
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
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/abc",
    element: <ErrorPage text="Page not ready" />,
  },
]);

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

function App() {
  return (
    <div className="content-area">
           <RouterProvider router={router} />
    </div>
  );
}

export default App;
