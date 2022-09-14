import React from "react"
import "./topbar.css"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import PersonIcon from "@mui/icons-material/Person"
import { Chat } from "@mui/icons-material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { Link } from "react-router-dom"

const Topbar = () => {
  return (
    <>
      <div className='topbarContainer'>
        <div className='topbarLeft'>
          <span className='logo'>Facebook</span>
        </div>
        <div className='topbarCenter'>
          <div className='searchbar'>
            <SearchOutlinedIcon className='searchIcon' />
            <input placeholder='Search for Friend, post or video' className='searchInput' />
          </div>
        </div>
        <div className='topbarRight'>
          <div className='topbarLinks'>
            <Link to='/home' className="link-raute"><span className='topbarLink'>Homepage</span></Link>
            <span className='topbarLink'>Timeline</span>
          </div>
          <div className='topbarIcons'>
            <div className='topbarIconItem'>
              <PersonIcon />
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
              <Chat />
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
              <NotificationsIcon />
              <span className='topbarIconBadge'>1</span>
            </div>
          </div>

          <Link to='/profile'><img src='assets/person/7.jpeg' alt='' className='topbarImg' /></Link>
        </div>
      </div>
    </>
  )
}

export default Topbar
