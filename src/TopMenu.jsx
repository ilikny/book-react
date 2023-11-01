import { useState } from 'react'
import './TopMenu.scss'
import { Link } from 'react-router-dom'

export default function TopMenu({currentPage, setCurrentPage }){
  const [open, setOpen] = useState(false)
  
  function toggleMenu(){
    setOpen (!open)
  }

  const changePage = (page) => {
    setCurrentPage(page)
   
  }

  return <>
  { open ? <nav className='top__nav'>

    <Link
    className={`link` + (currentPage === '' ? ' link--highlighted' : '')} onClick={()=>changePage('')} to="/">
    Home
    </Link>

    
    {/* // <a className={`link` + (currentPage === '' ? ' link--highlighted' : '')} onClick={()=>changePage('')} href="/">Home</a> */}

    <Link
    className={`link` + (currentPage === 'about' ? ' link--highlighted' : '')} onClick={()=>changePage('about')} to="/about-us">
      About us
    </Link>

    {/* <a className={`link` + (currentPage === 'about' ? ' link--highlighted' : '')} onClick={()=>changePage('about')} href="/about-us">About us</a> */}

    <Link
    className={`link` + (currentPage === 'contact' ? ' link--highlighted' : '')} onClick={()=>changePage('contact')} to="/contact">
      Contact
    </Link>

    {/* <a className={`link` + (currentPage === 'contact' ? ' link--highlighted' : '')} onClick={()=>changePage('contact')} href="#contact">Contact</a> */}

    <Link to="/book">Book</Link>
    </nav>
    : ''
    }
    <div className='burger' onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>

    </div>
    </>
}