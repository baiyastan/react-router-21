import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = "https://reqres.in/api/users";

function AboutUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  async function getUserAbout() {
    try {
      const res = await fetch(`${API}/${id}`);
      const about = await res.json();
      setUser(about.data);
      console.log(about);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserAbout();
  }, []);

  return (
    <div>
      <img src={user.avatar} alt="" />
    </div>
  );
}

export default AboutUser;
