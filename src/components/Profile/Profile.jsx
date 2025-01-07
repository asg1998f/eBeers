import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { useEffect } from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const Profile = () => {
    const {getUserInfo,user}=useContext(UserContext);
    useEffect(()=>{
        getUserInfo()
    },[])
  return (
    <div>
          <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://e00-xlk-ue-marca.uecdn.es/uploads/2024/10/11/17274599814993.jpeg" />}
  >
    <Meta title={user.name} description={user.email} />
  </Card>
    </div>
  )
}

export default Profile