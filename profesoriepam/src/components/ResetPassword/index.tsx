import React from "react";
import { Container, Cross, FormsContainer, ButtonContainer, Button,
 PasswordContainer, LogoPassword, Input} from "./ResetPassword.styles";
import CrossIMG  from "../../images/Cross.svg";
import PasswordIMG from "../../images/Password.svg";
import Header from "../Header";

const ResetPassword = () => {

    return(
        <>
            <Header/>
            <Container>
                <a href="#"><Cross src={CrossIMG} alt="Cross SVG"/></a>
            </Container>

            <FormsContainer>
                <form action="#">
                    <PasswordContainer>
                        <LogoPassword src={PasswordIMG}/>
                        <Input id="password" type="password" placeholder="Contraseña Nueva" name="password"/>
                    </PasswordContainer>

                    <PasswordContainer>
                        <LogoPassword src={PasswordIMG}/>
                        <Input id="confirmPassword" type="password" placeholder="Confirmar Contraseña Nueva" name="password"/>
                    </PasswordContainer>
                </form>
            </FormsContainer>

            <ButtonContainer>
                <Button>GUARDAR</Button>
            </ButtonContainer>
        </>
    )
}

export default ResetPassword;