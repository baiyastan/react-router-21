import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

function ProductPage() {
  const { id } = useParams();

  const findProduct = products.find((x) => x.id == id);

  console.log(findProduct);

  return (
    <div>
      <div className="image">
        <img className="main-image" src={findProduct.thumbnail} alt="" />
        <div className="images">
          {findProduct.images.map((item, index) => (
            <img key={index} src={item} alt="images" />
          ))}
        </div>
      </div>
      <div className="about"></div>
    </div>
  );
}

export default ProductPage;
