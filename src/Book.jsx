import Context from './Context';
import { useContext } from 'react';

export default function Book({ title, price, id }) {

   const { state, dispatch } = useContext(Context);

   const handleClick = event => {
    dispatch ({
      type: 'cart/add',
      payload: title + '-'
    })

   }


   

    return (
        <li>
            { title } { price } <button onClick={ handleClick } className='add_cart' >Add to cart</button>
        </li>
    )

}