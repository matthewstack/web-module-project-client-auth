import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
const Friend = (props) => {
  const { id } = useParams();

  const [friend, setFriend] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axiosWithAuth()
      .get(`/friends/${id}`)
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>FRIEND</h1>

      <h2>
        {friend.name} - {friend.email}
      </h2>
    </div>
  );
};

export default Friend;
