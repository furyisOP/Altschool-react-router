import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users(data) {
  let users = data.data;
  const [newsItems, setnewsItems] = useState();
  const [currentItem, setCurrentItem] = useState(0);

  //useeffect to slice array to 12 objects
  useEffect(() => {
    setnewsItems(users?.slice(currentItem, currentItem + 10));
  }, [currentItem, data]);

  //function to handle next button
  const handleNext = () => {
    if (currentItem < users?.length - 1) {
      setCurrentItem((prev) => prev + 10);
    } else {
    }
  };
  //function to handle previous button
  const handlePrev = () => {
    if (currentItem > 0) {
      setCurrentItem((prev) => prev - 10);
    } else {
      setCurrentItem(0);
      console.log("this is the beginning");
    }
  };
  return (
    <>
      <div className="profile-card__container">
        {newsItems?.map((user, index) => {
          return (
            <Link to={`/users/${user.id.value}`} key={index}>
              <div className="profile-card">
                <div className="profile-card__img">
                  <img src={user.picture.medium} alt="profile picture" />
                </div>
                <h1>{`${user.name.title}  ${user.name.last}`}</h1>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="navigate-btns">
        <button
          type="button"
          className="btn"
          onClick={handlePrev}
          disabled={currentItem < 10}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleNext}
          disabled={currentItem + 10 >= users?.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Users;
