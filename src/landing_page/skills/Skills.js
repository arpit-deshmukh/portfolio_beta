import React from 'react';

function Skills() {
  return (
    <div style={{ padding: '20px', backgroundColor: "#D3D3D3" }}>
      <h2 style={{ textAlign: 'center', color: 'green' }}>My Skills</h2>

      {/* First Row: Domain Skills and Programming Languages */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        {/* Domain Skills Section */}
        <div style={{ width: '48%' }}>
          <h3 style={{ color: '#1E3A8A' }}>Soft Skills</h3>
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li><strong>Public Speaking</strong></li>
            <li><strong>Diplomacy</strong></li>
            <li><strong>Research Skills</strong></li>
            <li><strong>Negotiation Skills</strong></li>
          </ul>
        </div>

        {/* Programming Languages Section */}
        <div style={{ width: '48%' }}>
          <h3 style={{ color: '#1E3A8A' }}>Programming Languages</h3>
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li><strong>C++</strong></li>
            <li><strong>Python</strong></li>
           
            <li><strong>Java</strong></li>
          </ul>
        </div>
      </div>

      {/* Second Row: Technical Skills and Tools & Technologies */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        {/* Technical Skills Section */}
        <div style={{ width: '48%' }}>
          <h3 style={{ color: '#1E3A8A' }}>Technical Skills</h3>
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li><strong>Data Structures & Algorithms (DSA)  in C++</strong></li>
            <li><strong>MERN Stack (MongoDB, Express.js, React, Node.js)</strong></li>
            <li><strong>Frontend Development (HTML, CSS, JavaScript)</strong></li>
            
          </ul>
        </div>

        {/* Tools & Technologies Section */}
        <div style={{ width: '48%' }}>
          <h3 style={{ color: '#1E3A8A' }}>Tools & Technologies</h3>
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li><strong>Git & GitHub</strong></li>
            <li><strong>Databases(MongoDB & MySQL )</strong></li>

          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Skills;
