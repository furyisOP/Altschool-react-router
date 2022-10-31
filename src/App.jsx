import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import PageNotFound from "./components/PageNotFound";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users data={data} />} />
        <Route path="/users/:userID" element={<UserDetails data={data} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
