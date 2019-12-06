import React, { Component } from "react";
import styled from "styled-components";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, visibility: false, mobileSearch: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.toggleMobileSearch = this.toggleMobileSearch.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  toggleVisibility() {
    this.setState({ visibility: !this.state.visibility });
  }

  toggleMobileSearch() {
    this.setState({ mobileSearch: !this.state.mobileSearch });
  }


  render() {
    console.log(this.state.width);
    console.log(this.state.visibility);
    console.log(this.state.mobileSearch);
    return (
        <p>{this.state.width}</p>
    );
  }
}


export default HomePage;