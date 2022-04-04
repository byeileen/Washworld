import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../info";

export default function Products(data) {
  useEffect(() => {
    axios.get(info.backendUrl + "/products/" + data.lpn).then((result) => {
      data.setProducts(result.data.response.products);
    });
  }, []);
  return (
    <div className="program-page">
      <h2 className="header-program-page text-center">Vælg program</h2>
      {data.products.map((product) => {
        return (
          <div
            key={product.productid}
            className="card"
            id={"card-" + product.productid}
          >
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text program-price">{product.price}</p>
              <button
                className="btn btn-dark btn-card"
                onClick={data.chooseWash}
                value={product.program}
              >
                Program {product.program}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
