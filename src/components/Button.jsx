import React from 'react'
import styled from 'styled-components'

const StBtn = styled.button`
border-radius: 10px;
margin: 10px;
width: ${props => props.wd};
height: ${props => props.hg};
border: ${props => props.bor};
background-color: ${props => props.bgColor};
`

function Button(props) {

    return (
        <StBtn wd={props.wd} hg={props.hg} bor={props.bor} bgColor={props.bgColor} onClick={props.click}> {props.children}</StBtn >
    )
}

export default React.memo(Button)