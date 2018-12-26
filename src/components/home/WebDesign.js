import React from 'react'
import { Link } from 'gatsby'

import HeaderImage from '../../images/webdesign.jpg'

const WebDesign = () => {
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
            <div
              style={{ fontSize: `3rem` }}
              className="item-titles darkcolor masked-copy"
            >
              <h2
                style={{
                  color: `transparent`,
                  fontSize: `3rem`,
                }}
                className="font-xlight wow fadeInUp"
                data-wow-delay="200ms"
              >
                <Link style={{ color: `transparent` }} to="/webdesign">
                  Postanite <span>Kralj digitalne džungle</span>
                </Link>
              </h2>
              <p
                style={{
                  color: `#ccc`,
                  fontSize: `1rem`,
                  lineHeight: `1.3rem`,
                  fontWeight: `300`,
                }}
                className="top25 bottom25 wow fadeInUp"
                data-wow-delay="200ms"
              >
                The integration of web fonts has always been one of the largest
                contributing factors to diversity in the overall look and feel
                of websites today just like.
              </p>
              <Link style={{ color: `transparent` }} to="/webdesign">
                <p style={{ color: `transparent` }}>WebDesign</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebDesign
