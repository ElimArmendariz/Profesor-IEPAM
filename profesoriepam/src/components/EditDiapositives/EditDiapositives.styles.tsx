import styled from "styled-components";

export const CrossDiv = styled.div `
    padding: 2vh 0;
    height: 4vh;
    display: flex;
    flex-direction: row-reverse;
`;

export const Cross = styled.img `
    max-height: 100%
`

export const FirstContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
`

export const Container = styled.div `
    display: flex;
    padding-top: 10vh;
    justify-content: center;
`;

export const RadioContainer = styled.div `
    display: flex;
    align-items: center;
`;

export const RadioButton = styled.input`
    border: 0px;
    width: 4vw;
    height: 4vh;
    
`;

export const URLinput = styled.input`
    border: 2px solid var(--purple);
    border-radius: 20px;
    width: 50vw;
    text-align: center;
    font-size: 1.7em;
    padding: 0 1vw;
    margin-top: 2vh; 

    ::placeholder,
    ::-webkit-input-placeholder {
        text-align: center;
    }

    &:focus{
        outline: none!important;
    }
`;

export const BlockContainer = styled.div`
    display: block;
`