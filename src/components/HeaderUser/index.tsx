import React from "react";
import { ImgContainer, Logo, User, HeaderWrapper } from "./HeaderUser.styles";
import LogoIMG from "../../images/Logo.png";
import UserIMG from "../../images/User.svg";

const HeaderUser = () => {
    return (
        <>
            <HeaderWrapper>
                <Logo src={LogoIMG} />

                <ImgContainer>
                    <User src={UserIMG} />
                </ImgContainer>
                
            </HeaderWrapper>
        </>
    )
}

export default HeaderUser;