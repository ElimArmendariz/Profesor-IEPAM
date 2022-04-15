import React from "react";
import { useState } from "react";
import { ButtonsBox, Container, HomeImg, Email, Header, LoginButton, ForgotPasswordButton,RegisterButton, Password } from "./LandingPage.styles";
import { useNavigate } from 'react-router-dom';


import Logo from "../../images/FullLogo.png"
import Background from "../../images/Background.jpeg"
import { REGISTER, LOGIN } from "../../hooks/useSessionHooks";
import { useMutation } from "@apollo/client";

import { Link } from "react-router-dom";


const LandingPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register] = useMutation(REGISTER);
    const [login] = useMutation(LOGIN);
    var obj :any;
    const navigate = useNavigate();
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name  = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    return(  
        <>
            <Container>
                <Header>
                    <img src={Logo} alt="IEPAM LOGO"/>
                </Header>

                    <Email>
                        <input type="text"
                            value={email}
                            name='email'
                            onChange={handleInput} 
                            placeholder="Correo electronico"/>
                    </Email>

                    <Password>
                        <input type="password"
                            value={password}
                            name='password'
                            onChange={handleInput} 
                            placeholder="Contraseña"/>
                    </Password>

                    <ButtonsBox>
                        <form
                            onSubmit={e => {
                            e.preventDefault();
                            login({ variables: { email: email, password: password } }).then(data => obj = data).then( () =>{
                            console.log(obj.data.login);
                            if(obj.data.login === "Champion :D"){
                                navigate('/unity');
                            }});
                        }}>
                            <LoginButton type="submit">INICIAR SESIÓN</LoginButton>
                        </form>
                        <Link to="forgotpassword">
                            <ForgotPasswordButton>OLVIDE MI CONTRASEÑA</ForgotPasswordButton>
                        </Link>
                        <form
                            onSubmit={e => {
                            e.preventDefault();
                            register({ variables: { email: email, password: password } }).then(data => obj = data).then( () =>{
                            console.log(obj.data.register);
                            if(obj.data.register === "Champion :D"){
                                navigate('/unity');
                            }});
                        }}>
                            <RegisterButton type="submit">REGISTRATE</RegisterButton>
                        </form>
                    </ButtonsBox>
                <HomeImg src ={Background} alt="background"/>
            </Container>
        </>
    )
};

export default LandingPage;