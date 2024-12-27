import React from 'react';

function Qualifications() {
    return ( 
       <div className='container' id='education' >
            <hr />
            <h2>My Educational Qualification</h2>
            
            <div className='row'>
                <h3>BE Information Technology</h3>
                <h5>D.Y. Patil College of Engineering, Pune</h5>
                <p>2023-2027</p>
            </div>

            <hr />
            
            <div className='row'>
                <div className='col-6'>
                    <h4>HSC</h4>
                    <p>Amravati 2021-2023</p>
                    <p>Score: 81.83% · Feb 2023</p>
                </div>

                <div className='col-6'>
                    <h4>SSC</h4>
                    <p>Score: 96.60% · Mar 2021</p>
                </div>
            </div>
        </div>
    );
}

export default Qualifications;
