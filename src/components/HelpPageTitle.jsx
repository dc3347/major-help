import React, { Component } from "react";
import styled from "styled-components";
const BigWrapper = styled.div`
    background-color: white;
`;
const Container = styled.div`
    height: 150px;
    width: 100%;
    position: relative;
    top: 20px;
    left: 50px;
    font-size: 40px;
    display: inline;
    font-weight: bold;
    font-family: "Helvetica Neue";
    text-align: left;
`;

const MajorTitle = styled.div`
    height: 150px;
    width: 100%;
    position: relative;
    top: 70px;
    left: 650px;
    font-size: 50px;
    display: inline;
    font-weight: bold;
    font-family: "HelveticaNeue-CondensedBold";
    color: #707070;
`;

const Wrapper1 = styled.div`
    color: #9EDEF7;
    display: inline;
    font-style: italic;
`;

const Wrapper2 = styled.div`
    color: #707070;
    display: inline;
    font-style: italic;
`;
class HelpPageTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BigWrapper>
        <Container>
        <Wrapper1> MAJOR</Wrapper1> <Wrapper2>HELP</Wrapper2>
        <MajorTitle>Computer Science</MajorTitle>
        </Container></BigWrapper>
    );
  }
}

HelpPageTitle.label = "HelpPageTitle";
export default HelpPageTitle;