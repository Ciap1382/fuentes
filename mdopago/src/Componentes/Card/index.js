import frutas from "../../assets/img/arbol.jpg";
import "./cards.css"
import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
const Card = () => {
  useEffect(() => {
    initMercadoPago('TEST-1491774a-9e77-47fb-85a5-93d1ba2e00c1', { locale: 'es-AR' });
  }, []);
  // SDK de Mercado Pago
// Agrega credenciales
  /*
const crearPrePreferencia = () => {
  const id=1;
  return id;
}
*/
/*
const handleCompra = async () => {
  const id = crearPrePreferencia();
  if (id) {
    setPrePreferencia(id);
  }
}
*/
  return (
    <div id="Card">
      <div className="imgproducto">
        <img src={frutas} alt="Arbol"/>
      </div>
      <div className="titulos">
        <div className="precio"><h2>$1,000.00</h2></div>
        <div className="descripcion"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio sit voluptate molestiae illum eveniet eum animi error necessitatibus explicabo!</p></div>
      </div>
        <div>
          <button className="btn btn-primary">Enviar a carrito</button>
        </div>
          <Wallet initialization={{preferenceId: '<PREFERENCE_ID>'}} />
          <div id="wallet_container"></div>
          
          <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />
    </div>
  )
};
export default Card;