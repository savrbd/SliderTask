import React from 'react';

const Post = ({post}) => {
    console.log(post)
    return (
        <>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </>
        
    );
}
 
export default Post;