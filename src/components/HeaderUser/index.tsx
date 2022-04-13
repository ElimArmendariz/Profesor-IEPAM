import React from "react";
import { ImgContainer, Logo, User, HeaderWrapper } from "./HeaderUser.styles";
import LogoIMG from "../../images/Logo.png";
import UserIMG from "../../images/User.svg";
import { Link } from "react-router-dom";

const HeaderUser = () => {
    return (
        <>
            <HeaderWrapper>
                <Link to="/">
                    <Logo src={LogoIMG} />
                </Link>
                <ImgContainer>
                    <User src={UserIMG} />
                </ImgContainer>
                
            </HeaderWrapper>
        </>
    )
}

export default HeaderUser;