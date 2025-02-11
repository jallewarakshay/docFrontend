import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import TestApi from "./components/TestApi";
import Home from "./pages/Home";

import DashboardPatient from "./pages/DashboardPatient";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Videopage from "./pages/Videopage";

function App() {
  const router = createBrowserRouter([
  ])
  return (
    
    <div className="App">
    {/* <TestApi/> */}
     <Header/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
