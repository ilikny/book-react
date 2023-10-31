import Homepage from "./Homepage"
import LoginForm from "./LoginForm"


export default function MainContent({currentPage, user, setUser}){
  return (
    <main>
      {
        currentPage === ''
        ? <Homepage />
        : ''
      }
      {
        currentPage === 'about'
        ? <h2>About us</h2>
        : ''
      }
      {
        currentPage === 'contact'
        ? <><h2>Contact form</h2>
        <LoginForm 
        user = { user } 
        setUser = { setUser } 
      />
        </>
        : ''
      }



    </main>
  )
}