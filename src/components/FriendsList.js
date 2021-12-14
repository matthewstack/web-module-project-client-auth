import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>FRIENDS LIST</h1>
      {friends.map((friend) => (
        <div>
          <h2>
            - {friend.name} - {friend.email}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
