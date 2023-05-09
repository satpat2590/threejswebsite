import React from 'react' 
import styled from "styled-components"
import Navbar from './Navbar.jsx'

const Container = styled.div`
    height: 100vh;
    align-item: center;
    text-align: center;
    width: 1400px;
    display: flex; 
    justify-content: space-between;
`

const Left = styled.div`
    flex: 2;
    display: flex; 
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`

const Right = styled.div`
    flex: 3;
    position: relative;
`

const Title = styled.h1`
    color: white;
    font-size: 55px;
`

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

`

const Line = styled.div`
    height: 5px;
`

const Subtitle = styled.div`
    color: beige;
    font-size: 30px;
`


const Section = styled.div`
    height: 100vh; 
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Img = styled.img`
    height: 800px; 
    width: 600px;
    object-fit: contain; 
    position: absolute; 
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    margin: auto; 
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
                    <Title>Satyam (Sat) Patel</Title>
                    <WhatWeDo>
                        <Line></Line>
                        <Subtitle>Developer. Thinker. Poet.</Subtitle>
                    </WhatWeDo>
                </Left>
                <Right>
                    <Img src="./img/compbuddy.png"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero