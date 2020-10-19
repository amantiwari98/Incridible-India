import React from 'react';
import './Destination.css';
import taj from '../images/taj2.jpeg';
import heritage from '../images/heritage.jpeg';
import buddha from '../images/buddha.jpeg';
import union from '../images/union.jpeg';
import india from '../images/india.jpeg';
import ghat2 from '../images/ghat3.jpg';

const Region2 = () => {
    return (
        <>
            <div className="row desti" style={{ paddingTop: '20px' }}>
                <div className="col-md-3">
                    <img src={taj} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Popular Destination</p>
                </div>
                <div className="col-md-3">
                    <img src={ghat2} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Spritiual Destinations</p>
                </div>
                <div className="col-md-3">
                    <img src={heritage} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">Heritage Destinations</p>
                </div>
                <div className="col-md-3">
                    <img src={buddha} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">The land of Buddha</p>
                </div>
            </div>
            <div className="row desti">
                <div className="col-md-3">
                    <img src={union} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">State and Union Territories</p>
                </div>
                <div className="col-md-3">
                    <img src={india} alt="" style={{ width: 'auto', height: '150px' }} />
                    <p className="text-center mt-3">All Destinations</p>
                </div>
            </div>
        </>
    )
};
export default Region2