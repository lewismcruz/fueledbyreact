import React from "react";


function InterestingPeople() {
    return (
        <div className="container">
          <div className="jumbotron">
            <h1>Intersting People I Follow</h1>
            <p>The world is full of neat, weird, and interesting people.</p>
              This is just a list of people I find interesting or follow from time to time<br></br>
              for inspiration, ideas, or entertainment.<br></br>
              Life is short, don't take yourself too seriously, have some fun, and keep your eyes, ears, and mind<br></br>
              open to all the interesting things in the universe around you.
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>Josiah Zayner</h3>
            <p>
             <button className="btn btn-primary btn-lg">Learn more</button> 
            </p>
            </div>
            <div className="card-body">
              <p className="card-text">Checkout his work at The Odin and learn genetic engineering.</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>Lightning Motorcycles</h3>
            <p>
              <button className="btn btn-primary btn-lg">Learn more</button>
            </p>
            </div>
            <div className="card-body">
              <p className="card-text">Awesome fast electric bikes!</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>Cody Loveland</h3>
            <p>
             <button className="btn btn-primary btn-lg">Learn more</button> 
            </p>
            </div>
            <div className="card-body">
              <p className="card-text">Building fast cars from scratch.</p>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <h3>Colin Furze</h3>
            <p>
             <button className="btn btn-primary btn-lg">Learn more</button>
            </p>
            </div>
            <div className="card-body">
              <p className="card-text">Colin does cool stuff with just stuff in his garage.</p>
            </div>
          </div>
         </div>




      );
}

export default InterestingPeople;