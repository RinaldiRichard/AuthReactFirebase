import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import Private from "./pages/Private/Private";

function App() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
