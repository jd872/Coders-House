import React, { useState } from 'react'
import Email from './Email/Email'
import Phone from './Phone/Phone'
import './StepPhoneEmail.css'

const phoneEmailMap = {
  phone: Phone,
  email: Email
}

const StepPhoneEmail = () => {
  const [type, setType] = useState('phone')
  const Component = phoneEmailMap[type]

  return (
    <>
      <div className='cardWrapper'>
        <div>
        <div className='buttonWrapper'>
          <button className='buttonTab' style={{ backgroundColor: type === "phone" ? "#0077FF" : ""}} onClick={() => setType('phone')}><img src='/images/mobile.png' alt="phone"/></button>
          <button className='buttonTab' style={{ backgroundColor: type === "email" ? "#0077FF" : ""}} onClick={() => setType('email')}><img src='/images/email.png' alt="email"/></button>
        </div>
        <Component />
        </div>

      </div>


      
    </>

  )
}

export default StepPhoneEmail