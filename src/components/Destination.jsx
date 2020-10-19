import React from 'react';
import Region2 from './Region2';
import Region from './Region';

const Destination = () => {
    return (
        <>
            <div className="body" >
                <section className="body">
                    <div className="container-fluid mt-2">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <Region2 />
                                <Region />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Destination;