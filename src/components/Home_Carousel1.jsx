import React from 'react';
import img1 from '../images/wall1.jpg';
import img2 from '../images/wall2.jpg';
import img3 from '../images/wall3.jpg';

const Home_Carousel1 = () => {
    return (
        <>
            <div className="container-fluid mt-4 caro">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={img1} className="d-block w-100" alt="..." style={{ height: '500px' }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={img2} className="d-block w-100" alt="..." style={{ height: '500px' }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={img3} className="d-block w-100" alt="..." style={{ height: '500px' }} />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <p className="mt-4">One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home_Carousel1;