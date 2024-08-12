import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductdisplayScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log("res", response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" ,justifyContent:"center"}}>
      {products?.map((item) => {
        return (
          <ProductCard
            title={item.title}
            url={item.thumbnailUrl}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default ProductdisplayScreen;
