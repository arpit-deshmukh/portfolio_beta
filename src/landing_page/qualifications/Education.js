import React from 'react'
function Education() {
    return (

        <div className='row' id='education' style={{backgroundColor:"#D3D3D3"}}>
            
            
            <h2 style={{textAlign:"center" ,color:"green"}}>My Educational Qualification</h2>
            <br/>
            <div className='row' style={{textAlign:"center"}}>
                <h4>BE Information Technology</h4>
                <h5>D.Y. Patil College of Engineering, Pune</h5>
                <p>2023-2027</p>
            </div>

            
            <div className='row'style={{textAlign:"center"}} >
                <div className='col-6'>
                    <h4>HSC</h4>
                
                    <p>Score: 81.83% · Feb 2023</p>
                </div>

                <div className='col-6'style={{textAlign:"center"}}>
                    <h4>SSC</h4>
                    <p>Score: 96.60% · Mar 2021</p>
                </div>
            </div>
            
            <hr/>
        </div>
      );
}

export default Education;