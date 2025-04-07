
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home />,
      errorElement : <Errorpage />
      
    },
    {
      path : '/about',
      element : <About />
    },
    {
      path : '/contact',
      element : <Contact />
    }

  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
