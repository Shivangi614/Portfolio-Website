
import React from 'react'
import "./Footer.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-info">
            <h2>Shivangi Jain</h2>
            <p>Full Stack Developer | Passionate about building scalable and efficient web applications.</p> 
            </div>
            <div className="footer-links">
            {/* <h3>Quick Links</h3> */}
          <AnchorLink className='anchor-link'offset={50} href='#about'><p >About Me</p></AnchorLink>
                     <AnchorLink className='anchor-link'offset={50} href='#project'><p>Projects</p></AnchorLink>
                     <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
        <p>&copy; 2025 Shivangi Jain. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer