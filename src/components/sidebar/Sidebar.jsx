import React from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'
import './profile.css';
import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

function Profile(props) {
    const { pic, name, designation } = props;
  
    return (
      <div className="profile">
        <img src={pic} alt="User Profile" className="profile-picture" />
        <div className="profile-details">
          <h3 className="name">{name}</h3>
          <p className="designation">{designation}</p>
        </div>
      </div>
    );
  }


const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>      
                <span>
                    {props.title}
                </span>
                {props.title !== "Dashboard" && <i className='bx bx-chevron-right' style={{ right: "18px",position: "absolute" }}></i>}
            </div>
        </div>
    )
}

const Sidebar = props => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    const user = {
        pic: 'user-profile.jpg', // Provide the correct path to the user's profile picture
        name: 'Evano',
        designation: 'Project Manager',
      };

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
            <i class='bx bx-shape-circle'></i>
                Dashboard
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
                  <Profile pic={logo} name={user.name} designation={user.designation} />
        </div>
    )
}

export default Sidebar
