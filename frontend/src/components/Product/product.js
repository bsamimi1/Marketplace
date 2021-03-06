import React from "react";
import ProductArr from "../../dummyData/productsArray";
import Rating from "./rating";

export default function product(props) {
  const { product } = props;
  return (
    <div key={product.id} className="card">
      <a href={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product.id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div>
          <h1 className="price">${product.price}</h1>
        </div>
      </div>
    </div>
  );
}
