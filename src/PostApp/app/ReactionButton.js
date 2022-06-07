

import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from '../features/postSlice';

const reactionEmojis = {
    thumbsUp : '👍 ',
    wow : '😯',
    heart : '❤️',
    sad : '😢 ',
    angry : '😡'
}
export const ReactionButton = ({post}) => {

    const dispatch = useDispatch();
    const reactionButton = Object.entries(reactionEmojis).map(([name ,emoji]) =>{

        return (<button 
        key={name} 
        type ="button" 
        className='reactionButton'
        onClick={()=>dispatch(reactionAdded({postId : post.id,reaction : name}))}>
        {emoji} {post.reactions[name]}</button> )

    });

    return <div>{reactionButton}</div>




}
