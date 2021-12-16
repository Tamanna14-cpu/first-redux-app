import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid justify-content-center text-light ">
            <footer>
                <div className="row my-5 justify-content-center pb-5 pt-2">
                    <div className="col-11">
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 className="text-muted mb-md-0 mb-5 bold-text">Travel Blog: Read latest Blogs & <br /> make your destination in this wanderland</h3>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul className="list-unstyled">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p className="mb-1">605, RATAN ICON BUILDING</p>
                                <p>SEAWOODS SECTOR</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p className="social text-muted mb-0 pb-0 bold-text">
                                    <span className="mx-2"><i className="fab fa-facebook-square"></i></span>
                                    <span className="mx-2"><i className="fa fa-linkedin-square" ></i></span>
                                    <span className="mx-2"><i className="fa fa-twitter"></i></span>
                                    <span className="mx-2"><i className="fa fa-instagram" ></i></span>
                                </p><small className="rights"> <span>&#169;</span>All Rights Reserved Tamanna bithy</small>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 className="mt-55 mt-2 text-muted bold-text"><b>Tamanna Bithy</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> tamanna14@gmail.com</small>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 className="text-muted bold-text"><b>RISHABH SHEKHAR</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> rishab@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;