import React from 'react'
import './Home.css'
import { Link,useNavigate } from 'react-router-dom'
import Card from '../../Components/Shared/Card/Card'
import Button from '../../Components/Shared/Button/Button'

const Home = () => {
  const Navigate = useNavigate()

  return (

    <div className='cardWrapper'>
      <Card title="Welcome to Codershouse" icon="Vector">

        <p className='text'>
          We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks
        </p>
        <div>
          <Button onClick={()=>Navigate('/register')} text="Get Your username" />
        </div>
        <div className='signInWrapper'>
          <span className='hasInvite'>Have an invite text?</span>
          <Link className='signInLink' to="/login">Sign in</Link>
        </div>

      </Card>

    </div>
  )
}

export default Home