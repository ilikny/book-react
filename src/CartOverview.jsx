import { useContext } from 'react';
import Context from './Context';

export default function CartOverview(){

  const { state } = useContext(Context);



  return <>
  <span>{state.shoppingCart.length}{state.shoppingCart}</span>
  
  </>
}