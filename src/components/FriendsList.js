import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
const FriendsList = (props) => {
  const { friends, setFriends } = props;
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
        <Link to={`/friend/${friend.id}`}>
          <div>
            <h2>
              - {friend.name} - {friend.email}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FriendsList;
