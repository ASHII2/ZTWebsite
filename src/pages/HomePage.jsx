import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Tab } from 'react-bootstrap'
import HomeSlider2 from '../components/home-slider2'
import ServiceFilter1 from '../components/service-filter1'

const wellcomebg1 = require('../assets/images/resource/image-1.jpg')
const authorbg1 = require('../assets/images/background/image-1.jpg')
// const videobg = require('../assets/images/background/image-2.jpg');
const teambg = require('../assets/images/background/image-3.jpg')
const newsbg = require('../assets/images/background/image-4.jpg')

class Onepage extends Component {
  render() {
    return (
      <>
        <HomeSlider2 />

        {/* <!-- Why Choose Us Section --> */}
        <section id='us' class='why-chooseus-section'>
          <div class='auto-container'>
            <div class='row align-items-center'>
              <div class='col-lg-6'>
                <div class='content-box'>
                  <div class='sec-title'>
                    <div class='sub-title'>Why Choose Us</div>
                    <h2>
                      Why Should You <br />
                      Choose Us ?
                    </h2>
                  </div>
                  <Tab.Container defaultActiveKey='first'>
                    <Nav variant='pills' className='nav nav-tabs tab-btn-style-one'>
                      <Nav.Item>
                        <Nav.Link eventKey='first'>
                          <span>Our Mission</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>
                          <span>Our Vission</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>
                          <span>Our Value</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className='tabs-content'>
                      <Tab.Pane eventKey='first' className='fadeInUp animated'>
                        <div class='clearfix'>
                          <div class='image'>
                            <img src={require('../assets/images/resource/image-4.jpg')} alt='' />
                          </div>
                          <div class='text'>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do
                              eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim
                              ad minim veni am, quis nostrud exercitation ullamco.
                            </p>
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est
                              laborum. Sed ut perspiciatis unde omnis iste natus error
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second' className='fadeInUp animated'>
                        <div class='clearfix'>
                          <div class='image'>
                            <img src={require('../assets/images/resource/image-4.jpg')} alt='' />
                          </div>
                          <div class='text'>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do
                              eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim
                              ad minim veni am, quis nostrud exercitation ullamco.
                            </p>
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est
                              laborum. Sed ut perspiciatis unde omnis iste natus error
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third' className='fadeInUp animated'>
                        <div class='clearfix'>
                          <div class='image'>
                            <img src={require('../assets/images/resource/image-4.jpg')} alt='' />
                          </div>
                          <div class='text'>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do
                              eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim
                              ad minim veni am, quis nostrud exercitation ullamco.
                            </p>
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est
                              laborum. Sed ut perspiciatis unde omnis iste natus error
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div class='col-lg-6'>
                <div class='image-wrapper'>
                  <div class='image-one'>
                    <img src={require('../assets/images/resource/image-6.jpg')} alt='' />
                  </div>
                  <div class='image-two'>
                    <img src={require('../assets/images/resource/image-5.jpg')} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Skills Section --> */}
        <section id='skills' class='services-section-five'>
          <div class='auto-container'>
            <Tab.Container defaultActiveKey='first'>
              <Nav className='nav-tabs tab-btn-style-one'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-team'></span>
                      </div>
                      <h5>Management</h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-money'></span>
                      </div>
                      <h5>TAX Consume</h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-assets'></span>
                      </div>
                      <h5>Finance & Strategy</h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-world'></span>
                      </div>
                      <h5>Best Advice</h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-money-1'></span>
                      </div>
                      <h5>Insurance</h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='sixth'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-notebook'></span>
                      </div>
                      <h5>Criminal Case</h5>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first' className=' fadeInUp animated'>
                  <div class='row align-items-center'>
                    <div class='col-lg-6'>
                      <div class='image'>
                        <img src={require('../assets/images/resource/image-18.jpg')} alt='' />
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='content pl-lg-4'>
                        <div class='sec-title'>
                          <div class='sub-title'>Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class='text'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='second' className=' fadeInUp animated'>
                  <div class='row align-items-center'>
                    <div class='col-lg-6'>
                      <div class='image'>
                        <img src={require('../assets/images/resource/image-18.jpg')} alt='' />
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='content pl-lg-4'>
                        <div class='sec-title'>
                          <div class='sub-title'>Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class='text'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='third' className=' fadeInUp animated'>
                  <div class='row align-items-center'>
                    <div class='col-lg-6'>
                      <div class='image'>
                        <img src={require('../assets/images/resource/image-18.jpg')} alt='' />
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='content pl-lg-4'>
                        <div class='sec-title'>
                          <div class='sub-title'>Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class='text'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth' className=' fadeInUp animated'>
                  <div class='row align-items-center'>
                    <div class='col-lg-6'>
                      <div class='image'>
                        <img src={require('../assets/images/resource/image-18.jpg')} alt='' />
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='content pl-lg-4'>
                        <div class='sec-title'>
                          <div class='sub-title'>Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class='text'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth' className=' fadeInUp animated'>
                  <div class='row align-items-center'>
                    <div class='col-lg-6'>
                      <div class='image'>
                        <img src={require('../assets/images/resource/image-18.jpg')} alt='' />
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='content pl-lg-4'>
                        <div class='sec-title'>
                          <div class='sub-title'>Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class='text'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='sixth' className=' fadeInUp animated'>
                  <div class='row align-items-center'>
                    <div class='col-lg-6'>
                      <div class='image'>
                        <img src={require('../assets/images/resource/image-18.jpg')} alt='' />
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='content pl-lg-4'>
                        <div class='sec-title'>
                          <div class='sub-title'>Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class='text'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </section>

        {/* <!-- About Section --> */}
        <section class='about-section' id='about'>
          <div class='auto-container'>
            <div class='row align-items-center'>
              <div class='col-lg-6'>
                <div class='image-wrapper'>
                  <div class='image-one'>
                    <img src={require('../assets/images/resource/image-2.jpg')} alt='' />
                  </div>
                  <div
                    class='image-two wow fadeInUp'
                    data-wow-delay='200ms'
                    data-wow-duration='1200ms'>
                    <div class='caption'>F.</div>
                    <div class='image-outer'>
                      <img src={require('../assets/images/resource/image-3.jpg')} alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-6'>
                <div class='content-box'>
                  <div class='sec-title'>
                    <div class='sub-title'>About Us</div>
                    <h2>
                      We Work With <br />
                      You To Address
                    </h2>
                    <div class='text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </div>
                  </div>
                  <div class='row'>
                    <div class='info-column col-md-6'>
                      <div class='icon-box'>
                        <div class='icon'>
                          <img src={require('../assets/images/icons/icon-1.png')} alt='' />
                        </div>
                        <h5>Phone Number</h5>
                        <h2>+897 6765 754</h2>
                      </div>
                    </div>
                    <div class='info-column col-md-6'>
                      <div class='icon-box'>
                        <div class='icon'>
                          <img src={require('../assets/images/icons/icon-2.png')} alt='' />
                        </div>
                        <h5>Email Address</h5>
                        <h2>info@webmail.com</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Gallery Section --> */}
        <ServiceFilter1 />

        {/* <!-- Contact Section --> */}
        <section class='contact-section' id='contact'>
          <div class='auto-container'>
            <div class='row'>
              <div class='col-lg-6'>
                <div class='sec-title'>
                  <div class='sub-title'>Write Here</div>
                  <h2>Get In Touch</h2>
                </div>
                {/* <!-- Contact Form--> */}
                <div class='contact-form'>
                  <form
                    method='post'
                    action='http://azim.commonsupport.com/Finandox/sendemail.php'
                    id='contact-form'>
                    <div class='row clearfix'>
                      <div class='col-md-12 form-group'>
                        <label for='name'>Enter your name</label>
                        <input
                          type='text'
                          name='username'
                          id='name'
                          placeholder='Enter name here......'
                          required=''
                        />
                        <i class='fas fa-user'></i>
                      </div>

                      <div class='col-md-12 form-group'>
                        <label for='email'>Enter your email</label>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Enter email here......'
                          required=''
                        />
                        <i class='fas fa-envelope'></i>
                      </div>

                      <div class='col-md-12 form-group'>
                        <label for='message'>Enter your message</label>
                        <textarea
                          name='message'
                          id='message'
                          placeholder='Enter message here......'></textarea>
                        <i class='fas fa-edit'></i>
                      </div>

                      <div class='col-md-12 form-group'>
                        <button class='theme-btn btn-style-one' type='submit' name='submit-form'>
                          <span class='btn-title'>Get In Touch</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class='col-lg-6'>
                <div class='sec-title'>
                  <div class='sub-title'>Get Us Here</div>
                  <h2>Contact Us</h2>
                </div>
                <div class='contact-info'>
                  <div class='border-box'>
                    <div class='border_top'></div>
                    <div class='border_middile'></div>
                  </div>
                  <div class='row'>
                    <div class='info-column col-md-6'>
                      <div class='icon-box'>
                        <div class='icon'>
                          <span class='flaticon-email-6'></span>
                        </div>
                        <h3>Email Address</h3>
                        <ul>
                          <li>
                            <Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link>
                          </li>
                          <li>
                            <Link to={'/mailto:jobs@exampleco.com'}>jobs@exampleco.com</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class='info-column col-md-6'>
                      <div class='icon-box'>
                        <div class='icon'>
                          <span class='flaticon-call-1'></span>
                        </div>
                        <h3>Phone Number</h3>
                        <ul>
                          <li>
                            <Link to={'/tel:+8976765654654'}>+897 676 5654 654</Link>
                          </li>
                          <li>
                            <Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class='info-column col-md-6'>
                      <div class='icon-box'>
                        <div class='icon'>
                          <span class='flaticon-location'></span>
                        </div>
                        <h3>Office Address</h3>
                        <ul>
                          <li>
                            12/A, Romania City Town Hall <br />
                            New Joursey, UK
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class='info-column col-md-6'>
                      <div class='icon-box'>
                        <div class='icon'>
                          <span class='flaticon-worldwide'></span>
                        </div>
                        <h3>Web Connect</h3>
                        <ul>
                          <li>
                            <Link to={'/http://example.com/'}>example.com</Link>
                          </li>
                          <li>
                            <Link to={'/http://jobs.example.com/'}>jobs.example.com</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Onepage
