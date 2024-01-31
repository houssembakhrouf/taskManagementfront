import {configureStore} from '@reduxjs/toolkit' 
import UserSlice from './slices/UserSlice'
import TaskSlice from './slices/TaskSlice'

export default configureStore({reducer : {user:UserSlice , Task:TaskSlice}})