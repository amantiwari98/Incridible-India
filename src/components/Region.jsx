import React from 'react';
import east from '../images/east.svg';
import north from '../images/north.svg';
import west from '../images/west.svg';
import south from '../images/south.svg';
import ne from '../images/ne.svg';
import central from '../images/central.svg';

const Region = () => {
    return (
        <>
        <h3 className="mt-4 mb-5" style={{color:'white'}}>Regions In India</h3>
            <div className="row mb-5 state">
                <div className="col-md-2">
                    <img src={east} alt="" style={{ width: 'auto', height: '60px' }} />
                    <p>East</p>
                    <ul>
                        <li>Andmaan And Nicobar</li>
                        <li>Bihar</li>
                        <li>Jharkhand</li>
                        <li>Odisha</li>
                        <li>West Bengal</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <img src={west} alt="" style={{ width: 'auto', height: '60px' }} />
                    <p>West</p>
                    <ul>
                        <li>Dadra & Haveli</li>
                        <li>Daman Dip</li>
                        <li>Goa</li>
                        <li>Gujrat</li>
                        <li>Maharastra</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <img src={north} alt="" style={{ width: 'auto', height: '60px' }} />
                    <p>North</p>
                    <ul>
                        <li>Chandigarh</li>
                        <li>Delhi</li>
                        <li>Haryana</li>
                        <li>Himanchal Pradesh</li>
                        <li>Jammu Kashmir</li>
                        <li>Ladakh</li>
                        <li>Punjab</li>
                        <li>Rajasthan</li>
                        <li>Uttar Pradesh</li>
                        <li>Uttrakhand</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <img src={ne} alt="" style={{ width: 'auto', height: '60px' }} />
                    <p>North East</p>
                    <ul>
                        <li>Arunachal Pradesh</li>
                        <li>Assam</li>
                        <li>Manipur</li>
                        <li>Meghalaya</li>
                        <li>Mizoram</li>
                        <li>Nagaland</li>
                        <li>Sikkim</li>
                        <li>Tripura</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <img src={south} alt="" style={{ width: 'auto', height: '60px' }} />
                    <p>South</p>
                    <ul>
                        <li>Andhra Pradesh</li>
                        <li>Karnataka</li>
                        <li>Kerala</li>
                        <li>Lakshadweep</li>
                        <li>Puducherry</li>
                        <li>Tamil Nadu</li>
                        <li>Telangana</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <img src={central} alt="" style={{ width: 'auto', height: '60px' }} />
                    <p>Central</p>
                    <ul>
                        <li>Chhattisgarh</li>
                        <li>Madhya Pradesh</li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Region;