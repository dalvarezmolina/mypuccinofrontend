import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 3,
        },
        576: {
            items: 4,
        },
        768: {
            items: 6,
        },
        1200: {
            items: 9,
        }
    }
}

class InstagramPhoto extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="instagram-area">
                {this.state.display ? <OwlCarousel 
                    className="instagram-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="instagram-box">
                        <img  alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img  alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img  alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img  alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img  alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img  alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img  alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>

                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>

                    <div className="instagram-box">
                        <img alt="image" />

                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <a target="_blank" href="https://www.instagram.com/"></a>
                    </div>
                </OwlCarousel> : ''}
            </div>
        );
    }
}

export default InstagramPhoto;
