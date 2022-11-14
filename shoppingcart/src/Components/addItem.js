import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Display from "./display";
import "./display.css";

const AddItem = () => {
  const [input, getValue] = useState("");
  const [flagForDisp, setDispFlag] = useState(false);
  const inputElement = useRef("");
  const navigate = useNavigate();
  const uid = JSON.parse(localStorage.getItem("uid"));

  const submitInput = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input, uid: uid }),
    };

    const fetchData = async () => {
      const response = await fetch("/todo/addList", requestOptions);
      const res = await response.json();
    };
    fetchData();
    setDispFlag(!flagForDisp);

    getValue("");
  };

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <input
            type="text"
            value={input}
            ref={inputElement}
            placeholder="Add item"
            onChange={(e) => getValue(e.target.value)}
          ></input>
          <div className="sub_log_div">
            <button className="submit_btn" onClick={submitInput}>
              Submit
            </button>
            <button className="logout_btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <Display
          inputElement={inputElement}
          setDispFlag={setDispFlag}
          flagForDisp={flagForDisp}
          getValue={getValue}
        />
      </div>
    </>
  );
};

export default AddItem;
