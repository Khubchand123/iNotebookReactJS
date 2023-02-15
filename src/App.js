import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/home" element={<Home />}></Route> 
          <Route exact path="/about" element={<About />}></Route> 
        </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
