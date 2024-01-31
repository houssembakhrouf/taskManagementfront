import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { CreateTask, GetTask, deleteTask } from '../redux/slices/TaskSlice';
const Home = () => {
  const {isAuth}=useSelector(state=>state.user)
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const title=useRef()
  const description=useRef()
 
  useEffect(()=>{
  if(!isAuth){
    navigate('/register')
    
  }
  },[isAuth])
  useEffect(()=>{
    dispatch(GetTask())
  } , [])

  

  const {taskData}=useSelector(state=>state.Task)
  return (
    <Form onSubmit={(event)=>{
      event.preventDefault()
      
      dispatch(CreateTask({ title:title.current.value, description:description.current.value}))
  }}>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label>  Task</Form.Label>
    <Form.Control type="text" ref={title} placeholder="task" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" ref={description} placeholder="description" />
  </Form.Group>

  <Button  variant="primary" type="submit">
    Submit
  </Button>
  <>
 {Array.isArray(taskData) && taskData.map(el=><div>
  <h3>{el.title}</h3>
  <h4>{el.description}</h4>
  <button  onClick={()=>{ dispatch(deleteTask(el._id)) }} >Delete</button>
  </div>
  )}
 </>

</Form>
  
  )
}

export default Home