
import CurrencySelection from './CurrencySelection'
import './Header.scss'
import TopMenu from './TopMenu'
import Context from './Context';
import { useContext } from 'react';
import CartOverview from './CartOverview';

export default function Header({currentPage, setCurrentPage , user, setUser}){

  const { state, dispatch } = useContext(Context);


  const handleClick = event => {
    state.language == 'en' 
    ?
    dispatch({
    type: 'language/set',
    payload: 'cz'
    })
    :
    dispatch({
    type: 'language/set',
    payload: 'en'
    })


  }


  return <header className="header">

    <div className="header__sitename">

        Flourish and Blotts

    </div>

    <CurrencySelection />

    <TopMenu 
    currentPage= { currentPage } 
    setCurrentPage = { setCurrentPage }
    />

    <button onClick={ handleClick } >
    Language: {state.language}
    </button>

    <CartOverview />



</header>
}



 

