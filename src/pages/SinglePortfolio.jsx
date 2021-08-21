import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Header5 from '../components/header5'
import Footer from '../components/footer'
import { portfolio } from '../assets/data/portfolio'

const aboutbg = require('./../assets/images/background/image-11.jpg')

const SinglePortfolio = (props) => {
  const [project, setProject] = useState({})
  let { id } = props.match.params
  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
    let currentProject = portfolio.find((obj) => obj.id === +id)
    currentProject ? setProject(currentProject) : history.replace('/404')
  }, [])

  const findIcon = (type) => {
    switch (true) {
      case type === 'facebook':
        return 'fab fa-facebook-f'

      case type === 'instagram':
        return 'fab fa-instagram'

      case type === 'website':
        return 'fas fa-desktop'
      default:
        break
    }
  }

  return (
    <>
      {/* <!-- Page Banner Section --> */}
      {project?.id && (
        <>
          <section class='page-banner'>
            <div
              className='page-banner-bg'
              style={{ backgroundImage: 'url(' + aboutbg + ')' }}></div>
            <div class='bottom-rotten-curve alternate'></div>

            <div class='auto-container'>
              <h1>{project.brand}</h1>
              <ul class='bread-crumb clearfix'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li class='active'>{project.brand}</li>
              </ul>
            </div>
          </section>
          {/* <!--End Banner Section --> */}

          {/* <!-- Portfolio Details --> */}
          <div class='portfolio-details'>
            <div class='auto-container'>
              <div class='top-content'>
                <div class='image-box'>
                  <img
                    style={{ width: '100%', maxHeight: 600, objectFit: 'cover' }}
                    src={project.image1}
                    alt=''
                  />
                </div>
                <div class='single-project-info'>
                  <h3>Project Details</h3>

                  <table class='cart-table'>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Brand:</strong>
                        </td>
                        <td>{project.brand}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Date:</strong>
                        </td>
                        <td>{project.date}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Keyword:</strong>
                        </td>
                        <td>{project.keywords}</td>
                      </tr>
                    </tbody>
                  </table>
                  <ul class='social-links clearfix'>
                    {project.socialLinks.map((link) => {
                      return (
                        <li key={link.type}>
                          <Link target='_blank' to={{ pathname: link.link }}>
                            <span class={findIcon(link.type)}></span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div class='sec-title'>
                <div class='sub-title'>{project.category}</div>
                <h2>{project.title}</h2>
              </div>
              <div class='text'>{project.description1}</div>
              <div class='row'>
                <div class='col-lg-6'>
                  <div class='image-box'>
                    <img
                      style={{ height: 500, width: '100%', objectFit: 'cover' }}
                      src={project.image2}
                      alt=''
                    />
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='image-box'>
                    <img
                      style={{ height: 500, width: '100%', objectFit: 'cover' }}
                      src={project.image3}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div class='text'>{project.description2}</div>
              <div class='project-post-pagination'>
                <div class='wrapper-box'>
                  <HashLink smooth to='/#portfolio' class='prev-post'>
                    <h4>Back to portfolio</h4>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default SinglePortfolio
