import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
    if(posts){
        return ( 
            <>
                {posts.map((item)=>(<Post post={item} key={item.id}/>))}
            </>
        
    );
    }
    
}
 
export default Posts