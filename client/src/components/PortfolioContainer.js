import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


class PortfolioContainer extends Component {
    state = {
        currentPage: "Home"
    };
    
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderAPage = () => {
        console.log(this.state.currentPage)
        if (this.state.currentPage === "Home") {
            return <Home />
        }
        else if (this.state.currentPage === "About") {
            return <About />
        }
        else if (this.state.currentPage === "Resume") {
            return <Resume />
        }
        else {
            return <Contact />
        }
    }
    render() {
        return (
            <div>
              <NavTabs
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
                />
              {this.renderAPage()}
            </div>
        );
    }
} 

export default PortfolioContainer;

