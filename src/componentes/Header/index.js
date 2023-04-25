import React from "react"
import dragon from "../../images/dragon.png";
import { Link  } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={dragon} alt="logo" width="150"/>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Quienes somos</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  )
}

