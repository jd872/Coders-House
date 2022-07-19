import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../Components/Shared/Button/Button'
import Card from '../../../../Components/Shared/Card/Card'
import TextInput from '../../../../Components/Shared/TextInput/TextInput'

const Phone = () => {
  const Navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('')
  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <div>
      <div className='actionButtonWrap'>
        
          <Button onClick={() => Navigate('/authenticate')} text="Let's Go" />
        
      </div>
      <p className='bottomParagraph'>
      By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
      </p>
      </div>
    </Card>
  )
}

export default Phone