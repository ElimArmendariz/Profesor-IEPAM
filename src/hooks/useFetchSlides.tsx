import { gql, useQuery } from "@apollo/client";

export const useFetchSlides = () => {
    const GET_SLIDES = gql`
      query slides {
        slides {
          id
          description
          order
          video
          question
          answer1
          answer2
          answer3
          answer4
          correct_ans


        }
      }
    `;
    const { loading, error, data } = useQuery(GET_SLIDES);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (data) return data;
};

