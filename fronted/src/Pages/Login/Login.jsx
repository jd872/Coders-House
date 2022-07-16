import React from 'react'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login