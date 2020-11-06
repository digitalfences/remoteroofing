import React from 'react'
import './Nav.css'
const Nav = (props) => {
    return (
    <div className='completeNav'>
      <div className='navHeader1'>
          <div className="rrLogo"></div>
          <div className="phoneLauncher"></div>
      </div>
      <div className='navHeader2'>
          <div className="header2link">
              <a href="#">
                <strong>Home</strong>
              </a>
          </div>
          <div className="header2link">
              <a href='/faq'>
                  <strong>FAQ</strong>
              </a>
          </div>
          <div className="header2link">
              <a href="#roof-repair-services">
                 <strong>Services</strong> 
              </a>
          </div>
      </div>
    </div>
  )
}
export default Nav
