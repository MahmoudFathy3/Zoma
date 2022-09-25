import React, { useEffect } from "react";
import "./home.css";
import ListItem from "../../Components/ListItem/ListItem";
import {HandlerFilter}  from "../../store/Product/Product";
import { useSelector, useDispatch } from "react-redux";
import Swipers from "../../Components/Swiper/Swiper";

const Home = ({ HandlerFooter }) => {
  const dispatch = useDispatch();
  const {Products} = useSelector(state => state.Product)

  useEffect(() => {
    return HandlerFooter(true);
  }, [HandlerFooter]);

  
  return (
    <div className="Home">
      <div className="container">
        <Swipers />
        <div className="title">
          <h3>Products</h3>
          <select onClick={(e) => dispatch(HandlerFilter(e.target.value))}>
            <option value="All">All</option>
            <option value="Laptop">Laptop</option>
            <option value="Headsets">Headsets</option>
            <option value="XBox">XBox</option>
            <option value="Playstation">Playstation</option>
          </select>
        </div>
        <div className="Wapper">
          <ListItem Products={Products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
