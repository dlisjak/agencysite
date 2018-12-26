import React from 'react'
import { Link } from 'gatsby'

import HeaderImage from '../../images/bg-single-3.jpg'

const Header = () => {
  return (
    <section
      style={{
        backgroundImage: 'url(' + HeaderImage + ')',
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `fixed`,
        backgroundPosition: `center 0px`,
        height: `100vh`,
      }}
      className="single-items center-block center-block item-one parallaxie full-screen"
      id="home"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="item-titles whitecolor text-center">
              <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                <Link to="/">
                  Strategy <span>Solutions</span>{' '}
                </Link>
              </h2>
              <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">
                graphics, branding, development
              </p>
              <Link
                className="button btnwhite btn-gradient-hvr"
                to="/"
                data-wow-delay="400ms"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
