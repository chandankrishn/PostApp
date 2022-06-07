import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({userId}) => {
    const users = useSelector((state) => state.user);
    const author = users.find(user => user.id === userId);
    console.log("Author name",author);

  return ( <span> by { author ? author.name : "Unknown Author"}</span>)
}
