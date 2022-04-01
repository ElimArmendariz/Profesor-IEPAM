import React from "react";
import { Container, Texto, Cross } from "./ForgotPassword.styles";
import CrossIMG  from "../../images/Cross.svg";
import Header from "../Header-Password";

const ForgotPassword = () => {

    return(        
        <>
            <Header/>
            <Container>
                <a href="#"><Cross src={CrossIMG} alt="Cross SVG"/></a>
            </Container>
            <Texto>
                Se ha reenviado un enlace a tu correo para que reinicies tu contraseña
            </Texto>
        </>
    );
};

export default ForgotPassword;

