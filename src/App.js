import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";


function App() {
  return (
    <>
    <Navbar/>
    <SignUpModal/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
    </>
  );
}

export default App;
