import React from 'react'
import {HiDotsVertical} from 'react-icons/hi'
import GroupImage from '../assets/group.png'

const People = () => {
  return (
    <>
        <div className='sticky_fix'>
            <div className='item_heading_text'>
                <h2>People</h2>
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
                <div className='time_zone '>
                    <button className='btn1' >Add</button>
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
                <div className='time_zone '>
                    <button className='btn1' >Add</button>
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
                <div className='time_zone '>
                    <button className='btn1' >Add</button>
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
                <div className='time_zone '>
                    <button className='btn1' >Add</button>
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
                <div className='time_zone '>
                    <button className='btn1' >Add</button>
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
                <div className='time_zone '>
                    <button className='btn1' >Add</button>
                </div>

            </li>
        </ul>

    </>
  )
}

export default People