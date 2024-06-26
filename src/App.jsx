import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ServicesQA from './components/ServicesQA/index';
import ServicesHealthcare from './components/servicesHealthcare/index';
import Contact from './components/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/QA",
      element: (
        <>
          <Navbar />
          <ServicesQA />
          <Footer />
        </>
      ),
    },
    {
      path: "/Healthcare",
      element: (
        <> 
          <Navbar />
          <ServicesHealthcare />
          <Footer />
        </>
      ),
    },
    {
      path: "/Feature",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
