import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  const submit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: user, role: role }),
    };

    const fetchData = async () => {
      const response = await fetch("/todo/adduser", requestOptions);
      const res = await response.json();
    };
    fetchData();

    setUser("");
    setRole("");
    navigate("/");
  };

  return (
    <>
      <div className="signup_container">
        <div className="card">
          <h2>Create Account</h2>
          <form className="form">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setUser(e.target.value)}
            />

            <input type="password" placeholder="Password" />
            <input
              type="text"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
            />
            <button onClick={submit}>Sign Up</button>
          </form>
          <footer>Existing Users, Sign In</footer>
        </div>
      </div>
    </>
  );
};
export default SignUp;
