
import { useEffect, useState } from 'react';
import ItemListContainer from './Container';
import './Item.css';


function Item(props) {
 
  const [info, setInfo] = useState()
  useEffect (()=>{
    setTimeout(() => {
      fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data) )
    }, 2000);
  }, [])

console.log (info);
  return (
    <section className='cuerpo'>
      
        {info && info.map(i => <ItemListContainer product={i.title} price={i.price} link={i.pictureUrl} />)}
    </section>
  ); 
}


export default Item;
