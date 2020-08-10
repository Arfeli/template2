import React, { Fragment } from 'react'

const Navbar1 = () => {
    return (
    <Fragment>
         <nav className="unslate_co--site-mobile-menu">
            <div className="close-wrap d-flex">
                <a href="#" className="d-flex ml-auto js-menu-toggle">
                    <span className="close-label">Close</span>
                    <div className="close-times">
                        <span className="bar1"></span>
                        <span className="bar2"></span>
                    </div>
                </a>
            </div>
            <div className="site-mobile-inner"></div>
        </nav>
        <nav className="unslate_co--site-nav site-nav-target">
            <div className="container">
                <div className="row align-items-center justify-content-between text-left">
                    <div className="col-md-5 text-right">
                        <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                            <li className="has-children">
                                <a href="#home-section" className="nav-link">Home</a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="index.html">Hero Image BG</a>
                                    </li>
                                    <li>
                                        <a href="index-video.html">Video BG</a>
                                    </li>
                                    <li>
                                        <a href="index-hero-slider.html">Hero Slider</a>
                                    </li>
                                    <li>
                                        <a href="index-sidebar-menu.html">Sidebar Menu</a>
                                    </li>
                                    <li>
                                        <a href="index-right-menu.html">Right Menu</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
                            <li><a href="#about-section" className="nav-link">About</a></li>
                            <li><a href="#services-section" className="nav-link">Services</a></li>
                        </ul>
                    </div>
                    <div className="site-logo pos-absolute">
                        <a href="index.html" className="unslate_co--site-logo">Unfold<span>.</span></a>
                    </div>
                    <div className="col-md-5 text-right text-lg-left">
                        <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                            <li><a href="#skills-section" className="nav-link">Skills</a></li>
                            <li><a href="#testimonial-section" className="nav-link">Testimonial</a></li>
                            <li><a href="#journal-section" className="nav-link">Journal</a></li>
                            <li><a href="#contact-section" className="nav-link">Contact</a></li>
                        </ul>
                        <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                            <li><a href="#" className="js-menu-toggle">Menu</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </Fragment>
    )
}

export default Navbar1
