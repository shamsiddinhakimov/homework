import React from 'react'
import IMG from '../assets/img.svg'

function Main() {
  return (
    <div className='main-container'>

      <div className="box">
      <h2 className='h2'>Kompaniya ma’lumotlari</h2>
      <p className='dark'>Kompaniya haqidagi ma’lumotlarni kiriting</p>
      <div className='sa'>
      <img src={IMG} alt="" />
      <h2 className='a'>Yuklash</h2>
      </div>
      <div className='salom'>
      <h2>Kompaniya nomi</h2>
      <input type="text" placeholder='Kompaniya nomi' />
      </div>

      <div className='salom'>
      <h2>Email</h2>
      <input type="text" placeholder='Email' />
      </div>

      <div className='salom'>
      <h2>Telefon raqami</h2>
      <input type="text" placeholder='+998' />
      </div>

      <div className='salom'>
      <h2>Yashash joyi</h2>
      <input type="text" placeholder='Yashash joyi ' />
      </div>

      <div className='salom'>
      <h2>Hodimlar soni</h2>
      <input type="text" placeholder='Hodimlar soni' />
      </div>

      <div className='salom input'>
      <h2>Izoh</h2>
      <input type="text" placeholder='Kompaniya haqida izoh qoldiring' />
      </div>

      <div className='sss'>
        <h2 className='btn-2'>ORTGA</h2>
      <h2 className='btn-1'>KEYINGISI</h2>
      </div>

      </div>
     
    </div>
  )
}

export default Main