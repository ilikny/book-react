import { useReducer, useState } from 'react'
import './App.scss'
import Header from './Header'
import MainContent from './MainContent'
import CurrencyContext from './CurrencyContext.js'
import Context from './Context.js'
import reducer from './reducer'
import { BrowserRouter } from 'react-router-dom'


function App() {

  const [currentPage, setCurrentPage] = useState('')

  const [user, setUser] = useState(null)

  const [currency, setCurrency] = useState('EUR')

  const [contextValue, setContextValue] = useReducer(reducer,
    {
    user: null,
    theme: 'light',
    language: 'en',
    currency: 'USD',
    authHash: null,
    shoppingCart: [ ]
  })



  return (
    <BrowserRouter>
    <Context.Provider value={
      {
    state: contextValue,
    dispatch: setContextValue
    }
    }>    
    <CurrencyContext.Provider value={
      {
    currency,
    setCurrency
      }
     }>

    <div className="app">

      <Header 
      currentPage={ currentPage } 
      setCurrentPage = { setCurrentPage }
      user = { user } 
      setUser = { setUser }
      />

      <h1 className="app__headline">Flourish and Blotts</h1>

      <MainContent currentPage={ currentPage }
       user = { user } 
      setUser = { setUser }
      />

    </div>

    </CurrencyContext.Provider>
    </Context.Provider>
    </BrowserRouter>

  )
}

export default App
