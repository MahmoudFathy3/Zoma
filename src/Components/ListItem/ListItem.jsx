import "./ListItem.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Cart/Cart";

const ListItem = ({Products}) => {
  const dispatch = useDispatch();

  const List = Products.map((item) => {
    return (
      <div className="info" key={item.id}>
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="info-List">
          <h3>{item.title}</h3>
          <span>${item.price}</span>
        </div>
          <button onClick={()=> dispatch(addToCart(item))}>Add to Cart</button>
      </div>
    );
  });

  return <div className="Wapper">{List}</div>;
};

export default ListItem;

