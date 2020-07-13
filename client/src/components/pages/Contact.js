import React from "react";

function RenderContact() {
    return (
        <div className="container">
          <div className="jumbotron">
            <h1>Lewis Cruz - Fullstack Developer - Houston, TX</h1>
            <p>Technology professional and developer.</p>
            <p>
              <button className="btn btn-primary btn-lg">Learn more</button>
            </p>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>Card title</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Card content</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>Card title</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Card content</p>
            </div>
          </div>
        </div>
      );
}

export default RenderContact;