import React from 'react'
import { useSelector } from 'react-redux'
import { PostAuthor } from './PostAuthor';
import { ReactionButton } from './ReactionButton';
import { TimeAgo } from './TimeAgo';

export const PostList = () => 
{
 
   
    const posts = useSelector((state)=> state.posts);
    console.log("Post",posts);
    const renderedPost = posts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButton post={post}/>
        </article>

    ))

    return(
        <section>
        <h2>Posts</h2>
        {renderedPost}
    </section>
        )

}

