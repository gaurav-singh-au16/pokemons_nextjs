import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '@/Query/apiQuery';
import PokemonCard from '@/components/pokemonCard';

export default function Home() {

  const { loading, error, data } = useQuery(GET_POKEMONS, { variables: { first: 10 } });
  let pokemonData = data? data.pokemons: []

  return (
    <>

      <h1>This is HomePage</h1>
      <PokemonCard
        data={pokemonData}
      />
    </>
  )
}
