import './ItemCount.css';
import { useState } from 'react'
 
function Itemcount() {
  const [num, setNum] = useState(0);
 
  const Suma = () => {
    if(num<(stock)){

    setNum(num + 1);
  }
};
 
  const Resta = () => {
    if(num>0){
    setNum(num - 1);
  }
};
 
  const Reset = () => {
    setNum(0);
  };
    const [stock, setStock] = useState (5);

 
  return (
    <div className="Contador">
      <span className="counter__output">{num}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={Suma}>+</button>
        <button className="control__btn" onClick={Resta}>-</button>
        <button className="reset" onClick={Reset}>Añadir al carro</button>
      </div>
    </div>
  );
}

export default Itemcount