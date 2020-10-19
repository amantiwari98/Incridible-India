import React from 'react';
import yoga from '../images/yoga.jpg';
import beach from '../images/beach.jpg';
import temple from '../images/temple.jpg';
import desert from '../images/desert.jpg';
import fort from '../images/fort.jpg';

const Home_Carousel2 = () => {
    return (
        <>
            <div className="container-fluid mb-5" style={{ marginTop: '150px' }}>
                <h1 className="text-center font-weight-bold">Popular in India </h1>
                <p className="text-center text-muted mb-5">India is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve</p>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={yoga} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Yoga And Peace</h2>
                                <p>India's sun-kissed coastlines, peace-permeated hill stations and breezy riversides offer a host of nutritious food, spas, yoga, detox therapies, Ayurveda, naturopathy, Vedanta and meditation... </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={beach} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Beaches</h2>
                                <p>India's shorelines are endowed with a glorious beauty that is reflected in its undulating golden beaches that make for an ideal vantage point to watch the sun dipping into the sea. Beaches stroke...  </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={temple} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Temples</h2>
                                <p>IIndia boasts many architectural marvels, including cathedrals and basilicas that are recognised the world over for their beauty.  </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={fort} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Fort & Palaces</h2>
                                <p>India is blessed with heritage riches and a regal lineage. Vestiges of Indian royalty can be felt in the various forts and palaces speckled across the country. From hill forts in Rajasthan to...  </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={desert} className="d-block w-100" alt="..." style={{ height: '700px' }} />
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Safari</h2>
                                <p>India's sun-kissed coastlines, peace-permeated hill stations and breezy riversides offer a host of nutritious food, spas, yoga, detox therapies, Ayurveda, naturopathy, Vedanta and meditation... </p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home_Carousel2