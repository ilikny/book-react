import { useState } from 'react'
import './TopMenu.scss'

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
    <a className={`link` + (currentPage === '' ? ' link--highlighted' : '')} onClick={()=>changePage('')} href="#">Home</a>
    <a className={`link` + (currentPage === 'about' ? ' link--highlighted' : '')} onClick={()=>changePage('about')} href="#about">About us</a>
    <a className={`link` + (currentPage === 'contact' ? ' link--highlighted' : '')} onClick={()=>changePage('contact')} href="#contact">Contact</a>
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