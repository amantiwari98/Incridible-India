import React from 'react';
import logo from '../images/logo2.svg'



const Incridibleindia = () => {
    return (
        <>
            <img src={logo} alt="" style={{ width: 'auto', height: '60px', cursor: 'pointer' }} className="mt-3" />
            <p style={{ color: 'white', fontSize: '13px', wordSpacing: '4px' }}>India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger
                     reserve and home to the warmest people on earth.</p><hr style={{ color: 'white' }} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="row" style={{ color: 'white', fontSize: '12px' }}>
                            <div className="col-md-3">
                                <p className="pl-4" style={{ borderRight: '1px solid white' }}>Privacy Policy</p>
                            </div>
                            <div className="col-md-3">
                                <p style={{ borderRight: '1px solid white' }}>Terms of Platform Use </p>
                            </div>
                            <div className="col-md-3">
                                <p style={{ borderRight: '1px solid white' }}> Important Links </p>
                            </div>
                            <div className="col-md-3">
                                <p style={{ borderRight: '1px solid white' }}>Emergency </p>
                            </div>
                        </div>
                        <p className="text-center mt-4"  style={{color:'white', fontSize:'14px'}}>© Ministry of Tourism, Government of India</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Incridibleindia;