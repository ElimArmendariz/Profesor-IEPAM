import React, { useState } from "react";
import { CajaTexto, Guardar, Texto } from "../EditCurseData/EditCurseData.styles";
import { CrossDiv, Container, RadioContainer, FirstContainer, Cross, RadioButton,
    URLinput, BlockContainer, Pregunta, Respuesta, AnswersContainer, ArrowLeft, ArrowRight,ButtonContainer
} from "./EditDiapositives.styles";
import Header from "../HeaderUser";
import CrossIMG from "../../images/Cross.svg"
import ArrowLeftIMG from '../../images/ArrowLeft.png';
import ArrowRightIMG from '../../images/ArrowRigth.png';
import EditCurseData from "../EditCurseData";
import internal from "stream";

interface Props {
    sn: number
}

interface Slide{
    text: string;
    video: boolean;
    question: boolean;
    answer1: string; 
    answer2: string; 
    answer3: string; 
    answer4: string;
}

interface Array{
    slides: Slide[];
}

const EditDiapositives : React.FC<Props> = ({sn}) => {
    const [isTextoShown, setTextoShown] = useState(false);
    const [isVideoShown, setVideoShown] = useState(false);
    const [isPreguntaShown, setPreguntaShown] = useState(false);
    const [passScreen, setPassScreen] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [textoSlide, setTextoSlide] = useState("");

    const handleOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked;
        const name = e.currentTarget.id;

        if (value === true && name === "texto") {
            setTextoShown(true);
            setVideoShown(false);
            setPreguntaShown(false);
            setShowButton(true);
        }
        if (value === true && name === "video") {
            setTextoShown(false);
            setVideoShown(true);
            setPreguntaShown(false);
            setShowButton(true);
        }
        if (value == true && name === "pregunta") {
            setTextoShown(false);
            setVideoShown(false);
            setPreguntaShown(true);
            setShowButton(true);
        }
    }

    const addSlide = () => {

    }

    const saveInput = () => {

    }

    return (
        <>
            <Header />
            <CrossDiv>
                <Cross src={CrossIMG} />
            </CrossDiv>

            <FirstContainer>
                <RadioContainer>
                    <RadioButton type="radio" name="option" value="texto" id="texto" onChange={handleOptions} />
                    <label htmlFor="texto">Texto</label>
                </RadioContainer>

                <RadioContainer>
                    <RadioButton type="radio" name="option" value="video" id="video" onChange={handleOptions} />
                    <label htmlFor="video">Video</label>
                </RadioContainer>

                <RadioContainer>
                    <RadioButton type="radio" name="option" value="pregunta" id="pregunta" onChange={handleOptions} />
                    <label htmlFor="pregunta">Pregunta</label>
                </RadioContainer>
            </FirstContainer>

            <Container>
                <ArrowLeft src={ArrowLeftIMG} onClick={() => setPassScreen(false)} />
                <ArrowRight src={ArrowRightIMG} />
                {isTextoShown ? <FirstContainer><CajaTexto name="texto" placeholder="Ingresa aquí tu texto" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setTextoSlide(e.target.value) }} value={"text"}/></FirstContainer> : <></>}
                {isVideoShown ?
                    <>
                        <BlockContainer>
                            <Texto>Inserta la liga del video</Texto>
                            <FirstContainer>
                                <URLinput type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size={30} />
                            </FirstContainer>
                        </BlockContainer>
                    </> : <></>}
                {isPreguntaShown ?
                    <>
                        <FirstContainer>
                            <Pregunta type="text" placeholder="Escribe aquí la pregunta" name="insertPregunta" />
                        </FirstContainer>
                        <AnswersContainer>
                            <RadioContainer>
                                <RadioButton type="radio" name="option2" value="a" id="a" />
                                <Respuesta type="text" name="a" placeholder="Respuesta" />
                            </RadioContainer>

                            <RadioContainer>
                                <RadioButton type="radio" name="option2" value="b" id="b" />
                                <Respuesta type="text" name="b" placeholder="Respuesta" />
                            </RadioContainer>

                            <RadioContainer>
                                <RadioButton type="radio" name="option2" value="c" id="c" />
                                <Respuesta type="text" name="b" placeholder="Respuesta" />
                            </RadioContainer>

                            <RadioContainer>
                                <RadioButton type="radio" name="option2" value="d" id="d" />
                                <Respuesta type="text" name="b" placeholder="Respuesta" />
                            </RadioContainer>
                        </AnswersContainer>
                    </> : <></>}
            </Container>
            
            { showButton ?
                <ButtonContainer>
                    <Guardar type="submit">GUARDAR</Guardar>
                </ButtonContainer>
                : <></>}
            
        </>
    )
}

export default EditDiapositives;