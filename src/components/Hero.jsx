import React from 'react' 
import styled from "styled-components"
import Navbar from './Navbar.jsx'

const Container = styled.div`
    height: 100vh;
    display: flex; 
    justify-content: space-between;
`

const Left = styled.div`
    flex: 2;
    display: flex; 
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
    margin-left: 1rem;
`

const Right = styled.div`
    flex: 3;
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


const Section = styled.div`
    height: 100vh; 
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Img = styled.img`
    height: 200px; 
    width: 250px;
    //object-fit: contain; 
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    //margin: auto; 
    margin-right: 2rem; 
    animation: animate 2s infinite ease alternate; 

    @keyframes animate {
        100%{
            transform: translateY(20px);
        }
    };
`

const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>satyam (sat)</Title>
                    <Landing>
                        <Line></Line>
                        <Subtitle>software dev with a passion for history, language, and automata<br></br>
                        looking to grow my skills in all branches of science/tech and ultimately become a natural philosophist<br></br><br></br>
                        all projects and thoughts posted on here, so treat this as a 'stream-of-consciousness' from the mind of yours truly :&#41;
                        </Subtitle>
                    </Landing>
                </Left>
                <Right>
                    <Img src="./img/treeofmemory.svg"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero