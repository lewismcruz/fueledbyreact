import React from "react";

function RenderContact() {
    return (
        <div className="container">
          <div className="jumbotron">
            <h1>Lewis Cruz - Houston, TX</h1>
            <p>Technology professional and developer.</p>
            <p>
              <button className="btn btn-primary btn-lg">Learn more</button>
            </p>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>I'm on LinkedIn</h3>
            </div>
            <div className="card-body">
              <p className="card-text"><a href="https://www.linkedin.com/in/lewis-c-2a775b1a8/">LinkedIn</a></p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>I'm on GitHub</h3>
            </div>
            <div className="card-body">
              <p className="card-text"><a href="https://github.com/lewismcruz">GitHub</a></p>
            </div>
          </div>
        </div>
      );
}

export default RenderContact;