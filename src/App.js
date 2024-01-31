
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes } from 'react-router-dom';

import NavbarTodo from './Compnents/NavbarTodo';
import Home from './Compnents/Home';
import Login from './Compnents/Login';
import Register from './Compnents/Register';
import Profile from './Compnents/Profile';
function App() {
  return (
    <div className="App">
      <NavbarTodo />
      <Routes>
        <Route  path='/'  element={<Home />} />
        <Route  path='/login'  element={<Login />} />
        <Route  path='/register'  element={<Register />} />
        <Route  path='/profile'  element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
