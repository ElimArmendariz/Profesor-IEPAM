import React from "react";

import { HeaderContainer, Logo, HeaderWrapper } from "./Header.styles";

import LogoIMG from "../../images/Logo.png"

const Header = () => {
    return(        
        <HeaderWrapper>
            <HeaderContainer>
                <Logo src={LogoIMG}/>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;

