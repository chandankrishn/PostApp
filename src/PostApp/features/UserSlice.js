import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id : '0', name :'harpinder Singh'
    },
    {
        id :'1',name :'chandan krishnani'
    }
];

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
});


export default userSlice.reducer;
