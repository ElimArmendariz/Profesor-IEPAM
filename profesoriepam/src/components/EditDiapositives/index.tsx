import React, { useState } from "react";
import { CajaTexto, Texto } from "../EditCurseData/EditCurseData.styles";
import { CrossDiv, Container, RadioContainer, FirstContainer, Cross, RadioButton, URLinput, BlockContainer } from "./EditDiapositives.styles";
import Header from "../HeaderUser";
import CrossIMG from "../../images/Cross.svg"


const EditDiapositives = () => {
    const [isTextoShown, setTextoShown] = useState(false);
    const [isVideoShown, setVideoShown] = useState(false);
    const [isPreguntaShown, setPreguntaShown] = useState(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked;
        const name = e.currentTarget.id;

        if (value === true && name === "texto") {
            setTextoShown(true);
            setVideoShown(false);
            setPreguntaShown(false);
        }
        if (value === true && name === "video") {
            setTextoShown(false);
            setVideoShown(true);
            setPreguntaShown(false);
        }
        if (value == true && name === "pregunta") {
            setTextoShown(false);
            setVideoShown(false);
            setPreguntaShown(true);
        }
    }

    return (
        <>
            <Header />
            <CrossDiv>
                <Cross src={CrossIMG} />
            </CrossDiv>

            <FirstContainer>
                <RadioContainer>
                    <RadioButton type="radio" name="option" value="texto" id="texto" onChange={handleInput} />
                    <label htmlFor="texto">Texto</label>
                </RadioContainer>

                <RadioContainer>
                    <RadioButton type="radio" name="option" value="video" id="video" onChange={handleInput} />
                    <label htmlFor="video">Video</label>
                </RadioContainer>

                <RadioContainer>
                    <RadioButton type="radio" name="option" value="pregunta" id="pregunta" onChange={handleInput} />
                    <label htmlFor="pregunta">Pregunta</label>
                </RadioContainer>
            </FirstContainer>

            <Container>
                {isTextoShown ? <CajaTexto name="texto" placeholder="Ingresa aquí tu texto" rows={5} cols={61} /> : <></>}
                {isVideoShown ?
                    <>
                        <BlockContainer>
                            <Texto>Inserta la liga del video</Texto>
                            <URLinput type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size={30} />
                        </BlockContainer>
                    </> : <></>}

            </Container>

        </>
    )
}

export default EditDiapositives;