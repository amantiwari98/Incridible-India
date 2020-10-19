import React from 'react';
import ImgMediaCard from './Card';
import Sdata from './Sdata';


const Places = () => {
    return (
        <>
            <div className="container-fluid mb-5" style={{ marginTop: '130px' }}>
                <h1 className="text-center font-weight-bold">Must Visit Destinations</h1>
                <p className="text-center text-muted mb-5">From historical cities to natural splendours, come see the best of India</p>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-3">

                            {
                                Sdata.map((val, ind) => {
                                    return <ImgMediaCard
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        content={val.content}

                                    />

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Places;