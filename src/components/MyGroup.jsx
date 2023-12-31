import React from 'react'
import {HiDotsVertical} from 'react-icons/hi'
import GroupImage from '../assets/group.png'

const MyGroup = () => {
  return (
    <div className='fixer_demo'>
        <div className='sticky_fix'>
            <div className='item_heading_text'>
                <h2>My Group</h2>
                <span><HiDotsVertical/></span>
            </div>
        </div>

        <ul className='need_gap'>
            <li  className='list_item_group'>
                <div className='img_text'>
                    <div className='group_image'>
                        <img src={GroupImage} />
                    </div>
                    <div className='item_name_text'>
                        <h3>Jenny Wilson</h3>
                        <h4>Need Money.....</h4>
                    </div>
                </div>
                <div className='time_zone'>
                    <p>10:30 PM</p>
                </div>

            </li>
        </ul>
        <ul className='need_gap'>
            <li  className='list_item_group'>
                <div className='img_text'>
                    <div className='group_image'>
                        <img src={GroupImage} />
                    </div>
                    <div className='item_name_text'>
                        <h3>Jenny Wilson</h3>
                        <h4>Need Money.....</h4>
                    </div>
                </div>
                <div className='time_zone'>
                    <p>10:30 PM</p>
                </div>

            </li>
        </ul>
        <ul className='need_gap'>
            <li  className='list_item_group'>
                <div className='img_text'>
                    <div className='group_image'>
                        <img src={GroupImage} />
                    </div>
                    <div className='item_name_text'>
                        <h3>Jenny Wilson</h3>
                        <h4>Need Money.....</h4>
                    </div>
                </div>
                <div className='time_zone'>
                    <p>10:30 PM</p>
                </div>

            </li>
        </ul>
        <ul className='need_gap'>
            <li  className='list_item_group'>
                <div className='img_text'>
                    <div className='group_image'>
                        <img src={GroupImage} />
                    </div>
                    <div className='item_name_text'>
                        <h3>Jenny Wilson</h3>
                        <h4>Need Money.....</h4>
                    </div>
                </div>
                <div className='time_zone'>
                    <p>10:30 PM</p>
                </div>

            </li>
        </ul>
        <ul className='need_gap'>
            <li  className='list_item_group'>
                <div className='img_text'>
                    <div className='group_image'>
                        <img src={GroupImage} />
                    </div>
                    <div className='item_name_text'>
                        <h3>Jenny Wilson</h3>
                        <h4>Need Money.....</h4>
                    </div>
                </div>
                <div className='time_zone'>
                    <p>10:30 PM</p>
                </div>

            </li>
        </ul>
    </div>
  )
}

export default MyGroup