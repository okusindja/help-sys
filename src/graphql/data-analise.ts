import { gql } from '@apollo/client';

export const CREATE_DATA_ANALISE = gql`
  mutation CreateDataAnalise(
    $apoioEmocional: String!
    $dificuldadesFinanceiras: String!
    $distancia: String!
    $empregado: String!
    $estresse: String!
    $pressao: String!
    $apoioFinanceiro: String!
    $email: String!
  ) {
    createDataAnalise(
      data: {
        apoioEmocional: $apoioEmocional
        dificuldadesFinanceiras: $dificuldadesFinanceiras
        distancia: $distancia
        empregado: $empregado
        estresse: $estresse
        pressao: $pressao
        apoioFinanceiro: $apoioFinanceiro
        email: $email
      }
    ) {
      id
    }
  }
`;
