import React from "react";
import { ButtonsBox, Container, HomeImg, Email, Header, LoginButton, ForgotPasswordButton,RegisterButton, Password } from "./LandingPage.styles";

import Logo from "../../images/logo_hd.png"
import Background from "../../images/BackgroundLanding.jpeg"


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
                    <LoginButton>INICIAR SESIÓN</LoginButton>
                    <ForgotPasswordButton>OLVIDE MI CONTRASEÑA</ForgotPasswordButton>
                    <RegisterButton>REGISTRATE</RegisterButton>
                </ButtonsBox>
                <HomeImg src ={Background} alt="background"/>
            </Container>
            
        </>
    )
};

export default LandingPage;