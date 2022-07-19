import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../Components/Shared/Button/Button'
import Card from '../../../../Components/Shared/Card/Card'

const Email = () => {
  const Navigate = useNavigate();
  return (
    <Card title="Enter your email id" icon="email-2">
    <div>
      <Button onClick={()=>Navigate('/authenticate')} text="Let's Go" />
    </div>
  </Card>
  )
}

export default Email