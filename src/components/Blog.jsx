import React from 'react';
import Blogcard from './Blogcard';

const Blog = () => {
    return(
        <>
        <div className="container-fluid mb-5" style={{marginTop:'110px'}}>
        <h1 className="text-center font-weight-bold">Blogs</h1>
        <p className="text-center">An insight to the incredible experiences in India</p>
            <div className="row">
                <div className="col-10 mx-auto">
                   <div className="row">
                       <Blogcard />
                   </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Blog;