import { gql } from "@apollo/client";


export const REGISTER = gql`
    mutation REGISTER($email: String!, $password: String!) {
        register( email: $email , password: $password)
    }
`;

export const LOGIN = gql`
    mutation LOGIN($email: String!, $password: String!) {
        login( email: $email , password: $password)
    }
`;


