import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_POKEMONS } from '@/Query/apiQuery';
import PokemonCard from '@/components/pokemonCard';

export default function Home() {

  let [fetchCount, setFetchCount] = useState(20)

  const { loading, error, data, refetch: RefetchPokemons } = useQuery(GET_POKEMONS, { variables: { first: fetchCount } });
  let pokemonData = data ? data.pokemons : []

  const loadMorePokemons = () => {
    console.log(fetchCount)
    setFetchCount(fetchCount => fetchCount + 20)
    // fetchCount = fetchCount+20
    RefetchPokemons()
  }

  return (
    <>

      <h1>This is HomePage</h1>
      <PokemonCard
        data={pokemonData}
      />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
        onClick={loadMorePokemons}
      >Load More Pokemons</button>
    </>
  )
}
