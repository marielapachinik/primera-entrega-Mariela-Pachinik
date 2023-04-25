import React from "react";
import img01 from "../../images/img01.jpg";
import img02 from "../../images/img02.jpg";
import img03 from "../../images/img03.jpg";
import img04 from "../../images/img04.jpg";

export const ProductosLista = () => {
  return (
    <>
    <h1 className="title">PRODUCTOS</h1>
    <div className="productos">
      <div className="producto">
        <a href="#">
          <div className="producto__img">
            <img src={img01} alt=""/>
          </div>
        </a>
        <div className="producto__footer">
          <h1>El Señor de los anillos:  La comunidad del anillo</h1>
          <p>Categoria</p>
          <p className="price">$320</p>
        </div>
        <div className="buttom">
          <button className="btn">
            Añadir al carrito
          </button>
        <div>
          <a href="#" className="btn">Vista</a>
        </div>  
      </div>
      </div>
      <div className="producto">
        <a href="#">
          <div className="producto__img">
            <img src={img02} alt=""/>
          </div>
        </a>
        <div className="producto__footer">
          <h1>The Witcher: Ultimo deseo</h1>
          <p>Categoria</p>
          <p className="price">$320</p>
        </div>
        <div className="buttom">
          <button className="btn">
            Añadir al carrito
          </button>
        <div>
          <a href="#" className="btn">Vista</a>
        </div>  
      </div>
      </div>
      <div className="producto">
        <a href="#">
          <div className="producto__img">
            <img src={img03} alt=""/>
          </div>
        </a>
        <div className="producto__footer">
          <h1>El Castilo de Lyr</h1>
          <p>Categoria</p>
          <p className="price">$320</p>
        </div>
        <div className="buttom">
          <button className="btn">
            Añadir al carrito
          </button>
        <div>
          <a href="#" className="btn">Vista</a>
        </div>  
      </div>
      </div>
      <div className="producto">
        <a href="#">
          <div className="producto__img">
            <img src={img04} alt=""/>
          </div>
        </a>
        <div className="producto__footer">
          <h1>Cronicas de Narnia</h1>
          <p>Categoria</p>
          <p className="price">$320</p>
        </div>
        <div className="buttom">
          <button className="btn">
            Añadir al carrito
          </button>
        <div>
          <a href="#" className="btn">Vista</a>
        </div>
      </div>
      </div> 
     </div>
    </>
    
  )
}


