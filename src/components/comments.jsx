import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Name = styled.div`
    font-size: 0.8rem;
    text-transform: uppercase;
    padding-left: 1rem;
    padding-top:0.2rem;
`;

const Class = styled.div`
    font-size: 0.75rem;
    padding-left: 1rem;
    
`;

const Blurb = styled.div`
    font-size: 0.75rem;
    padding-left: 1rem;
    padding-bottom: 0.8rem;
   
`;

const Styling = styled.div`
    background-color: WhiteSmoke;
    width:50%;
    margin: 2rem;

`;

const Format = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width:75%;
`;

const Hashtag = styled.div`
    color: #ade0e9;
    display:flex;
    align-items: baseline;
    justify-content: flex-end;
`;

const Header = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

const PopularSection = styled.div`
   display:flex;
   justify-content: flex-end;
   align-items: center;
   flex-direction: column;
   
`;

const Popular = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-weight: 700;
   font-size: 1.5rem;
   padding-top:2rem;

`;

const Description = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-weight: 700;
`;

const Style = styled.div`
    background-color: #ade0e9;
    width:100%;
    margin: 1rem;
    
`;

const OverallFormat = styled.div`
    display:flex;
    align-items: flex-start;
    flex-direction:row;
    border-top: 1px solid grey;

`;



class CommentsSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            
           
            <OverallFormat>

            
                
                <Format>
  
                    <Styling>
                        <Name>Rachel Bakke</Name>
                        <Class>Barnard '22</Class>
                        <hr></hr>
                        <Blurb>I thought Econ 2341 with Professor Joe was really super extremely fantastic and gave me a basic understanding of how economics impacts the world. I did research over the summer working with Professor Gunderson. I would highly recommend become close with her because she is very helpful. I did not study abroad because I did not have time with filling requirements for my minor in art history.</Blurb>
                        <Hashtag>#research</Hashtag>

                        <Name>{this.props.name}</Name>
                        <Class>{this.props.class}</Class>
                        <Blurb>{this.props.blurb}</Blurb>
                    </Styling>

                    <Styling>
                        <Name>Rachel Bakke</Name>
                        <Class>Barnard '22</Class>
                        <hr></hr>
                        <Blurb>I thought Econ 2341 with Professor Joe was really super extremely fantastic and gave me a basic understanding of how economics impacts the world. I did research over the summer working with Professor Gunderson. I would highly recommend become close with her because she is very helpful. I did not study abroad because I did not have time with filling requirements for my minor in art history.</Blurb>
                        <Hashtag>#research</Hashtag>
                    </Styling>

                    <Styling>
                        <Name>Rachel Bakke</Name>
                        <Class>Barnard '22</Class>
                        <hr></hr>
                        <Blurb>I thought Econ 2341 with Professor Joe was really super extremely fantastic and gave me a basic understanding of how economics impacts the world. I did research over the summer working with Professor Gunderson. I would highly recommend become close with her because she is very helpful. I did not study abroad because I did not have time with filling requirements for my minor in art history.</Blurb>
                        <Hashtag>#research</Hashtag>
                    </Styling>



                </Format>

                <PopularSection>
                    <Popular>Popular:</Popular>
                    <Style>
                        <Header>Professor</Header>
                        <Description>Gunderson</Description>
                    </Style>
                    <Style>
                        <Header>Study Abroad:</Header>
                        <Description>Australia</Description>
                    </Style>
                    <Style>
                        <Header>Tip:</Header>
                        <Description>"Network!"</Description>
                    </Style>

                </PopularSection>



            </OverallFormat>

         


        );
    }
}

function App() {
    return (
        <div>
            <CommentsSection name="Danielle Cai" />;
            <CommentsSection class="SEAS '22" />;
            <CommentsSection blurb="I thought Econ 2341 with Professor Joe was really super extremely fantastic and gave me a basic understanding of how economics impacts the world. I did research over the summer working with Professor Gunderson. I would highly recommend become close with her because she is very helpful. I did not study abroad because I did not have time with filling requirements for my minor in art history." />;
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default CommentsSection;