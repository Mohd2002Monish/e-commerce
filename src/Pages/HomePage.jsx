import React, { useEffect } from "react";
import { getAllProducts } from "../Redux/Products/Actions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import HomeCompo from "../Components/HomeCompo";
function Homepage() {
  const { data } = useSelector((store) => {
    return store.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(""));
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <HomeCompo products={data} />
    </div>
  );
}

export default Homepage;
