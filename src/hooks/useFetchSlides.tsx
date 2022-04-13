import { gql, useQuery } from "@apollo/client";

export const useFetchSlides = () => {
    const GET_SLIDES = gql`
      query slides {
        slides {
          id
          description
        }
      }
    `;
    const { loading, error, data } = useQuery(GET_SLIDES);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (data) return data;
};

