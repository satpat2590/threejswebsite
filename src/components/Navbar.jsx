import React from 'react' 
import styled from "styled-components"

const Section = styled.div`
    display: flex; 
`

const Signature = styled.h2`
    color: white;
    margin-left: 2rem;
    margin-top: 2rem;
`

const Navbar = () => {
    return (
        <Section>
            <a href='/' target="_blank" rel="noopener noreferrer">
                <Signature>Hello</Signature>
            </a>
        </Section>
    )

}

export default Navbar