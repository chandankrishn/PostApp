import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub } from 'date-fns';

const initialState = [{
        id :'1', 
        title :'I am happy', 
        content : 'I am learning new thing',
        date : sub(new Date(), {minutes : 10}).toISOString(),
        reactions : {
            thumbsUp: 0,
            wow     : 0,
            heart   : 0,
            sad  : 0,
            angry  : 0
        }
    },
    {
        id :'2', 
        title :'Just for fun',
        content : 'In fucn i am learning react js',
        date : sub(new Date(), {minutes : 5}).toISOString(),
        reactions : {
            thumbsUp: 0,
            wow     : 0,
            heart   : 0,
            sad  : 0,
            angry  : 0
        }
    }
];

export const PostApp = createSlice({
    name:'posts',
    initialState,
    reducers: {
        postAdded :{
            reducer(state,action){
            state.push(action.payload);
        },
        prepare(title,content,userId)
        {
            return{
                payload :{
                    id : nanoid(),
                    title,
                    content,
                    date : new Date().toISOString(),
                    userId,
                    reactions : {
                        thumbsUp: 0,
                        wow     : 0,
                        heart   : 0,
                        sad     : 0,
                        angry  : 0
                    }
                }
            }
        },
        },
        reactionAdded(state,action)
        {
            const {postId , reaction} = action.payload;
            const existingPost = state.find(post => post.id===postId)
            if(existingPost)
            {
                existingPost.reactions[reaction]++;

            }

        }
      
    }
    });
export const { postAdded ,reactionAdded } = PostApp.actions;

export default PostApp.reducer;

