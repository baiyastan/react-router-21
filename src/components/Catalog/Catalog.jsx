import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Catalog.css";
import { Link } from "react-router-dom";

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services";

function Catalog() {
  const [service, setService] = useState([]);

  async function getService() {
    try {
      const res = await axios.get(API);

      console.log(res);

      setService(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getService();
  }, []);

  return (
    <div>
      <Link to="/create-catalog" className="create-btn">
        Create Catalog
      </Link>
      <div className="catalog">
        {service.map((item) => (
          <div key={item.id} className="item-catalog">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
