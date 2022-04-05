import React, { useEffect, useState } from 'react';
import axios from "axios";
import Users from './users';
import Posts from './Posts';
import "swiper/css/bundle";

const Slider = () => {
    const USERS_URL = "https://jsonplaceholder.typicode.com/users";
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    const [users, setUsers] = useState();
    const [data, setData] = useState();
    const [posts, setPosts] = useState()
     useEffect(() => {
        axios.get(USERS_URL).then((res) => setUsers(res.data));
    }, []);
    useEffect(() => {
        axios.get(POSTS_URL).then((res) => setData(res.data));
    }, []);
    const handleUserClick = (userId) => {
        console.log(userId)
        setPosts((data.filter((item)=>{return item.userId===userId})).slice(0,3))
    }
    console.log(users);
    console.log(data);
    console.log("posts", posts);
    return (
        <div className='d-flex flex-column justify-content-center'>
            <Users users={users} onUserClick={handleUserClick}/>
            <h1>3 актуальных поста Moriah.Stanton</h1>
            <Posts posts={posts}/>
        </div>
        

        
    );
}
 
export default Slider