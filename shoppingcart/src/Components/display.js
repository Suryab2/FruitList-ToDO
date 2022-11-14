import { useEffect, useState } from "react";
import "./display.css";

function Display({ inputElement, setDispFlag, flagForDisp, getValue }) {
  const [flag, setFlag] = useState(false);
  const [backendData, setBackendData] = useState([]);
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/todo/shoppingList", {
        headers: { accept: "application/json" },
      });
      const res = await response.json();
      setBackendData(res);
    };
    fetchData();
  }, [flagForDisp]);

  const remove = async (item) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.item_id }),
    };
    const response = await fetch("/todo/deleteList", requestOptions);
    const res = await response.json();
    console.log(res);
    setDispFlag(!flagForDisp);
  };
  function edit(item, index) {
    inputElement.current.value = item.itemname;
    setItemIndex(item.item_id);
    setFlag(true);
  }
  const update = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: itemIndex, text: inputElement.current.value }),
    };
    const response = await fetch("/todo/editList", requestOptions);
    const res = await response.json();
    setDispFlag(!flagForDisp);
    getValue("");
    setFlag(false);
  };

  return (
    <>
      {flag && (
        <button className="update_btn" onClick={update}>
          Update
        </button>
      )}
      <div className="display_outer_container">
        {backendData.map((item, index) => (
          <div className="display_items" key={item.user_id}>
            <div>
              {index + 1} {item.itemname}
            </div>
            <div className="rem_edit_btn">
              <button className="edit_btn" onClick={() => edit(item, index)}>
                Edit
              </button>
              <button className="remove_btn" onClick={() => remove(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Display;
