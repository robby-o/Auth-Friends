import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriendForm from "./NewFriendForm";

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    setIsFetching(true);
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
        setIsFetching(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <NewFriendForm getFriends={getFriends} />
      {isFetching && <h2> Loading </h2>}
      {friends &&
        friends.map(friend => (
          <div key={friend.id} className="friend">
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
    </>
  );
}

export default FriendsList;
