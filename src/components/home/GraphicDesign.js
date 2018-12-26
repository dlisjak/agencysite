import React from 'react'
import { Link } from 'gatsby'

import HeaderImage from '../../images/bg-single-4.jpg'

const GraphicDesign = () => {
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
          <div className="col-md-5 col-sm-8">
            <div className="item-titles darkcolor">
              <h2 className="font-xlight wow fadeInUp" data-wow-delay="300ms">
                <Link data-fancybox="group-two" to="images/gallery-flat1.jpg">
                  Be <span>Creative</span>
                </Link>
              </h2>
              <p className="top25 bottom25 wow fadeInUp" data-wow-delay="350ms">
                The integration of web fonts has always been one of the largest
                contributing factors to diversity in the overall look and feel
                of websites today just like.
              </p>
              <p>nature, shore, stars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GraphicDesign
