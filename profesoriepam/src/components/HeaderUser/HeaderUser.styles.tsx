import styled from "styled-components";

export const ImgContainer = styled.div `
    width: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img `
    max-width: 100%;    
`;

export const User = styled.img `
    max-width: 30%; 
`;

export const HeaderWrapper = styled.header `
    max-height: 100px;
    display: flex;
    position: sticky;
    border-bottom: 2px solid var(--purple);
`;