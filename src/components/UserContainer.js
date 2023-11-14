import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Call the fetchUsers action creator using dispatch
    dispatch(fetchUsers());
  }, [dispatch]); // Make sure to include dispatch in the dependency array

  const userData = useSelector((state) => state.user);

  return (
    <div>
      {userData.loading ? (
        <p>Loading ....</p>
      ) : userData.error ? (
        <p>{userData.error}</p>
      ) : (
        <ul>
          {userData.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserContainer;
