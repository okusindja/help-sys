import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query MyQuery {
    cursos {
      nome
      id
    }
  }
`;
