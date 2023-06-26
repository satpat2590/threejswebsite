import React from 'react' 
import styled from "styled-components"
import Navbar from './Navbar.jsx'

const Container = styled.div`
    display: flex; 
    justify-content: space-between;
    margin-bottom: 5rem;
    height: 300px;
`

const Left = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
`

const Right = styled.div`
    position: relative;
    text-align: right;
`

const Title = styled.h1`
    color: white;
    font-size: 45px;
    text-align: center;
`

const Landing = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;

`

const Line = styled.div`
    height: 5px;
    background-color: white;
`

const Subtitle = styled.div`
    color: beige;
    font-size: 20px;
`

const ComponentStore = styled.div`
    display: flex; 
    justify-content: space-between;
    margin: 0rem 8rem 0rem 8rem;

`

const Component = styled.div`
    color: white;
    font-size: 20px;
    display: flex; 
    flex-direction: column; 
`

const ComponentTitle = styled.p`
    color: white; 
    &:hover {
        text-decoration: underline;
    }
`

const Section = styled.div` 
    display: flex;
    flex-direction: column;
    overflow: -moz-scrollbars-horizontal;
    overflow-y: hidden;
`

const Img = styled.img`
    height: 200px; 
    width: 250px;
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    margin-right: 2rem; 
    animation: animate 2s infinite ease alternate; 

    @keyframes animate {
        100%{
            transform: translateY(20px);
        }
    };
`

const PlaceHolder = styled.div`
    height: 15vw;
`

const Hero = () => {
    return (
        <>
        <Section>
            <Container>
                <Left>
                    <Title>satyam (sat) patel</Title>
                    <Landing>
                        <Line></Line>
                        <Subtitle>software dev with a passion for history, language, and automata<br></br>
                        looking to grow my skills in all branches of science/tech and ultimately become a natural philosophist<br></br><br></br>
                        all thoughts posted on here, so treat this as a 'stream-of-consciousness' from the mind of yours truly :&#41;
                        </Subtitle>
                    </Landing>
                </Left>
                <Right>
                    <Img src="./img/treeofmemory.svg"/>
                </Right>
            </Container>

            <PlaceHolder></PlaceHolder>

            <ComponentStore>
                <Component>
                    <ComponentTitle>
                        poetry
                    </ComponentTitle>
                </Component>
                <Component>
                    <ComponentTitle>
                        rambling
                    </ComponentTitle>
                </Component>
                <Component>
                    <ComponentTitle>
                        pictures
                    </ComponentTitle>
                </Component>
                <Component>
                    <ComponentTitle>
                        projects
                    </ComponentTitle>
                </Component>
            </ComponentStore>
        </Section>
        </>
    )
}

export default Hero