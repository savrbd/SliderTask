import React from 'react';
import User from './User';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./users.css";
import { Pagination, Navigation } from "swiper";

const Users = ({users, onUserClick}) => {
    if (users){
        return(
            <div className='d-flex flex-row justify-content-center'>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
            {users.map((item)=>(
                <SwiperSlide>
                    <button className="btn btn-outline-dark m-2" onClick={()=>{onUserClick(item.id)}}>
                        <User user={item} key={item.id}/>
                    </button>
                </SwiperSlide>
                    
                ))}
            
            </Swiper>
            </div>
        )
    }
    else {return(
        <h5>Loading...</h5>
    )}
    
}
 
export default Users;