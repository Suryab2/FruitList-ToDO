import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

function Signin({ setflag }) {
  const navigate = useNavigate("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [userdb, getUser] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth")) === true) {
      navigate("/cart");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/todo/getuser", {
        headers: { accept: "application/json" },
      });
      const res = await response.json();
      getUser(res);
    };
    fetchData();
  }, []);

  function submitlogin() {
    userdb.map((item) => {
      if (pass === "admin" && user === item.user_name) {
        localStorage.setItem("auth", true);
        localStorage.setItem("uid", item.user_id);
      }
    });

    navigate("/cart");
  }

  return (
    // <>
    <div className="parentsignin_container">
      <div className="signin_container">
        <div className="login-form">
          <h2 id="signin_h2">Login</h2>
          <input
            className="signin_control"
            type="text"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          ></input>
          <input
            className="signin_control"
            type="text"
            placeholder="password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <button
            id="login_btn"
            className="signin_control"
            onClick={submitlogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>

    // </>
  );
}

export default Signin;
