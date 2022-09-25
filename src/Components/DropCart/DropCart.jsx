import './DropCart.css';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { removeFromCart } from "../../store/Cart/Cart";

const DropCart = ({isCart}) => {
  const { Carts } = useSelector(state => state.Carts);
  const dispatch = useDispatch();
  
  const List = Carts.length ? Carts.map(item => {
    return (
      <div className="info" key={item.id}>
        <img src={item.image} alt='' />
        <div className="wapper-info">
        <span>{item.title}</span>
          <p>${item.price}</p>
        </div>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    )
  }) : <p style={{textAlign: 'center', padding: '10px', fontWeight: 'bold' , fontSize: '20px'}}>The Cart is empty</p>

  return (
    <div className={`DropCart ${isCart && "show"}`}>
      <div className="Wapper-Cart">
        {List}
        <div className="btn">
        <Link to="cart">
          <button disabled={!Carts.length && true} > View All Cart </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default DropCart
