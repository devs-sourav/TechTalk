import React, { useState, useEffect } from 'react'
import {HiDotsVertical} from 'react-icons/hi'
import GroupImage from '../assets/group.png'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux'

const People = () => {

    const db = getDatabase();
    let [peopleList,setPeopleList] = useState([])
    const userData = useSelector((state) =>(state.loggedUser.loginUser))
    console.log(userData)

    let handleAddRequest = (item)=>{

        console.log(item)

    }

    useEffect(()=>{
        let arr = []
        const peopleRef = ref(db, 'users/');
        onValue(peopleRef, (snapshot) => {
            // console.log(snapshot)
            snapshot.forEach((item)=>{

                if(userData.uid != item.key){
                    arr.push({
                        ...item.val(),
                    peopleId: item.key
                    })
                }
                

                // console.log(item)
            })

        setPeopleList(arr)
    });
    console.log(peopleList)

    },[])
    

  return (
    <div className='fixer_demo'>
        <div className='sticky_fix'>
            <div className='item_heading_text'>
                <h2>People</h2>
                <span><HiDotsVertical/></span>
            </div>
        </div>

        {
            peopleList.map((item,index)=>(
                <ul key={index} className='need_gap'>
                <li  className='list_item_group'>
                    <div className='img_text'>
                        <div className='group_image'>
                            <img src={GroupImage} />
                        </div>
                        <div className='item_name_text'>
                            <h3>{item.fullname}</h3>
                            <h4>{item.email}</h4>
                        </div>
                    </div>
                    <div className='time_zone '>
                        <button onClick={()=>handleAddRequest(item)} className='btn1' >Add</button>
                    </div>
    
                </li>
            </ul>
            ))
        }
        
    </div>
  )
}

export default People