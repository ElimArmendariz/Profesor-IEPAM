import React from "react";
import { Container, Encabezado, Izquierda, Derecha, Candado, User, Titulo, ComponenteCursos, PrimerCurso, SegundoCurso, TercerCurso, FotoCurso, TextoPrimerCurso, TextoSegundoCurso, TextoTercerCurso, ColorFondoCapacitacion,TituloCurso  } from "./curses.styles";

import Logo from "../../images/FullLogo.png"
import Background from "../../images/Background.jpeg"


const Curses  = () => {

    return(  
       
       <>
            <Container>

                <Encabezado>

                    <Izquierda>

                        <img src={Logo} alt="IEPAM LOGO"/>

                    </Izquierda>



                    <Derecha>


                        <User>
                            <img src="https://images.vexels.com/media/users/3/153827/isolated/preview/050d23fc87215157ef54f2d21e131fa2-icono-de-trazo-de-color-de-candado.png" alt=""/>

                        </User>


                        <Candado>

                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png" alt=""/>
                        </Candado>

                    </Derecha>

                </Encabezado>


                <Titulo>
                    <h1>TUS CURSOS</h1>
                </Titulo>

                <ComponenteCursos>

                    <PrimerCurso>

                        <FotoCurso>
                        <img src="https://edu.iepam.nl.gob.mx/static/irtheme/images/logo.06694bca1857.png" alt=""/>
                        </FotoCurso>

                        <ColorFondoCapacitacion>

                            <TituloCurso>

                                <h1>CAPACITACION 1</h1>

                            </TituloCurso>

                            <TextoPrimerCurso>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quasi nobis sequi, minima non a eos error modi recusandae numquam provident exercitationem ipsum commodi quod perspiciatis nulla, autem obcaecati harum.</p>

                            </TextoPrimerCurso>

                        </ColorFondoCapacitacion>
                    </PrimerCurso>




                    <SegundoCurso>

                        <FotoCurso>
                        <img src="https://edu.iepam.nl.gob.mx/static/irtheme/images/logo.06694bca1857.png" alt=""/>
                        </FotoCurso>

                        <ColorFondoCapacitacion>

                            <TituloCurso>

                                <h1>CAPACITACION 2</h1>

                            </TituloCurso>

                            <TextoSegundoCurso>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quasi nobis sequi, minima non a eos error modi recusandae numquam provident exercitationem ipsum commodi quod perspiciatis nulla, autem obcaecati harum.
                                        </p>

                            </TextoSegundoCurso>

                        </ColorFondoCapacitacion>
                    </SegundoCurso>

                    <TercerCurso>

                        <FotoCurso>
                        <img src="https://edu.iepam.nl.gob.mx/static/irtheme/images/logo.06694bca1857.png" alt=""/>
                        </FotoCurso>
                            <ColorFondoCapacitacion>
                                <TituloCurso>

                                    <h1>CAPACITACION 3</h1>

                                </TituloCurso>

                                <TextoTercerCurso>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quasi nobis sequi, minima non a eos error modi recusandae numquam provident exercitationem ipsum commodi quod perspiciatis nulla, autem obcaecati harum.</p>
                                </TextoTercerCurso>

                            </ColorFondoCapacitacion>
                    </TercerCurso>


                </ComponenteCursos>

            </Container>
            
        </>
    )
};

export default Curses;