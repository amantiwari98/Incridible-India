import React from 'react';
import Socislimages from './SocialImages';
import SocialImages from './SocialImages';

const Social = () => {
    return (
        <>
            <div className="container-fluid mb-5" style={{ marginTop: '100px' }}>
                <h1 className="text-center font-weight-bold">Social Feeds</h1>
                <p className="text-center">Share your moments</p>
                <Socislimages />
            </div>
        </>
    )
};

export default Social