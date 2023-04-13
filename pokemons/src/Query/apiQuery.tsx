
import { gql } from '@apollo/client';

// fetch All Pokemons
export const GET_POKEMONS = gql`
    query pokemons($first: Int!){
    pokemons(first: $first) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const FETCH_POKEMON = gql`
    query pokemon($name: String){
    pokemon(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;
export const FETCH_EVALUTION = gql`
query pokemon($name: String){
  pokemon(name: $name ){
    id
    name
    evolutions{
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      
      maxHP
      image
    }
  }
}
`;

