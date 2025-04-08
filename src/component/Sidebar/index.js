import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-foonie.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faMagicWandSparkles, } from '@fortawesome/free-solid-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
   <div className='nav-bar'>
        <Link className='logo'to='/'>
           <img src={LogoS} alt="logo" /> 
           <img  className="sub-logo" src={LogoSubtitle} alt="foonie"/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
               <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
               <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
               <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
               <FontAwesomeIcon icon={faMagicWandSparkles} color="#4d4d4e"/>
            </NavLink>
        </nav>

       <ul>
         <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lufuno-sadiki-328219ba/">
               <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
         </li>
       </ul>
   </div> 
)

export default Sidebar;
