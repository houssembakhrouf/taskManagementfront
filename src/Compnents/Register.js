import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { UserRegister } from '../redux/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>dispatch(UserRegister(data));
  console.log(errors);
  const {error}=useSelector(state=>state.user)
  const {isAuth}=useSelector(state=>state.user)
    const navigate=useNavigate()
  useEffect(()=>{
    if(isAuth){
      navigate('/')
    }
    },[isAuth, navigate])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {required: true, maxLength: 80})} />
      <input type="number" placeholder="age" {...register("age", {required: true, maxLength: 12})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="password" {...register("password", {required: true})} />
      {error && <p style={{ color:"red" }}>{error[0].msg}</p> }
      <input type="submit" />
    </form>
  )
}

export default Register