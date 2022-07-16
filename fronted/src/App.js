import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
