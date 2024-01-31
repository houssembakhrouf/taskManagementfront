import React, { useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../redux/slices/UserSlice';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const email=useRef()
    const password=useRef()
    const dispatch=useDispatch()
    const {error}=useSelector(state=>state.user)
    const {isAuth}=useSelector(state=>state.user)
    const navigate=useNavigate()
   
    useEffect(()=>{
    if(isAuth){
      navigate('/')
    }
    },[isAuth, navigate])
  return (
    <Form onSubmit={(event)=>{
        event.preventDefault()
        
        dispatch(UserLogin({ email:email.current.value, password:password.current.value}))
    }}>
    <Form.Group  className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" ref={email} placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" ref={password} placeholder="Password" />
    </Form.Group>
    {error && <p style={{ color:"red" }}>{error}</p> }
   
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Login