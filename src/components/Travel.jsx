import React from 'react';
import './Destination.css';
import india from '../images/india2.jpeg';
import visa from '../images/visa.jpeg';
import currency from '../images/currency.jpeg';
import repo from '../images/repo.jpeg';


const Contact = () => {
    return (
        <>
        <section className="body" style={{height:'100vh'}}>
          <div className="container-fluid body">
          <h2 className="text-center pt-3" style={{color:'white'}}>Travel Query</h2>
              <div className="row desti">
                  <div className="col-10 mx-auto">
                      <div className="row pt-4">
                          <div className="col-md-3">
                           <img src={india} alt="" style={{ width: 'auto', height: '150px' }} />
                           <p className="text-center mt-2">About India</p>
                          </div>
                          <div className="col-md-3">
                          <img src={visa} alt="" style={{ width: 'auto', height: '150px' }} /> 
                          <p className="text-center mt-2">Visa</p> 
                          </div>
                          <div className="col-md-3">
                          <img src={currency} alt="" style={{ width: 'auto', height: '150px' }} /> 
                          <p className="text-center mt-2">Currency</p>
                          </div>
                          <div className="col-md-3">
                          <img src={repo} alt="" style={{ width: 'auto', height: '150px' }} /> 
                          <p className="text-center mt-2">Repository</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        </>
    );
};

export default  Contact;