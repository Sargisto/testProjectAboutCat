import { BrowserRouter, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
// Route
import './App.css';

function App() {
  return (
    <BrowserRouter>

      {/* <button onClick={changeStateName}>Change State Name to Sargis</button> */}

      <div className="container">
        <Sidebar />
        <Home/>
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path={'/about'} element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
