import React from "react";
import styled from "styled-components";

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row
  margin-right: 10px;
  margin-left: 10px;
`;

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseBubble = styled.div`
  fixed-width: 100%;
  fixed-height: 100%;
  background-color: #9EDEF7;
  border-radius: 20px;
  margin-right: 6px;
  margin-left: 6px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

const CourseTitle = styled.div`
  font-size: 20px;
  font-family: Helvetica Neue;
  font-style: bold;
  color: #707070;
  text-align: center
  margin-top: 2px;
  margin-bottom: 2px;
`;

const SemesterTitle = styled.div`
  font-family: Helvetica Neue;
  font-style: condensed-bold;
  font-size: 20px;
  width: 100%;
  height: 100%;
  color: #707070;
  text-align: center
  margin-top: 20px;
`;

const Line = styled.div`
  border-left: 1px solid Gray;
  height: 30px;
  margin-top: 20px;
  margin-right: 1px;
  bottom: 0;
`;

const SemesterBox = styled.div`
  width: 25%;
  fixed-height: 120%;
  background-color: #ffffff;
  border-color: Gray;
  outline: 1px solid Gray;
  margin-bottom: 6px;
`;

const CalBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
`;

class Table extends React.Component {
    render() {
      //var courseobj = new CourseTitle(this.props.coursetitle);
      //var options = { month: "short", day: "numeric" };
      //var displayDate = dateobj.toLocaleDateString("en-US", options);
  
      return (
        <CalBox>
          <WrapperRow>
            <SemesterTitle>1st Fall</SemesterTitle> 
            <Line></Line>
            <SemesterTitle>1st Spring</SemesterTitle>
            <Line></Line>
            <SemesterTitle>2nd Fall </SemesterTitle>
            <Line></Line>
            <SemesterTitle>2nd Spring </SemesterTitle>
          </WrapperRow>
          <WrapperRow>
          <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>
 
            <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>
            
            <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>

            <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>
            </WrapperRow>
          
            <WrapperRow>
              <SemesterTitle>3rd Fall</SemesterTitle> 
              <Line></Line>
              <SemesterTitle>3rd Spring</SemesterTitle>
              <Line></Line>
              <SemesterTitle>4th Fall</SemesterTitle>
              <Line></Line>
              <SemesterTitle>4th Spring</SemesterTitle>
            </WrapperRow>

          <WrapperRow>
          <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>

            <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>

            <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>

            <SemesterBox> 
            <WrapperColumn>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>Hi</CourseTitle>
              </CourseBubble>
              </WrapperColumn>
            </SemesterBox>
            </WrapperRow>
        </CalBox>
      );

    }
  }
  export default Table;