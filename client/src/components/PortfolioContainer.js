import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";


class PortfolioContainer extends Component {
    state = {
        currentPage: "About"
    };
    
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderAPage = () => {
        console.log(this.state.currentPage)
        if (this.stage.currentPage === "About") {
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

