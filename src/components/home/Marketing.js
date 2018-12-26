import React from 'react'
import { Link } from 'gatsby'

import HeaderImage from '../../images/bg-single-3.jpg'

const Marketing = () => {
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
      className="single-items center-block item-two parallaxie full-screen"
      id="creative"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-7 col-sm-8 offset-sm-4">
            <div className="item-titles whitecolor text-right">
              <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                <Link data-fancybox="group-three" to="images/gallery-flat1.jpg">
                  XeOne <span>Corporate</span>
                </Link>
              </h2>
              <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">
                media, culture, colors
              </p>
              <Link
                className="button btnprimary btn-gradient-hvr wow fadeInUp"
                data-wow-delay="400ms"
                data-fancybox="group-three"
                to="images/gallery-flat1.jpg"
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

export default Marketing
