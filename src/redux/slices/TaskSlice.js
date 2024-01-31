import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const CreateTask=createAsyncThunk('/createTask', async(data , {rejectWithValue , dispatch})=>{
    try {
        const res =await axios.post('/createtask',data ,
         {headers:{
            token:localStorage.getItem('token')
         }
        } )
        dispatch(GetTask())
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

export const GetTask=createAsyncThunk('/getTask', async(data , {rejectWithValue})=>{
    try {
        const res =await axios.get('/gettask',
         {headers:{
            token:localStorage.getItem('token')
         }
        } )
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

export const deleteTask=createAsyncThunk('/deletetask', async(info , {rejectWithValue ,dispatch})=>{
    try {
        const res =await axios.delete(`/deletetask/${info}`,
         {headers:{
            token:localStorage.getItem('token')
         }
        } )
        dispatch(GetTask())
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

const TaskSlice=createSlice({
    name:'TaskSlice',
    initialState:{
        taskData:{},
        error:null,
        isLoading:false,

    },

    extraReducers(builder){
        builder.addCase(CreateTask.fulfilled,(state,action)=>{
            state.isLoading=false
        })

        .addCase(CreateTask.rejected,(state,action)=>{
            
           state.isLoading =false 
           
           state.error=action.payload
       })

       .addCase(CreateTask.pending,(state,action)=>{
          
          state.isLoading =true
        
      })
//Get
      .addCase(GetTask.fulfilled,(state,action)=>{
        state.taskData=action.payload.Tasks  
        state.isLoading=false
        
    })
    .addCase(GetTask.rejected,(state,action)=>{
          
        state.isLoading=false
        state.error=action.payload
    })
    .addCase(GetTask.pending,(state,action)=>{
          
        state.isLoading=true
        
    })
//delete task
    .addCase(deleteTask.fulfilled,(state,action)=>{
        
        state.isLoading=false
        
    })
    .addCase(deleteTask.rejected,(state,action)=>{
          
        state.isLoading=false
        state.error=action.payload
    })
    .addCase(deleteTask.pending,(state,action)=>{
          
        state.isLoading=true
        
    })


    }
})




export default TaskSlice.reducer