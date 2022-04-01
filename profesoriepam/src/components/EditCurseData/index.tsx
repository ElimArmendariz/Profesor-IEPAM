import React from "react";
import {
    ImgContainer, FirstContainer, SecondContainer, ThirdContainer, NombreCurso,
    CajaTexto, Texto, FormatedButton, ButtonContainer, Guardar,User
} from "./EditCurseData.styles";
import Header from "../HeaderUser";
import LogoIMG from '../../images/Logo.png';
import UserIMG from '../../images/User.svg';
import MinusIMG from '../../images/Minus.svg';
import PlusIMG from '../../images/Plus.svg';
import CrossIMG from '../../images/Cross.svg';

const EditCurseData = () => {
    return (
        <>
            <Header />
            <form action="#" name="formsCurso">
                <FirstContainer>
                    <ImgContainer>
                        <a href="#"><User src={UserIMG} /></a>
                    </ImgContainer>

                    <NombreCurso type="text" placeholder="Nombre del curso" name="nombrecurso" id="nombrecurso" />

                    <ImgContainer>
                        <a href="#"><img src={CrossIMG} /></a>
                    </ImgContainer>
                </FirstContainer>

                <SecondContainer>
                    <CajaTexto name="descripcion" placeholder="Descripción" rows={8} cols={68} />
                </SecondContainer>
            </form>

            <Texto>Número de diapositivas</Texto>
            <ThirdContainer>
                <FormatedButton><img src={MinusIMG} /></FormatedButton>
                <Texto>1</Texto>
                <FormatedButton><img src={PlusIMG} /></FormatedButton>
            </ThirdContainer>

            <ButtonContainer>
                <Guardar type="submit">GUARDAR</Guardar>
            </ButtonContainer>
        </>
    )
}

export default EditCurseData;

