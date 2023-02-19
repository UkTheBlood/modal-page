import { useState } from "react";
import styled from "styled-components";

const options = [
    { value : 'React', label : 'React', id : 1},
    { value : 'JAVA', label : 'JAVA', id : 2},
    { value : 'Spring', label : 'Spring', id : 3},
    { value : 'React Native', label : 'React Native', id : 4}
];

const SelectComp = () => {

    const [openOne, setOpenOne] = useState(false);
    const [valOne, setValOne] = useState('React');

    const [openTwo, setOpenTwo] = useState(false);
    const [valTwo, setValTwo] = useState('React');

    const [isHover, setIsHover] = useState(false);

    const setFalseFunc = () => {
        if (isHover === false) {
            setOpenOne(false);
            setOpenTwo(false);
        }
    }

    return (
        <StOverDiv>
            {   
                openTwo === true || openOne === true
                ? <StClickDiv onClick = {() => {setFalseFunc()}}></StClickDiv>
                : null
            }
            <StDiv>
                <StDropDownMenu>
                    <StSelect onClick = {() => setOpenOne(!openOne)} onMouseOver = {() => setIsHover(true)} onMouseOut = {() => setIsHover(false)}>{valOne}</StSelect>
                </StDropDownMenu>
                <StDropDownMenu>
                    <StSelect onClick = {() => setOpenTwo(!openTwo)} onMouseOver = {() => setIsHover(true)} onMouseOut = {() => setIsHover(false)}>{valTwo}</StSelect>
                    <StDivForTwo onMouseOver = {() => setIsHover(true)} onMouseOut = {() => setIsHover(false)}>
                        {
                            openTwo === true
                            ? options.map((v) => <StDropDown key = {v.id} onClick = {() => {setValTwo(v.value); setOpenTwo(false);}}>{v.label}</StDropDown>)
                            : null
                        }
                    </StDivForTwo>
                </StDropDownMenu>
            </StDiv>
            <StDivForOne onMouseOver = {() => setIsHover(true)} onMouseOut = {() => setIsHover(false)}>
                {
                    openOne === true
                    ? options.map((v) => <StDropDown key = {v.id} onClick = {() => {setValOne(v.value); setOpenOne(false);}}>{v.label}</StDropDown>)
                    : null
                }
            </StDivForOne>
        </StOverDiv>
    );
};

export default SelectComp;

const StClickDiv = styled.div`
    display : flex;
    position : fixed;
    z-index : 0;
    left : 0;
    top : 0;
    width : 100%;
    height : 100%;
    overflow : auto;
`

const StOverDiv = styled.div`
    width : 100%;
`

const StDiv = styled.div`
    border-radius : 0.5rem;
    border : 1px solid black;
    width : 100%;
    height : 128px;
    display : flex;
    flex-direction: row;
    overflow : hidden;
    gap : 4rem;
`

const StDropDownMenu = styled.div`
    display : flex;
    flex-direction: column;
`

const StSelect = styled.button`
    height : 2rem;
    min-height : 2rem;
    width : 256px;
    font-weight : 700;
    border : none;
    background-color : rgb(255,191,0);
    border-radius : 0.5rem;
`

const StDropDown = styled.div`
    display : absolute;
    font-size : 1rem;
    width : 100%;
    height : 1.5rem;
    margin-top : 1rem;
    padding : 0.5rem;
`

const StDivForOne = styled.div`
    width : 256px;
    outline: none;
    outline-offset : -1px;
    position : relative;
    top : -113px;
    background-color : rgb(245, 245, 245);
`

const StDivForTwo = styled.div`
    width : 256px;
    outline: none;
    outline-offset : -1px;
    position : relative;
    background-color : rgb(245, 245, 245);
`