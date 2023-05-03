import React from 'react' 
import styled from "styled-components"

const Section = styled.div`
    height: 100vh;
    color: white;
    scroll-snap-align: center;
`

const Who = () => {
    return (
        <Section>
        <h1>Who</h1>
        <p>Who page body content</p>
        </Section>
    )
}

export default Who