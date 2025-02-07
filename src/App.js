import { Footer } from "./components/Footer";
import Header from "./components/Header"
import TestApi from "./components/TestApi";
import Home from "./pages/Home";

function App() {
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
