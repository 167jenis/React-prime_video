import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
