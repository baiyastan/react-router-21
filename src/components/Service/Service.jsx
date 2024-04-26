import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = "https://reqres.in/api/users/";

function Service() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);

  async function getUser() {
    try {
      const res = await fetch(API);

      const userData = await res.json();

      console.log(userData);
      setUser(userData.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {user.map((item) => (
        <Link key={item.id} to={`/about-user/${item.id}`}>
          <img src={item.avatar} alt="" />
        </Link>
      ))}
    </div>
  );
}

export default Service;
