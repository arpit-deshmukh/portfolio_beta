import React from "react";

function Projects() {
  return (
    <div>
      <div className="row" style={{ backgroundColor: "#D3D3D3" }}>
        <hr />
        <hr/>
        <h2 style={{ textAlign: "center", color: "green" }}>projects</h2>

        <div className="row"style={{paddingLeft:"40px"}} >
          <h3 style={{ textAlign: "center",color: '#1E3A8A' }}>Stock Broking Platform</h3>
          <p >
              The Stock Broking Platform is a  web application designed for
             stock trading and investment management<br/> Built using the
            MERN Stack (MongoDB, Express.js, React, Node.js), it offers
            real-time stock updates, trade execution, portfolio management, and
            analytics.<br/> The frontend, developed with React, ensures an intuitive
            and responsive user experience, allowing traders to manage their
            investments efficiently.<br/> This platform provides a secure and
            high-performance environment for stock broking, enabling users to
            make informed decisions and trade confidently.
            <br/>
         
          </p>
          <p>
          <ul>
           <li>
              <strong>Real-Time Stock Updates</strong>: Keep track of market
              changes and stock prices in real-time.
            </li>
            <li>
              <strong>Trade Execution</strong>: Execute buy and sell orders
              instantly with high performance.
            </li>
            <li>
              <strong>Portfolio Management</strong>: Manage your investments
              with ease and get detailed reports on your holdings.
            </li>
            <li>
              <strong>Analytics & Reports</strong>: Analyze stock performance
              and track market trends with built-in analytics.
            </li>
            <li>
              <strong>Secure Authentication</strong>: Ensures safe user logins
              and protects personal and financial data.
            </li>
           </ul>
          </p>
        </div>

        <br />
        <div className="row" style={{paddingLeft:"40px"}}>
          <h3 style={{ textAlign: "center" ,color: '#1E3A8A' }}>Video Conferencing Platform </h3>
          <p>
            This Video Conferencing Platform is built using the MERN Stack
            (MongoDB, Express.js, React, Node.js), offering a robust, scalable
            backend, and a highly interactive frontend. The platform integrates
            WebRTC for high-quality, real-time video and audio communication,
            enabling seamless video calls and meetings. Key features include:
            Authentication for secure user login and registration Real-Time Chat
            for messaging during meetings Screen Sharing to enhance
            collaboration File Sharing for sharing documents and other media in
            real time By leveraging WebSockets for real-time communication, the
            platform ensures low-latency and smooth interactions during video
            conferences. The user-friendly React frontend offers an intuitive
            interface for users to easily schedule, join, and manage meetings.
            

          <p>
          <ul>
              <li>
                <strong>WebRTC</strong>: Real-time video and audio
                communication.
              </li>
              <li>
                <strong>Authentication</strong>: Secure user management and
                login.
              </li>
              <li>
                <strong>WebSockets</strong>: Enables real-time chat and
                communication.
              </li>
              <li>
                <strong>Screen and File Sharing</strong>: Facilitates
                collaboration during video calls.
              </li>
            </ul>
          </p>

          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
