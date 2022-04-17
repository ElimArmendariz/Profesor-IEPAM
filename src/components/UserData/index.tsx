import React from "react";
import { Candado, Cerrar, Container, Derecha, Encabezado, Equis, FormExperiencia, FormNivel, FormNombre, FormTelefono, Izquierda, User, } from "./UserData.styles";

const UserData = () => {
    return(
        <>

            <Container>

                <Encabezado>

                    <Izquierda>

                        <img src="https://edu.iepam.nl.gob.mx/static/irtheme/images/logo.06694bca1857.png" alt=""/>

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

                <Cerrar>
                    <Equis>

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Saint_Andrew%27s_cross.svg/1200px-Saint_Andrew%27s_cross.svg.png" alt=""/>

                    </Equis>

                </Cerrar>

                <FormNombre>

                    <input type="text" placeholder="Nombre"/>
                    <input type="email" placeholder="Correo electrónico"/>

                </FormNombre>

                <FormTelefono>

                    <input type="text" placeholder="Teléfono"/>
                    <input type="email" placeholder="Dirección"/>

                </FormTelefono>

                <FormNivel>

                    <input type="text" placeholder="Nivel Académico"/>
                    <input type="email" placeholder="Edad"/>

                </FormNivel>

                <FormExperiencia>

                    <textarea placeholder="Experiencia Laboral"/>
                </FormExperiencia>

                                        
            </Container>
            
            </>
            )
            };
            
export default UserData;