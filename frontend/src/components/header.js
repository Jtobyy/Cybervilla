import $ from 'jquery';

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

import ic_call from '../assets/call.svg';
import ic_mail from '../assets/ic_mail.svg';

export default function Header() {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const toggleNavbar = () => {
      if (navbarToggle) $('#headerNavbar').addClass('collapse')
      else $('#headerNavbar').removeClass('collapse')

      setNavbarToggle(!navbarToggle)
    }


    return (
        <header className ="Header fixed-top">
            <ul className='d-flex small flex-row justify-content-end mb-0 py-2' 
            style={{ backgroundColor: '#1D1D1D', paddingRight: '100px' }}>
              <li className="me-5"><img src={ic_call} width={12} className='me-2' /><a href="#">0700cybervilla</a></li>  
              <li><a href="#"><img src={ic_mail} width={12} className='me-2' />support@cybervilla.io</a></li>
            </ul>  
            <nav className="navbar mt-0 py-2 px-5 navbar-expand-lg bg-black">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/cyberfix">
                  <img src="https://apps.nativetalk.com.ng:445/static/ic_logo.svg" width="130"  alt="" />
                </Link>
                <div className="navbar-toggler" onClick={() => toggleNavbar()} type="button" data-bs-target="#headerNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="toggle-line t1 mb-1"></div>
                    <div className="toggle-line t2 mb-1"></div>
                    <div className="toggle-line t3 mb-1"></div>
                </div>


                <div class="collapse navbar-collapse" id="headerNavbar">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-3 active" id="nav-item1" >
                            <HashLink className="nav-link" to="/#home" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Home</HashLink>
                    </li>
                    <li className="nav-item me-3" id="nav-item2">
                            <HashLink className="nav-link" to="/#about-us" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>About us</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item3">
                            <HashLink className="nav-link" to="/#what-we-do" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>Products</HashLink>
                        </li>
                        <li className="nav-item me-3 " id="nav-item4">
                            <Link className="nav-link" to="/Lubricants" onClick={(e) => {
                                $('.nav-item').removeClass('active')
                                e.target.parentElement.classList.add('active')
                        }}>CyberFix</Link>
                        </li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>
    )
}