import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
       </Routes>
    </div>
  );
}

export default App;
