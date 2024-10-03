import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bulma/css/bulma.min.css';
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
