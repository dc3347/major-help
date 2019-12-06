import React from "react";
import styled from "styled-components";

const WrapperSemBox = styled.div`
  display: flex;
  flex-direction: row
`;

const CourseBubble = styled.div`
  width: 95%px;
  height: 20%px;
  background-color: #9bddff;
  border-radius: 20px;
`;

const CourseTitle = styled.div`
  font-size: 15px;
  color: Black;
  text-align: center
  margin-top: 2px;
  margin-bottom: 2px;
`;

const SemesterTitle = styled.div`
  font-size: 15px;
  color: Black;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SemesterBox = styled.div`
  width: 25%;
  height: 40%;
  background-color: #ffffff;
  border-color: Black;
`;

const CalBox = styled.div`
  width: 450;
  height: 250;
  background-color: #d3d3d3;
`;

class Table extends React.Component {
    render() {
      //var courseobj = new CourseTitle(this.props.coursetitle);
      //var options = { month: "short", day: "numeric" };
      //var displayDate = dateobj.toLocaleDateString("en-US", options);
  
      return (
        <CalBox>
          <WrapperSemBox>
            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>

            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>

            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>

            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>
          </WrapperSemBox>
          
          <WrapperSemBox>
            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>

            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>

            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>

            <SemesterBox> 
              <CourseBubble>
                <CourseTitle>1004: Intro Java</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>3137: AP</CourseTitle>
              </CourseBubble>
            </SemesterBox>
          </WrapperSemBox>
        </CalBox>
      );

    }
  }
  export default Table;