import React from 'react';
import Experience2 from './Experience2';
import './Experience.css';

const Experience = () => {
    return (
        <>
            <section className="body">
                 <div className="container-fluid">
                 <h2 className="text-center pt-4" style={{color:'white'}}>Life Time Experiences</h2>
                     <div className="row ">
                         <div className="col-10 mx-auto">
                             <Experience2 />
                         </div>
                     </div>
                 </div>
            </section>
         </>
    );
};

export default Experience;