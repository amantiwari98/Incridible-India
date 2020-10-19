import React from 'react';
import './Card3.css'
import ajanta from '../images/ajanta1.jpg';
import ajanta2 from '../images/rafting.webp';
import ajanta3 from '../images/art.jpeg';
import ajanta4 from '../images/food.jpg';
import ajanta5 from '../images/luxury.jpeg';
import ajanta6 from '../images/wildlife.jpg';
import ajanta7 from '../images/spritiual.jpeg';
import ajanta8 from '../images/shopping.webp';



const Card3 = () => {
    return (
        <>
            <div className="container-fluid mb-5" style={{ marginTop: '110px' }}>
                <h1 className="text-center font-weight-bold">Immersive Experiences</h1>
                <p className="text-center text-capitalize mb-5">in the land of opulence, let loose and discover yourself</p>
                <div className="row">
                    <div className="col-md-3 gy-3">
                        <img src={ajanta} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                    <div className="col-md-3  gy-3">
                        <img src={ajanta8} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                    <div className="col-md-3  gy-3">
                        <img src={ajanta2} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                    <div className="col-md-3  gy-3">
                        <img src={ajanta3} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 gy-3">
                        <img src={ajanta4} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                    <div className="col-md-3 gy-3">
                        <img src={ajanta5} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                    <div className="col-md-3 gy-3">
                        <img src={ajanta6} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                    <div className="col-md-3 gy-3">
                        <img src={ajanta7} alt="kk" style={{ width: '100%', borderRadius:'5px', cursor:'pointer',  height:'180px' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card3;