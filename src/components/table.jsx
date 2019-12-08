import React, {Component} from "react";
import styled from "styled-components";

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
`;

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapCourses = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;  

const CourseBubble = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9EDEF7;
  border-radius: 20px;
  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

const CourseTitle = styled.div`
  font-size: 15px;
  font-family: Helvetica Neue;
  font-weight: 900;
  color: #707070;
  text-align: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 10px;
  margin-left: 10px;
`;

const SemesterTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  font-family: Helvetica Neue, condensed;  
  font-style: bold;
  width: 100%;
  height: 100%;
  color: #707070;
  text-align: center;
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
  height: 120%;
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

class Table extends Component {
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
            <WrapCourses>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              </WrapCourses>
            </SemesterBox>
 
            <SemesterBox> 
            <WrapCourses>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              </WrapCourses>
            </SemesterBox>
            
            <SemesterBox> 
            <WrapCourses>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              </WrapCourses>
            </SemesterBox>

            <SemesterBox> 
            <WrapCourses>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              </WrapCourses>
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
            <WrapCourses>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              </WrapCourses>
            </SemesterBox>

            <SemesterBox> 
            <WrapCourses>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              </WrapCourses>
            </SemesterBox>

            <SemesterBox> 
            <WrapCourses>
              </WrapCourses>
            </SemesterBox>

            <SemesterBox> 
            <WrapCourses>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              <CourseBubble>
                <CourseTitle>ECON 1105 Principles of Economics</CourseTitle>
              </CourseBubble>
              </WrapCourses>
            </SemesterBox>
            </WrapperRow>
        </CalBox>
      );

    }
  }
  export default Table;