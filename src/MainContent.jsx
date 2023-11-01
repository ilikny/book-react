import { Route, Routes } from "react-router-dom"
import AboutUs from "./AboutUs"
import Homepage from "./Homepage"
import LoginForm from "./LoginForm"
import Contact from "./Contact"
import BookDetail from "./BookDetail"
import SubpageLayout from "./SubpageLayout"


export default function MainContent({currentPage, user, setUser}){
  return (
    // <main>
    //   {
    //     currentPage === ''
    //     ? <Homepage />
    //     : ''
    //   }
    //   {
    //     currentPage === 'about'
    //     ? <AboutUs />
    //     : ''
    //   }
    //   {
    //     currentPage === 'contact'
    //     ? <><h2>Contact form</h2>
    //     <LoginForm 
    //     user = { user } 
    //     setUser = { setUser } 
    //   />
    //     </>
    //     : ''
    //   }



    // </main>

    <>
    <Routes>
      <Route path="/" element= { <Homepage />} />


    {/* this create the back to home element on every page */}
      <Route path="/" element={ <SubpageLayout />}>
          <Route path="/about-us" element= { <AboutUs />} />
          <Route path="/contact" element= { <Contact />} />
         <Route path="/book/:id" element= { <BookDetail />} />
      </Route>
      

    </Routes>
    </>
  )
}