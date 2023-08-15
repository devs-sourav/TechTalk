import React from 'react'
import MyGroup from '../components/MyGroup';
import Group from '../components/Group';
import Friends from '../components/Friends';
import People from '../components/People';
import FriendRequest from '../components/FriendRequest';
import Block from '../components/Block';

const Home = () => {
  return (
    <div className='home2_container'>
        <div className='home_item'>
            <MyGroup/>
        </div>
        <div className='home_item'>
            <Group/>
        </div>
        <div className='home_item'>
            <Friends/>
        </div>
        <div className='home_item'>
            <People/>
        </div>
        <div className='home_item'>
            <FriendRequest/>
        </div>
        <div className='home_item'>
            <Block/>
        </div>
    </div>
  )
}

export default Home