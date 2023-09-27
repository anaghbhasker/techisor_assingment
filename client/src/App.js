import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";

function App() {

  
  
  return (
    <Router>
        <Routes>
          <Route path="/"  element={ <LoginPage/> } />
        </Routes>
        <Routes>
          <Route path="/signup" element={ <SignUpPage/> } />
        </Routes>
        <Routes>
          <Route path="/home" element={ <HomePage/> } />
        </Routes>
    </Router>
  );
}

export default App;
