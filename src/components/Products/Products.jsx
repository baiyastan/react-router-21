import React from "react";
import { products } from "../../data";
import "./Products.css";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      {products.map((item) => (
        <Link to={`/product/${item.id}`} className="product-item" key={item.id}>
          <img src={item.thumbnail} alt="" />
          <h4>{item.title}</h4>
        </Link>
      ))}
    </div>
  );
}

export default Products;
