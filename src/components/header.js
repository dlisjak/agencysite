import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="site-header transparent-sidemenu">
    <nav
      style={{
        position: `absolute`,
        top: `0`,
      }}
      className="navbar navbar-expand-lg transparent-bg static-nav"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          {siteTitle}
        </Link>

        <div className="collapse navbar-collapse" id="xenav" />
      </div>
      <a
        href="javascript:void(0)"
        className="d-lg-inline-block sidemenu_btn"
        id="sidemenu_toggle"
      >
        <span /> <span /> <span />
      </a>
    </nav>
    <div className="side-menu">
      <div className="inner-wrapper">
        <span className="btn-close" id="btn_sideNavClose">
          <i />
          <i />
        </span>
        <nav className="side-nav">
          <ul className="navbar-nav w-100">
            <li className="nav-item active">
              <Link className="nav-link" to="#home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#creative">
                Creative
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#corporate">
                Corporate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#social">
                Social
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#seo">
                SEO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#marketing">
                Marketing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#agency">
                agency
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#site-footer">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="side-footer w-100">
          <ul className="social-icons-simple white top40">
            <li>
              <Link to="javascript:void(0)">
                <i className="fa fa-facebook" />{' '}
              </Link>{' '}
            </li>
            <li>
              <Link to="javascript:void(0)">
                <i className="fa fa-instagram" />{' '}
              </Link>{' '}
            </li>
            <li>
              <Link to="javascript:void(0)">
                <i className="fa fa-twitter" />{' '}
              </Link>{' '}
            </li>
          </ul>
          <p className="whitecolor">
            &copy; 2018 XeOne. Made With Love by themesindustry
          </p>
        </div>
      </div>
    </div>
    <a id="close_side_menu" href="javascript:void(0);" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
