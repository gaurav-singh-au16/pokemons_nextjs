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
      {!loading ?
        <div>
          <h1 className='text-3xl text-center m-5'>Pokemons (HomePage)</h1>
          <PokemonCard
            data={pokemonData}
          />
          <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
            <button className='bg-purple-900 text-white hover:bg-purple-400 font-bold py-2 px-4 mt-3 rounded items-center'
              onClick={loadMorePokemons}
            >Load More Pokemons</button>

          </div>
        </div> :
        <h1 className='text-3xl text-center m-5'>Loading...</h1>}
    </>

  )
}
