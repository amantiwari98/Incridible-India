import React from 'react';
import './Experience.css';
import heritage from '../images/heritage2.jpeg';
import spritiual from '../images/spritiual2.jpeg';
import adventure from '../images/adventure.jpeg';
import nature from '../images/nature.jpeg';
import art from '../images/art2.jpeg';
import food from '../images/food3.jpeg';
import luxury from '../images/luxury2.jpeg';
import yoga from '../images/yoga2.jpeg';
import shopping from '../images/shopping2.jpeg';
import unesco from '../images/unesco.jpeg';
import museam from '../images/museam2.jpeg';
import craft from '../images/crafted2.jpeg';

const Experience2 = () => {
    return (
        <>
            <div className="row desti" style={{ paddingTop: '20px' }}>
                <div className="col-md-3">
                    <img src={heritage} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Heritage</p>
                </div>
                <div className="col-md-3">
                    <img src={spritiual} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Spritiual</p>
                </div>
                <div className="col-md-3">
                    <img src={adventure} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Adventure</p>
                </div>
                <div className="col-md-3">
                    <img src={nature} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Nature</p>
                </div>
            </div>
            <div className="row desti">
                <div className="col-md-3">
                    <img src={art} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">a=Art</p>
                </div>
                <div className="col-md-3">
                    <img src={food} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Food & Cousins</p>
                </div>
                <div className="col-md-3">
                    <img src={luxury} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Luxury</p>
                </div>
                <div className="col-md-3">
                    <img src={yoga} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Yoga & Wellness</p>
                </div>
            </div>
            <div className="row mb-5 desti">
                <div className="col-md-3">
                    <img src={shopping} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">shopping </p>
                </div>
                <div className="col-md-3">
                    <img src={unesco} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">World UNESCO Site</p>
                </div>
                <div className="col-md-3">
                    <img src={museam} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Museam </p>
                </div>
                <div className="col-md-3">
                    <img src={craft} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Art & Craft</p>
                </div>
            </div>
        </>
    )
};

export default Experience2;