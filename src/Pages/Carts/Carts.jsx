import React, { useEffect } from "react";
import "./Carts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  TotalCart,
  ClearCart,
} from "../../store/Cart/Cart";

const Carts = ({ HandlerFooter }) => {
  const { Carts, TotalAmount, TotalQuantity } = useSelector(
    (state) => state.Carts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    HandlerFooter(false);
    dispatch(TotalCart());
  }, [dispatch, Carts, HandlerFooter]);

  const List = Carts.map((item) => {
    const total = item.price * item.quantity;
    return (
      <tr key={item.id}>
        <td>
          <img src={item.image} alt="" />
        </td>
        <td className="titles">
          <p>{item.title}</p>
        </td>
        <td>
          <p>${item.price}</p>
        </td>
        <td>
          <div className="quantity">
            <button onClick={() => dispatch(decreaseCart(item))}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
          </div>
        </td>
        <td>
          <span>${total}</span>
        </td>
      </tr>
    );
  });

  return (
    <div className="Carts">
      <div className="container">
        <div className="wapper">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>{List}</tbody>
          </table>
        </div>
        <div className="supTotal">
          <div className="remove">
            <span onClick={() => dispatch(ClearCart())}>Clear All</span>
          </div>
          <div className="info">
            <div className="wapper-price">
              <p>Quantity: </p>
              <span>{TotalQuantity}</span>
            </div>
            <div className="wapper-price">
              <p>Total: </p>
              <span>${TotalAmount.toFixed(2)}</span>
            </div>
            <button>Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
