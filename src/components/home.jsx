import React, { Component } from "react";
import styled from "styled-components";


const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const HamburgerMenu = styled.div`
    cursor: pointer;
    padding: 20px;
    padding-top: 60px;
`;

const MenuBar = styled.div`
  width: 35px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
  border-radius: 10px;
`;

const MainText = styled.div`
    font-family: Impact, fantasy;
    font-size: 64px;
    color: grey;
    padding: 50px;
    padding-bottom: 20px;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`;

const CenterColumnWrapper = styled.div`
    width: 800px;
    height: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const RightColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`;

const Title = styled.div`
    background-color: #62A8E5;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
`;

const SchoolDate = styled.div``;

const SectionWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Text = styled.div``;

const Image = styled.img`
    width: 200px;
    padding: 50px;
`;

const Link = styled.a`
    font-size: 2rem;
    text-decoration: none;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #62A8E5;
`;

const OpenHouseWrap = styled.div``;

const DepartmentTitle = styled.div``;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { NavBarVisible: false };
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  toggleNavBar() {
    this.setState({ NavBarVisible: !this.state.NavBarVisible });
  }

  render() {
    if(this.state.NavBarVisible) {
        return (
            <div>
                <NavBarWrapper>
                    <HamburgerMenu onClick = {this.toggleNavBar}>
                        <MenuBar></MenuBar>
                        <MenuBar></MenuBar>
                        <MenuBar></MenuBar>
                    </HamburgerMenu>
                    <MainText>MAJOR HELP</MainText>
                </NavBarWrapper>
                <hr></hr>
                <MainWrapper>
                    <LeftColumnWrapper>
                        <Link href = "/App">Home</Link>
                        <Link href = "/CourseMain">Courses</Link>
                        <Link href = "/CourseMain">Courses</Link>
                    </LeftColumnWrapper>
                    <CenterColumnWrapper>
                        <SectionWrap>
                            <div><Image src = "https://www.cnascientific.com/wp-content/uploads/2017/10/STEM-logo.png"></Image>
                            <Text></Text>
                            </div>
                            <div><Image src = "http://humanitiesinstitute.buffalo.edu/wp-content/uploads/sites/4/2017/11/H2R-logo-tan-web.png"></Image>
                            <Text></Text>
                            </div>
                            <div>
                            <Image src = "https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/hires_1.jpg?itok=KcjhaVdl"></Image>
                            <Text></Text>
                            </div>
                            <div>
                            <Image src = "http://www.newjerseystage.com/events2017/Art-Design.jpg"></Image>
                            <Text></Text>
                            </div>
                        </SectionWrap>
                        <SectionWrap>
                            <Image></Image>
                            <Text></Text>
                        </SectionWrap>
                        <SectionWrap>
                            <Image></Image>
                            <Text></Text>
                        </SectionWrap>
                        <SectionWrap>
                            <Image></Image>
                            <Text></Text>
                        </SectionWrap>
                    </CenterColumnWrapper>
                    <RightColumnWrapper>
                        <OpenHouseWrap>
                            <DepartmentTitle>APMA</DepartmentTitle>
                            11/14/14
                            633 Mudd
                            <DepartmentTitle>CS</DepartmentTitle>
                            11/14/14
                            633 Mudd
                            <DepartmentTitle>MECHE</DepartmentTitle>
                            11/14/14
                            633 Mudd
                        </OpenHouseWrap>
                    </RightColumnWrapper>
                </MainWrapper>
            </div>
        );
    } else {
        return (
            <div>
                <NavBarWrapper>
                    <HamburgerMenu onClick = {this.toggleNavBar}>
                        <MenuBar></MenuBar>
                        <MenuBar></MenuBar>
                        <MenuBar></MenuBar>
                    </HamburgerMenu>
                    <MainText>MAJOR HELP</MainText>
                </NavBarWrapper>
                <hr></hr>
                <MainWrapper>
                    <LeftColumnWrapper>
                        <Title>Declaration Dates</Title>
                        <SchoolDate>Barnard 1/28/19</SchoolDate>
                        <SchoolDate>CC 2/02/19</SchoolDate>
                        <SchoolDate>GS 2/10/19</SchoolDate>
                        <SchoolDate>SEAS 10/30/19</SchoolDate>
                    </LeftColumnWrapper>
                    <CenterColumnWrapper>
                        <SectionWrap>
                            <div><Image src = "https://www.cnascientific.com/wp-content/uploads/2017/10/STEM-logo.png"></Image>
                            <Text></Text>
                            </div>
                            <div><Image src = "http://humanitiesinstitute.buffalo.edu/wp-content/uploads/sites/4/2017/11/H2R-logo-tan-web.png"></Image>
                            <Text></Text>
                            </div>
                            <div>
                            <Image src = "https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/hires_1.jpg?itok=KcjhaVdl"></Image>
                            <Text></Text>
                            </div>
                            <div>
                            <Image src = "http://www.newjerseystage.com/events2017/Art-Design.jpg"></Image>
                            <Text></Text>
                            </div>
                        </SectionWrap>
                        <SectionWrap>
                            <Image></Image>
                            <Text></Text>
                        </SectionWrap>
                        <SectionWrap>
                            <Image></Image>
                            <Text></Text>
                        </SectionWrap>
                        <SectionWrap>
                            <Image></Image>
                            <Text></Text>
                        </SectionWrap>
                    </CenterColumnWrapper>
                    <RightColumnWrapper>
                        <OpenHouseWrap>
                            <DepartmentTitle>APMA</DepartmentTitle>
                            11/14/14
                            633 Mudd
                            <DepartmentTitle>CS</DepartmentTitle>
                            11/14/14
                            633 Mudd
                            <DepartmentTitle>MECHE</DepartmentTitle>
                            11/14/14
                            633 Mudd
                        </OpenHouseWrap>
                    </RightColumnWrapper>
                </MainWrapper>
            </div>
        );
    }
  }
}


export default HomePage;