import React from "react";

function About() {
  return (
    
      <div className="row " style={{backgroundColor:"#D3D3D3" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#2E8B57", // A shade of green
            marginBottom: "20px",
          }}
        >
          About Me
        </h2>

        <div className="col-md-6 text-center">
          <img
            src="media/arpit_beta.png"
            alt="Arpit Deshmukh"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "10px",
              marginBottom: "20px", // Add space below the image
            }}
          />
        </div>

        <div className="col-md-6">
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#333333", // Dark grey for better readability
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Hello! I'm Arpit Deshmukh, a tech enthusiast with a diverse set of
            interests <br/>ranging from software development and data science to
            artificial intelligence and cybersecurity.
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;I believe technology holds the key for solving some of the world’s
            most complex challenges and rising problems. By leveraging my skills
            in coding, problem-solving, and innovation, I aim to create solutions
            that not only drive innovation and growth but also make a positive
            impact on society.<br/> 

          </p>
        </div>
        <hr/>
        
        <hr/>
      </div>

      
    
  );
}

export default About;
