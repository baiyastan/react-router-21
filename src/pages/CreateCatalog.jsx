import React, { useState } from "react";
import axios from "axios";

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services";

function CreateCatalog() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  async function createService() {
    try {
      const response = await axios.post(API, product);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="inputs">
        <input
          value={product.name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          value={product.image}
          type="url"
          name="image"
          placeholder="Url"
          onChange={handleChange}
        />
        <input
          value={product.category}
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          value={product.price}
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <button onClick={() => createService()}>Create</button>
      </div>
    </div>
  );
}

export default CreateCatalog;
