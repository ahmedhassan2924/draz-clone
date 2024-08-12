import "./App.css";
import Header from "./components/Header";
import Sliders from "./components/Sliders";
import Categories from "./components/Categories";
import ProductdisplayScreen from "./components/ProductdisplayScreen";
import HomePage from "./components/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";



function App() {
  return (
    
    <>
   <BrowserRouter>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />

            
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
