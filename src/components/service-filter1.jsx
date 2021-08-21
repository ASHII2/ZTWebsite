import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const gallerybg = require('./../assets/images/background/image-14.jpg')

const images = [
  {
    id: 1,
    name: 'Mad For Fatigrøve',

    imgUrl: require('../assets/customImages/logoMFF.png'),
  },
  {
    id: 2,
    name: 'Krea',
    imgUrl: require('../assets/customImages/logoKrea.png'),
  },
  {
    id: 3,
    name: 'Fitness World',
    imgUrl: 'https://www.fitnessworld.com/dk2/themes/custom/fw/lib/source/gfx/logo.svg',
  },
  {
    id: 1,
    name: 'Mad For Fatigrøve',

    imgUrl: require('../assets/customImages/logoMFF.png'),
  },
  {
    id: 2,
    name: 'Krea',
    imgUrl: require('../assets/customImages/logoKrea.png'),
  },
  {
    id: 3,
    name: 'Fitness World',
    imgUrl: 'https://www.fitnessworld.com/dk2/themes/custom/fw/lib/source/gfx/logo.svg',
  },
]

const FILTER_DEFS = {
  BANKING: (image) => image.banking,
  INSURANCE: (image) => image.insurance,
  FAMILY: (image) => image.family,
  BUSINESS: (image) => image.business,
  NONE: (image) => image,
}

const ServiceFilter1 = (props) => {
  const [state, setState] = useState({
    list: images,
    filterKey: 'NONE',
  })

  const { list, filterKey } = state
  const filteredList = list.filter(FILTER_DEFS[filterKey])
  return (
    <>
      <section class='gallery-section'>
        <div
          class='sec-bg'
          style={{ backgroundImage: 'url(' + gallerybg + ')' }}
          id='portfolio'></div>
        <div class='sortable-masonry'>
          <div class='auto-container'>
            <div class='sec-title light text-center'>
              <div class='sub-title'>Portfolio</div>
              <h2>
                See What Kind Of <br />
                Work We Have Done
              </h2>
            </div>
          </div>
          <div class='auto-container'>
            <div class='portfolio-container'>
              {/* <!-- Gallery Block One --> */}
              {filteredList.map((image) => (
                <Link to={`/portfolio/${image.id}`} className='portfolio-item'>
                  <div className='image-container'>
                    <img src={image.imgUrl} alt={image.name} className='portfolio-img' />
                  </div>
                  <h5>{image.name}</h5>
                  <i class='fas fa-arrow-right arrow'></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceFilter1
