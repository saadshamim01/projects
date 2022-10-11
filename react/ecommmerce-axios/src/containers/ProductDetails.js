import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return <div>productDetails</div>;
};

export default ProductDetails;
