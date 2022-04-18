import React from "react";

import { Link } from "react-router-dom";
import { Wrapper, Image, Content } from "./Course.styles";
import Default from "../../images/Background.jpeg"


type Props = {
  courseID: Number
  name: string
  description :string
};

const Course = ({ courseID, name, description }: Props) => (
    <div>
        <Link to={`/unity/${courseID}`}>
            <Wrapper>
                <Image src={Default}/>
                <Content>
                    <h1>{name}</h1>
                    <br/>
                    <div>{description}</div>
                </Content>
            </Wrapper>
        </Link>
    </div>
)

export default Course;