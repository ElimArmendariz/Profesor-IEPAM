import { createHashHistory } from "history";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
            width: 100vw;
            height: 10vh;
            justify-content: space-around;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100vw;
`;


export const Encabezado = styled.div`

    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    border-bottom: 3px solid rgb(51, 5, 126);
    margin: auto;
`;



export const Izquierda = styled.div`

    flex-basis: 50%;

    img
    {
        max-height: 10vh;
        max-width: 50vw;
        width: 177px;
        height: 83px;
        padding-left: 50px;
    }
`;



export const Derecha = styled.div`

    display:flex;
    flex-basis: 20%;
    max-height: 10vh;
    justify-content: right;
    width: 100vw;

`;

export const Candado = styled.div`

    flex-basis: 50%;
    max-width: 50vw;
    max-height: 10vh;

    img
    {
        width: 62px;
        height: 62px;
    }
    
`;

export const User = styled.div`

    flex-basis: 50%;
    max-width: 50vw;
    max-height: 10vh;
    padding-left: 80px;

    img
    {
        width: 62px;
        height: 62px;
    }
`;


export const Cerrar = styled.div`

    flex-basis: 100%;
    text-align: right;
    padding-right: 200px;
    padding-top: 50px;

`;


export const FormNombre = styled.div`

    flex-basis:50%;
    padding-top: 10px;
    align-items: center;
    text-align: center;

    input
    {
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
    }

`;

export const FormTelefono = styled.div`

    padding-bottom: 15px;
    padding-top: 15px;
    flex-basis:100%;
    align-items: center;
    text-align: center;

    input
    {
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
    }
`;

export const FormNivel = styled.div`

    padding-bottom: 15px;
    padding-top: 15px;
    flex-basis: 50%;
    align-items: center;
    text-align: center;

    input
    {
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
    }

`;

/*
input:hover
{
    background-color: rgb(173, 124, 219);
}
*/

export const FormExperiencia = styled.div`

    padding-top: 15px;
    padding-bottom: 15px;
    flex-basis: 100%;
    align-items: center;
    text-align: center;

    textarea
    {
        width: 550px;
        height: 100px; 
        flex-basis:100%;
        border-radius: 24px;
        font-size: 25px;
        padding: 10px;
        text-align: center;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        padding-top: 7%;
        border-width: 2px;
    }
`;

/* 
textarea:hover
{
    background-color: rgb(173, 124, 219);
}
*/


export const Equis = styled.button`

    outline: 0px;
    margin: 0px;
    background-color: white;
    border: 0px;

    img
    {
        width: 20px;
        height: 20px;
    }

;`

/*
equis:hover
{
    cursor: pointer;
}
*/

