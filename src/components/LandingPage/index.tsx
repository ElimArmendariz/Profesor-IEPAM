import React from "react";
import { ButtonsBox, Container, HomeImg, Email, Header, LoginButton, ForgotPasswordButton,RegisterButton, Password } from "./LandingPage.styles";

import Logo from "../../images/FullLogo.png"
import Background from "../../images/Background.jpeg"

import { Link } from "react-router-dom";


const LandingPage = () => {

    return(  
        <>
            <Container>
                <Header>
                    <img src={Logo} alt="IEPAM LOGO"/>
                </Header>

                <Email>
                    <input type="text" placeholder="Correo electronico"/>
                </Email>

                <Password>
                    <input type="password" placeholder="Contraseña"/>
                </Password>

                <ButtonsBox>
                    <Link to="/unity">
                        <LoginButton>INICIAR SESIÓN</LoginButton>
                    </Link>
                    <Link to="forgotpassword">
                        <ForgotPasswordButton>OLVIDE MI CONTRASEÑA</ForgotPasswordButton>
                    </Link>
                    <RegisterButton>REGISTRATE</RegisterButton>
                </ButtonsBox>
                <HomeImg src ={Background} alt="background"/>
            </Container>
            
        </>
    )
};

export default LandingPage;