import React from 'react'
import imgOne from '../assets/images/b-transitions-in-ux-design.jpg'
import imgTwo from '../assets/images/b-inspired-by-italian-style.jpg'
import imgThree from '../assets/images/b-josh-woodward-already-there.jpg'
import person from '../assets/images/person.jpeg'

function News() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row contTitle">
                    <h2>LATEST NEWS</h2>
                    <div className="raya"></div>
                </div>
                <div className="row cont-news">

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="contImg">
                                <img src={imgOne} alt="" />
                            </div>
                            <div className="contDescription">
                                <h5>TRANSITIONS IN UX DESIGN</h5>
                                <div className="separador"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam sum.</p>
                            </div>
                            <div className="contPublicador">
                                <div>
                                    <img src={person} alt="" />
                                    <span>Robert Altmany</span>
                                </div>
                                <span>24 February, 2021</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="contImg">
                                <img src={imgTwo} alt="" />
                            </div>
                            <div className="contDescription">
                                <h5>INSPIRED BY ITALIAN STYLE</h5>
                                <div className="separador"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam sum.</p>
                            </div>
                            <div className="contPublicador">
                                <div>
                                    <img src={person} alt="" />
                                    <span>Robert Altmany</span>
                                </div>
                                <span>24 February, 2021</span>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="contImg">
                                <img src={imgThree} alt="" />
                            </div>
                            <div className="contDescription">
                                <h5>JOSH WOODWARD ALREADY THERE</h5>
                                <div className="separador"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam sum.</p>
                            </div>
                            <div className="contPublicador">
                                <div>
                                    <img src={person} alt="" />
                                    <span>Robert Altmany</span>
                                </div>
                                <span>24 February, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
