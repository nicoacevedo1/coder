import { useEffect, useState } from 'react';
import './Body.css';
import ItemListContainer from './Container';



function Body() {

  const [info, setInfo] = useState()
  useEffect (()=>{
    setTimeout(() => {
      fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data) )
    }, 2000);
  }, [])


  return (
    <section className='cuerpo'>
        {info && info.map(i => <ItemListContainer product={i.title} price={i.price} link={i.pictureUrl} />)}
    </section>
  ); 
}

export default Body;

