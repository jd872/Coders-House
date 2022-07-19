import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
// import Register from './Pages/Register/Register';
import Authenticate from './Pages/Authenticate/Authenticate';
import Activate from './Pages/Activate/Activate';
import Rooms from './Pages/Rooms/Rooms';


const isAuth = false;
const user = {
  activated: false
}

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path='/register' element={<Register />} /> */}
        <Route path='/'
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          } />
        <Route path='/authenticate'
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          } />
        <Route path='/activate'
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          } />
        <Route path='/rooms'
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>

  );
}

const GuestRoute = ({ children, ...rest }) => {

  return (
    isAuth ? <Navigate to='/rooms' /> : children
  )
}

const SemiProtectedRoute = ({ children, ...rest }) => {
  return (
    !isAuth ? <Navigate to='/' /> : (isAuth && !user.activated ? children : <Navigate to='/rooms' />)
  )
}

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    !isAuth ? <Navigate to='/' /> : (isAuth && !user.activated ? <Navigate to='/activate' /> : children)
  )
}

export default App;
