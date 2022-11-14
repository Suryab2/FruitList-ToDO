import "./App.css";
import AddItem from "./Components/addItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Signin from "./Pages/SignIn/signIn";
import SignUp from "./Pages/SignUp/signUp";

export const Protected = ({ children }) => {
  if (JSON.parse(localStorage.getItem("auth")) === true) {
    return children;
  }
  return "no access";
};
function App() {
  const [pass, setflag] = useState("false");
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin setflag={setflag} />} />
            <Route
              path="/*"
              element={
                <Protected>
                  <AddItem />
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
