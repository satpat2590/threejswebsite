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
    height: 100vh;
    align-item: center;
    text-align: center;
    width: 1400px;
    display: flex; 
    justify-content: space-between;
`

const Title = styled.h1`
    color: white;
`

const WhatWeDo = styled.div`
    display: flex;
    flex-direction: row;
`

const Line = styled.div`
    width: 100px;
`

const Subtitle = styled.div`
    color: red;
`

const Right = styled.div`
    height: 100vh;
    align-item: center;
    text-align: center;
    width: 1400px;
    display: flex; 
    justify-content: space-between;
`


const Section = styled.div`
    height: 100vh; 
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Nuts. Balls. Sacks.</Title>
                    <WhatWeDo>
                        <Line src=""/>
                        <Subtitle>What we Do</Subtitle>
                    </WhatWeDo>
                </Left>
                <Right></Right>
            </Container>
        </Section>
    )
}

export default Hero