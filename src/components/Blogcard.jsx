import React from 'react';
import { NavLink } from 'react-router-dom';
import temple from '../images/temple2.jpg';
import tracking from '../images/tracking.jpg';
import lake from '../images/lake.jpg';
import weekend from '../images/weekend.jpeg';

const Blogcard = () => {
    return (
        <>
            <div className="col-md-3">
                <div class="card" style={{ width: '16rem', border:'none' }}>
                    <img src={temple} class="card-img-top" alt="..." style={{ height: '400px' }} />
                    <div class="card-body" style={{paddingLeft:'60px'}}>
                        <NavLink to="#" class="btn btn-primary" style={{borderRadius:'30px', boxShadow:'0px 0px 8px black'}}>Read More</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card" style={{ width: '16rem', border:'none' }}>
                    <img src={tracking} class="card-img-top" alt="..." style={{ height: '400px' }} />
                    <div class="card-body" style={{paddingLeft:'60px'}}>
                        <NavLink to="#" class="btn btn-primary" style={{borderRadius:'30px', boxShadow:'0px 0px 8px black'}}>Read More</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card" style={{ width: '16rem', border:'none' }}>
                    <img src={lake} class="card-img-top" alt="..." style={{ height: '400px' }} />
                    <div class="card-body" style={{paddingLeft:'60px'}}>
                        <NavLink to="#" class="btn btn-primary" style={{borderRadius:'30px', boxShadow:'0px 0px 8px black'}}>Read More</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card" style={{ width: '16rem', border:'none' }}>
                    <img src={weekend} class="card-img-top" alt="..." style={{ height: '400px' }} />
                    <div class="card-body" style={{paddingLeft:'60px'}}>
                        <NavLink to="#" class="btn btn-primary" style={{borderRadius:'30px', boxShadow:'0px 0px 8px black'}}>Read More</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
};

export default Blogcard;