import React from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails(data) {
  let users = data.data;
  const userID = useParams().userID;
  const user = users.find((item) => item.id.value === userID);
  console.log(user);
  return (
    <>
      <Link to="/users" className="back">
        {" "}
        GO BACK
      </Link>
      <div className="user-details__container">
        <div className="details-img">
          <img src={user?.picture.large} alt="profile picture" />
        </div>
        <div className="details-text">
          <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>

          <p>{user.gender}</p>
          <p>{user.email}</p>
          <p>{user.dob.date}</p>
          <p>
            {user.location.city}, {user.location.country}
          </p>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
