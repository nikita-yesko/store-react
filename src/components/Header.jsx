import { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa+=Number.parseFloat(el.price));
  return (
    <div>
      
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}

      <p className="summa">
        Сумма: {new Intl.NumberFormat().format(summa)}$
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="emty">
      <h2>Товаров нет.</h2>
    </div>
  );
};

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">NekitStore</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaBagShopping
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentaition"></div>
    </header>
  );
};

export default Header;
