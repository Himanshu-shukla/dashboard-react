import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'


import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = {
    display_name: 'Shahrukh'
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__name">
            Hello {user.display_name} 
            <i className="bx bxs-hand"></i>
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                        <div className="topnav__search">
                        <i className='bx bx-search'></i>
                    <input type="text" placeholder='Search ' />
                </div>     
                
            </div>
            </div>
        </div>
    )
}

export default Topnav
