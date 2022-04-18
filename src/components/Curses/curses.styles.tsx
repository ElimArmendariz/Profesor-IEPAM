import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 10vh;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Encabezado = styled.div`
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    max-width: 100vw;
    border-bottom: 3px solid rgb(51, 5, 126);

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

export const Titulo = styled.div`

    flex-basis:100%;
    text-align: center;
    padding-top: 30px;
    font-size: 25px;
    max-width: 100vw;
`;

export const ComponenteCursos = styled.div`

    display: flex;
    padding-top: 25px;
    flex-basis:100%;
`;

export const PrimerCurso = styled.div`
{
    flex-basis: 33%;
    text-align: center;
    border: 2px solid black;
}
`;

export const SegundoCurso = styled.div`

    flex-basis: 33%;
    text-align: center;
    border: 2px solid black;

`;

export const TercerCurso = styled.div`

    flex-basis: 33%;
    text-align: center;
    border: 2px solid black;

`;

export const FotoCurso = styled.div`

    flex-basis:100%;

;`

export const TextoPrimerCurso = styled.p`

    font-size: 25px;
    padding: 10px;
;`

export const TextoSegundoCurso = styled.p`

    font-size: 25px;
    padding: 10px;
;`

export const TextoTercerCurso = styled.p`

    font-size: 25px;
    padding: 10px;
;`

export const ColorFondoCapacitacion = styled.div`

    background-color: rgb(148, 84, 148);
    height: 56vh;

;`

export const TituloCurso = styled.div`

    font-size: 20px;
    padding-top: 5px;

;`