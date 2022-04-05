import React from 'react';

const User = ({user}) => {
    const asd = `https://i.pravatar.cc/200?img=${user.id}`
    return (
        <div className='m-2'>
            <img src={asd} alt="" />
            <h5>{user.name}</h5>
            <h5>{user.company.name}</h5>

        </div>
    );
}
 
export default User;