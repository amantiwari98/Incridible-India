import React from 'react';
import tourism from '../images/tourism.png';
import visa from '../images/visa.png';
import india from '../images/india.png';
import maharaja from '../images/maharaja.png';
import map from '../images/map.png';
import hat from '../images/hat.png';
import at from '../images/at.png';
import india2 from '../images/india2.png';
import metro from '../images/metro.png';

const Sponser = () => {
    return (
        <>
        <div className="container-fluid mb-5" style={{marginTop:'110px'}}>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-1">
                            <img src={tourism} alt="..." style={{width:'auto', height:'30px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={visa} alt="..." style={{width:'auto', height:'30px', paddingLeft:'20px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={india} alt="" style={{width:'auto', height:'30px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={maharaja} alt="" style={{width:'auto', height:'40px', paddingLeft:'30px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={map} alt="" style={{width:'auto', height:'40px', paddingLeft:'30px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={hat} alt="" style={{width:'auto', height:'40px', paddingLeft:'30px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={at} alt="" style={{width:'auto', height:'50px', paddingLeft:'30px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={india2} alt="" style={{width:'auto', height:'30px', paddingLeft:'30px'}} />
                        </div>
                        <div className="col-md-1">
                            <img src={metro} alt="" style={{width:'auto', height:'40px', paddingLeft:'60px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Sponser;