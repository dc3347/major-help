import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 25px;
    width: 100%;
    position: relative;
    top: 460px;
    left: 150px;
    font-size: 27px;
    font-weight: 900;
    font-family: "HelveticaNeue-CondensedBold", "Helvetica Neue";
    color: #707070;
    text-align: left;
`;

const Wrapper = styled.div`
    background-color: white;
`;
const Line = styled.div`
    position: relative;
    top: 475px;
`;
const TinyContainer = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 150px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle = styled.div`
    margin-top: 500px;
    margin-left: 250px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;

const TinyContainer2 = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 450px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle2 = styled.div`
    margin-top: -155px;
    margin-left: 480px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;

const TinyContainer3 = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 750px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle3 = styled.div`
    margin-top: -155px;
    margin-left: 780px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;

const TinyContainer4 = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 1050px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle4 = styled.div`
    margin-top: -156px;
    margin-left: 1090px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;

const TinyContainer5 = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 150px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle5 = styled.div`
    margin-top: 50px;
    margin-left: 177px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;

const TinyContainer6 = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 450px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle6 = styled.div`
    margin-top: -155px;
    margin-left: 500px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;

const TinyContainer7 = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 750px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle7 = styled.div`
    margin-top: -155px;
    margin-left: 770px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;

const TinyContainer8 = styled.div`
    height: 135px;
    background-color: #F4F4F4;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 1050px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
    font-family: "Helvetica Neue";
`;
const ContainerTitle8 = styled.div`
    margin-top: -155px;
    margin-left: 1110px;
    font-size: 17px;
    font-family: "Helvetica Neue";
    color: #707070;
    font-weight: bold;
`;
class SpecialProgramBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Wrapper>
        <Container>Special Programs</Container>
        <Line> <hr /> </Line> 
        <ContainerTitle> Minor </ContainerTitle>
        <TinyContainer> <br></br> Seven classes needed: COMS W1004/07, COMS W3134/37, COMS W3157, COMS3203, COMS 3261, CSEE W3287, and APMA E2101/MATH UN2010/STAT GU4001.</TinyContainer>
        <ContainerTitle2> Foundations of CS Track </ContainerTitle2>
        <TinyContainer2> <br></br> Take this track if you're interested in algorithms and the theoretical aspects of Computer Science. Topics you might be studying include cryptography and optimization. </TinyContainer2>
        <ContainerTitle3> Software Systems Track </ContainerTitle3>
        <TinyContainer3> <br></br> Take this track if you're interested in software development and software systems technologies. Required classes are in programming languages, operating systems, and computer networks.  </TinyContainer3>
        <ContainerTitle4> Digital Systems Track </ContainerTitle4>
        <TinyContainer4> <br></br> Take this track if you're interested in both hardware and software. Classes you'll take include computer architecture, digital design, and embedded systems.  </TinyContainer4>
        <ContainerTitle5> Intelligent Systems Track </ContainerTitle5>
        <TinyContainer5> <br></br> Take this track if you're interested in machine learning, robotics, and, well, intelligent systems. Classes include AI, NLP, Machine Learning, and Computational Robotics. This is a particularly popular track. </TinyContainer5>
        <ContainerTitle6> Applications Track </ContainerTitle6>
        <TinyContainer6> <br></br> Take this track if you're interested in implementing interactive multimedia applications for the Internet and wireless networks. Classes include UI design and programming languages. </TinyContainer6>
        <ContainerTitle7> Visions and Graphics Track </ContainerTitle7>
        <TinyContainer7> <br></br> Take this track if you're interested in computer vision and graphics, robotics, and modeling. You'll take classes in, well, graphics and the likes of animation.</TinyContainer7>
        <ContainerTitle8> Advanced Track </ContainerTitle8>
        <TinyContainer8> <br></br> This is track is invite-only and meant for students who have already completed the CS core and the core for their track. It's an accelerated version of the other six tracks!</TinyContainer8>
        </Wrapper>
    );
  }
}

SpecialProgramBar.label = "SpecialProgramBar";
export default SpecialProgramBar;