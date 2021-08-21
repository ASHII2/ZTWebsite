import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import Select from 'react-select'

const options = [
  { value: 'English', label: 'English' }
]

const Header5 = () => {
  const [sticky, setSticky] = useState(false)

  window.onscroll = function () {
    stickyFunction()
  }

  const stickyFunction = () => {
    if (window.pageYOffset >= 91) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  return (
    <>
      {/* <!-- Main Header --> */}
      <header class='main-header'>
        {/* <!-- Header Top --> */}
        <div class='header-top'>
          <div class='auto-container'>
            <div class='inner'>
              <div class='top-left'>
                {/* <!--Logo--> */}
                <div class='logo-box'>
                  <div class='logo'>
                    <Link to={'/#'}>
                      <img src={require('../assets/images/logo.png')} alt='' />
                    </Link>
                  </div>
                </div>
              </div>

              <div class='top-middile'>
                <div class='language'>
                  <span>Language:</span>
                  <form action='#' class='language-switcher'>
                    <Select options={options} />
                  </form>
                </div>
                <div class='contact-info'>
                  <div class='single-info'>
                    <div class='icon-box'>
                      <i class='flaticon-call-1'></i>
                    </div>
                    <div class='text'>Phone Number</div>
                    <h4>
                      <a href='tel:+4552179590'> +45 52 17 95 90</a>
                    </h4>
                  </div>
                  <div class='single-info'>
                    <div class='icon-box'>
                      <i class='flaticon-email-4'></i>
                    </div>
                    <div class='text'>Email Address</div>
                    <h4>
                    <a href='mailto:am@zolutiontech.com'> am@zolutiontech.com</a>
                    </h4>
                  </div>
                </div>
              </div>

              <div class='top-right'>
                <Link smooth to={'/#contact'} class='theme-btn btn-style-two'>
                  <span class='btn-title'>Get A Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Header Upper --> */}
        <div class='header-upper' style={sticky ? customStyles.stickyHeader : {}}>
          <div
            class='auto-container'
            style={sticky ? customStyles.fullWidth : customStyles.transition}>
            <div class='inner-container'>
              {/* <!--Nav Box--> */}
              <div class='nav-outer clearfix'>
                {/* <!--Mobile Navigation Toggler--> */}
                <div class='mobile-nav-toggler'>
                  <span class='icon fal fa-bars'></span>
                </div>

                {/* <!-- Main Menu --> */}
                <nav class='main-menu navbar-expand-md navbar-light'>
                  <div class='collapse navbar-collapse show clearfix' id='navbarSupportedContent'>
                    <ul class='navigation scroll-nav clearfix'>
                      <li>
                        <Link smooth to={'/#us'}>
                          Why us
                        </Link>
                      </li>
                      <li>
                        <Link smooth to={'/#skills'}>
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link smooth to={'/#about'}>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link smooth to={'/#portfolio'}>
                          Our work
                        </Link>
                      </li>

                      <li>
                        <Link smooth to={'/#contact'}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* <!-- Main Menu End--> */}

                <ul class='social-links clearfix'>
                  <li>
                    <Link target='_blank' to={{ pathname: 'https://www.facebook.com/ZolutionTech-145962567587951' }}>
                      <span class='fab fa-facebook-f'></span>
                    </Link>
                  </li>
                  <li>
                    <Link target='_blank' to={{pathname:'https://www.linkedin.com/company/w-invest-group-aps/?viewAsMember=true'}}>
                      <span class='fab fa-linkedin-in'></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}

        {/* <!-- Sticky Header  --> */}
        <div class='sticky-header'>
          <div class='auto-container clearfix'>
            {/* <!--Logo--> */}
            <div class='logo pull-left'>
              <Link to={'/#'} title=''>
                <img src={require('../assets/images/sticky-logo.png')} alt='' title='' />
              </Link>
            </div>
            {/* <!--Right Col--> */}
            <div class='pull-right'>
              {/* <!-- Main Menu --> */}
              <nav class='main-menu clearfix'>
                {/* <!--Keep This Empty / Menu will come through Javascript--> */}
              </nav>
              {/* <!-- Main Menu End--> */}
            </div>
          </div>
        </div>
        {/* <!-- End Sticky Menu --> */}

        {/* <!-- Mobile Menu  --> */}
        <div class='mobile-menu'>
          <div class='menu-backdrop'></div>
          <div class='close-btn'>
            <span class='icon flaticon-cancel'></span>
          </div>

          <nav class='menu-box'>
            <div class='nav-logo'>
              <Link to={'/#'}>
                <img src={require('../assets/images/logo.png')} alt='' title='' />
              </Link>
            </div>
            <div class='menu-outer'>
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
            {/* <!--Social Links--> */}
            <div class='social-links'>
              <ul class='clearfix'>
                <li>
                  <Link to={'/#'}>
                    <span class='fab fa-twitter'></span>
                  </Link>
                </li>
                <li>
                  <Link to={'/#'}>
                    <span class='fab fa-facebook-square'></span>
                  </Link>
                </li>
                <li>
                  <Link to={'/#'}>
                    <span class='fab fa-pinterest-p'></span>
                  </Link>
                </li>
                <li>
                  <Link to={'/#'}>
                    <span class='fab fa-instagram'></span>
                  </Link>
                </li>
                <li>
                  <Link to={'/#'}>
                    <span class='fab fa-youtube'></span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}
      </header>
      {/* <!-- End Main Header --> */}
    </>
  )
}
export default Header5

const customStyles = {
  stickyHeader: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  fullWidth: {
    maxWidth: 'none',
    padding: 0,
    transition: '0.4s ease',
  },
  transition: {
    transition: '0.4s ease',
  },
}
