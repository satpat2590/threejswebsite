import React from 'react' 
import styled from "styled-components"

const data = [
   {title: "Blogs", img: "./img/blogs.png"},
   {title: "Poetry", img: "./img/poetry.png"},
   {title: "Projects", img: "./img/projects.png"},
   {title: "About", img: "./img/about.png"}
]

const Container = styled.div`
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
    justify-content: center;
`

const Left = styled.div`
    flex: 1;
    display: flex; 
    justify-content: center;
    align-items: center;
`

// const Right = styled.div`
//     flex: 1;
//     position: relative;
// `

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;

`

const ListItem = styled.li`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

`

const Topic = styled.h1`
    font-size: 100px;
    font-weight: bold; 
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 2px black;
    position: relative;
    margin: 1.5rem 0rem 1.5rem 5rem;
    width: 100%;
    text-align: left;
    //font-family: 'Andale Mono';
    font-family: 'Hueflo Text';

    ::after {
        content: "${(props)=>props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: darkgreen;
        overflow: hidden;
        white-space: nowrap;
        width: 0px;
    }

    &:hover {
        ::after {
            width: 100%;
            color: transparent;
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to{
                    color: darkgreen;
                    width: 100%;
                }
            }
        }
    }
`

const Icon = styled.img`
    width: 130px;
    height: 130px;
    margin: 1.3rem 2rem;

`

import { Link as RouterLink } from 'react-router-dom';

//...

const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
`;

//...

const Works = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <List>  
                        {data.map(d=>(
                            <ListItem key={d.title}>
                                <Link to={`/${d.title.toLowerCase()}`}>
                                    <Topic text={d.title}>{d.title}</Topic>
                                </Link>
                                <Icon src={d.img}></Icon>
                            </ListItem>
                        ))}
                    </List>
                </Left>
            </Container>
        </Section>
    )
}

export default Works
