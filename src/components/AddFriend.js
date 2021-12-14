import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialValues = {
  name: "",
  age: "",
  email: "",
};

const AddFriend = () => {
  const [friend, setFriend] = useState(initialValues);
  let history = useHistory();

  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const friendSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then((res) => {
        history.push("/friends");
      });
  };
  return (
    <div>
      <h1>ADD FRIEND</h1>
      <form onSubmit={friendSubmit}>
        <label>NAME:</label>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
        />
        <label>EMAIL:</label>
        <input
          type="text"
          name="email"
          value={friend.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
