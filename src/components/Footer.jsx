import React from 'react';
import Statetourism from './Statetourism';
import Ut from './Uttourism';
import Contact2 from './Contact2';
import Incridibleindia from './Incridibleindia';

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <Statetourism />
                        <Ut />
                        <Contact2 />
                    </div>
                    <Incridibleindia />
                </div>
            </section>
        </>
    )
};

export default Footer;