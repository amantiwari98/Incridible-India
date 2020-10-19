import React from 'react';
import ImgMediaCard2 from './Card2';
import Sdata2 from './Sdata2';


const Places = () => {
    return (
        <>
            <div className="container-fluid mb-5" style={{ marginTop: '130px' }}>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-3">
                            <div className="col-md-3">
                                <h2>Explore Before You visit </h2>
                                <p className="text-capitalize">dive deeper into india's richest culture and heritage</p>
                            </div>

                            {
                                Sdata2.map((val, ind) => {
                                    return <ImgMediaCard2
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}

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