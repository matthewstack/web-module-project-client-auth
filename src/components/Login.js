import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  let history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const appLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/login", credentials).then((res) => {
      console.log(res);
      const { token, username, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);

      history.push("/friends");
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={appLogin}>
        <label>USERNAME:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label>PASSWORD:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
