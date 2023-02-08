import { gql } from "@apollo/client";

export const Create_User = gql`
  mutation createUser($userInput: UserInput){
    createUser(userInput: $userInput){
      name
      email
      password
    }
  }
  `;

export const Edit_User = gql`
  mutation editUser($id: String!,$userInput: UserInput){
    editUser(id: $id, userInput: $userInput){
      _id
      name
      email
      password
    }
  }
  `;

export const QUERY_User = gql`
query users {
  users {
    _id
    name
    email
    password
  }
}`;

export const get_User = gql`
query getUser($id: String!) {
  getUser(id: $id) {
    _id
    name
    email
    password
  }
}`;

// export const QUERY_User = gql`
// query users($id: Int) {
//   users(id: $id) {
//     id
//     name
//     age
//     shark
//   }
// }`;

// export const GET_GEN_3 = gql`
//   query getGen3 {
//     pokemon_v2_pokemonspecies(
//       order_by: { id: asc }
//       where: { pokemon_v2_generation: { name: { _eq: "generation-iii" } } }
//     ) {
//       name
//       id
//     }
//   }`;

// export const QUERY_GraphqlDynamodb = gql`
// query Employees {
//   Employees {
//     id
//     name
//     type
//     description
//   }
// }`;

// export const QUERY_AddEmpGraphqlDynamodb = gql`
//   mutation addEmployee(
//     $id: ID!
//     $name: String
//     $type: String
//     $description: String
//   ) {
//     addEmployee(id: $id, name: $name, type: $type, description: $description) {
//       id
//       name
//       type
//       description
//     }
//   }
// `;

// export const QUERY_AddEmp_GraphqlDynamodb = gql`
//   mutation addEmployees($employee: EmployeeInput) {
//     addEmployees(employee: $employee) {
//       id
//       name
//       type
//       description
//     }
//   }
// `;

// export const QUERY_UpdateEmp_GraphqlDynamodb = gql`
//   mutation updateEmployees($employee: EmployeeInput) {
//     updateEmployees(employee: $employee) {
//       id
//       name
//       type
//       description
//     }
//   }
// `;

// export const QUERY_DeleteEmp_GraphqlDynamodb = gql`
//   mutation deleteEmployee($id: ID!) {
//     deleteEmployee(id: $id) {
//       id
//       name
//       type
//       description
//     }
//   }
// `;



