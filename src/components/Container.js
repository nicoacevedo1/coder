
import { useEffect, useState } from 'react';
import './Container.css';
import Itemcount from './ItemCount';

function ItemListContainer(props) {
 

  return (
    <div className="wrapper">

       <div className='container'>
         <img src={props.link} alt="Imagen"></img>
         <h2>{props.product}</h2>
         <p> {props.price} </p>
        <Itemcount />
      </div>  
     </div>

  );
}


export default ItemListContainer;
