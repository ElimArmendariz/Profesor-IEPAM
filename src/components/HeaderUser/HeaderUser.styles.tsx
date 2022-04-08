import styled from "styled-components";

export const ImgContainer = styled.div `
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img `
    width: 175px;  
`; 

export const User = styled.img `
    width: 53px;
    height: 53px;
`;

export const HeaderWrapper = styled.header `
    max-height: 100px;
    display: flex;
    position: sticky;
    border-bottom: 2px solid var(--purple);
    justify-content: space-between;
`;