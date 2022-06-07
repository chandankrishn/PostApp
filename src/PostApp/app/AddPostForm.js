import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../features/postSlice';

export const AddPostForm = () => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userId,setUserId] = useState('');
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const user = useSelector(state => state.user);
   



    const dispatch = useDispatch();

    const onSavePost = () =>{

        if(title && content)
        {
            dispatch( postAdded(title,content ,userId))
            setTitle('');
            setContent('');
            
        }

    }

   
    const userOptions = user.map(users =>(
      

        <option key={users.id} value={users.id}>
            {users.name} 
        </option>
    ));



  return (
      <section>
          <h2>Add a new Post</h2>
          <form>
              <label htmlFor='postTitle'>Post Title:</label>
              <input type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              />
              <label htmlFor='postAuthor'>Author:</label>
              <select id="postAuthor" value ={userId} onChange={(e)=>setUserId(e.target.value)} >
                <option value =""></option>
                {userOptions}
              </select> 
              
              <label htmlFor='postContent'>Content:</label>
              <textarea 
                id="postContent"
                name="postContent"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                />
                <button 
                onClick={onSavePost} 
                disabled={!canSave}
                type = "button">Save Post</button>

          </form>
      </section>
  )
}
