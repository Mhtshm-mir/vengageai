import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    errorMsg:"",
    error:false,
    contacts:[],
    searchQuery: '',

}

export const getContacts = createAsyncThunk("getContacts",async(search,{rejectWithValue})=>{
    const res = await axios.get("https://clever-jade-flip-flops.cyclic.app/contacts");
     try{
        return [res.data,search];
    }
    catch(err){
        return rejectWithValue(error.response.data.message)
    }
})

export const addContacts = createAsyncThunk("addContacts",async(user,{rejectWithValue})=>{
    const {avatar,name,email,dob,address,occupation} = user
    const res = await axios.post("https://clever-jade-flip-flops.cyclic.app/contacts",{
        avatar,name,email,dob,address,occupation});
     try{
        return res.data;
    }
    catch(err){
        return rejectWithValue(error.response.data.message)
    }
})
export const updateContacts = createAsyncThunk("updateContacts",async(user,{rejectWithValue})=>{
    const {id,avatar,name,email,dob,address,occupation} = user
    const res = await axios.put(`https://clever-jade-flip-flops.cyclic.app/contacts/${id}`,{
        avatar,name,email,dob,address,occupation});
     try{
        return res.data;
    }
    catch(err){
        return rejectWithValue(error.response.data.message)
    }
})

export const deleteContacts = createAsyncThunk("deleteContacts",async(user,{rejectWithValue})=>{
    const {id} = user
    const res = await axios.delete(`https://clever-jade-flip-flops.cyclic.app/contacts/${id}`);
     try{
        return res.data;
    }
    catch(err){
        return rejectWithValue(error.response.data.message)
    }
})

export const  contactSlice = createSlice({
        name:'contacts',
        initialState,
        reducers:{
            
        },
        extraReducers(builder){
            builder.addCase(getContacts.fulfilled,(state,action)=>{
                state.contacts=action.payload[0]
                
                if(action.payload[1].query && action.payload[1].query.length>0){
                    let searchQuery = action.payload[1].query
                    const filteredContacts = state.contacts.filter((contact) =>
                    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  state.contacts= filteredContacts   
                }
            })
            builder.addCase(getContacts.rejected,(state,action)=>{
                state.error=true ,
                state.errorMsg= action.payload
            })
            builder.addCase(addContacts.fulfilled,(state,action)=>{
                state.contacts=action.payload
            })
            builder.addCase(updateContacts.fulfilled,(state,action)=>{
                state.contacts=action.payload
            })
            builder.addCase(deleteContacts.fulfilled,(state,action)=>{
                state.contacts=action.payload
            })

        }
})

export default contactSlice.reducer