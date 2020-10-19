import React from 'react';
import './Socialimages.css';
import temple from '../images/train.jpg';
import lake from '../images/lake.jpeg';
import weekend from '../images/waterfall.jpeg';
import shimla from '../images/shimla.webp';
import kashi from '../images/kashi.jpeg';
import chenni from '../images/chenni.jpg';
import puri from '../images/puri.jpg' ;
import hampi from '../images/hampi.jpeg'

const Socislimages = () => {
    return (
        <>
            <div class="row">
                <div class="column">
                    <img src={temple} style={{ width: '100%' }} />
                    <img src={kashi} style={{ width: '100%' }} />
                </div>
                <div class="column">
                    <img src={lake} style={{ width: '100%' }} />
                    <img src={hampi} style={{ width: '100%' }} />
                </div>
                <div class="column">
                    <img src={shimla} style={{ width: '100%' }} />
                    <img src={puri} style={{ width: '100%' }} />
                </div>
                <div class="column">
                    <img src={chenni} style={{ width: '100%' }} />
                    <img src={weekend} style={{ width: '100%' }} />
                </div>
            </div>
        </>
    )
};

export default Socislimages