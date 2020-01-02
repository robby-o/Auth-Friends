import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriendForm = ({ getFriends }) => {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .catch(err => console.log(err));
    setFriend({ name: "", age: "", email: "" });
    setTimeout(() => getFriends(), 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        placeholder="name..."
        name="name"
        value={friend.name}
        onChange={handleChanges}
      />
      <input
        id="age"
        type="text"
        placeholder="age..."
        name="age"
        value={friend.age}
        onChange={handleChanges}
      />
      <input
        id="email"
        type="email"
        placeholder="email..."
        name="email"
        value={friend.email}
        onChange={handleChanges}
      />
      <input type="submit" value="submit friend" />
    </form>
  );
};

export default NewFriendForm;
