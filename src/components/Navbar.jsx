import React from 'react' 
import styled from "styled-components"

const Section = styled.div`
    display: flex; 
    justify-content: center;
`

const Container = styled.div`
    width: 1400px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Logo = styled.img`
    width: 75px;
    height: 75px;
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`
const ListItem = styled.li`
    color: white;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`
const Button = styled.button`
    width: 100px;
    padding: 10px; 
    background-color: #d14ea2;
    color: white; 
    border: none; 
    border-radius: 3px;
`


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/analytics.png"/>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>   
                <Icons>
                    <Icon src="./img/search.png"/>
                </Icons> 
            </Container>
        </Section>
    )

}

export default Navbar