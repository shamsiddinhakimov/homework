import React from 'react'
import Logo from '../assets/logo.svg'
function Navbar() {
  return (
    <div className='container'>

     <div className='new'>
     <img src={Logo} alt=""/>
     </div>

     <div className='all-card'>
        <h2 className='card'>Vakansiyalar</h2>
        <h2 className='card'>Kandidatlar</h2>
        <h2 className='card'>Kompaniyalar</h2>
        <h2 className='card'>Xizmatlar</h2>
        <h2 className='card'>Ta’lim</h2>
     </div>

     <div className='language'>
        <h2 className='card-1'>O’zb</h2>
        <h2 className='btn'>Boshlash</h2>
        <div className='sa'>

        </div>
     </div>

    </div>
  )
}

export default Navbar