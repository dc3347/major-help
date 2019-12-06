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
    font-family: Trebuchet MS, sans-serif;
    color: #595959;
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
    height: 120px;
    background-color: #ededed;
    opacity: 0.7;
    width: 250px;
    position: relative;
    top: 10px;
    margin-left: 150px;
    border-radius: 15px;
    text-align: center;
    font-size: 15px;
`;
const ContainerTitle = styled.div`
    margin-top: 500px;
    margin-left: 250px;
    font-size: 15px;
    color: #595959;
    font-weight: 800;
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
        <TinyContainer> <br></br>This is about a minor in CS. This is about a minor in CS. This is about a minor in CS. This is about a minor in CS. This is a minor in CS! </TinyContainer>
        </Wrapper>
    );
  }
}

SpecialProgramBar.label = "SpecialProgramBar";
export default SpecialProgramBar;