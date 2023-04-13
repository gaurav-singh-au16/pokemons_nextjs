import PokemonDetailCard from '@/components/pokemonDetailCard'
import PokemonEvalution from '@/components/pokemonEvalution'
import { FETCH_EVALUTION, FETCH_POKEMON } from '@/Query/apiQuery'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const PokemonDetailPage = () => {

  const router = useRouter()
  const { slug } = router.query

  const [showEvalution, setShowEvalution] = useState(false)

  const { loading, error, data } = useQuery(FETCH_POKEMON, { variables: { name: slug } });
  let pokemonData = data ? data.pokemon : []

  const [QueryEvalution, { data: evalutionData }] = useLazyQuery(FETCH_EVALUTION, { variables: { name: slug } });
  let evalution = evalutionData ? evalutionData.pokemon : []
  // console.log(evalution)
  const showEvalutionFunction = () => {
    QueryEvalution()
    setShowEvalution(true)
  }

  return (
    <>
      {!loading ?
        <div>
          <h1 className='text-3xl text-center m-5'>Pokemons (DetailPage)</h1>
          <PokemonDetailCard data={pokemonData} />
          {showEvalution ?
            <PokemonEvalution data={evalution} pokemon={pokemonData} />
            :
            <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
              <button className="bg-purple-900 text-white hover:bg-purple-400 font-bold py-2 px-4 mt-3 rounded items-center"
                onClick={showEvalutionFunction}
              >View Evalutions</button>
            </div>
          }
        </div>
        :
        <h1 className='text-3xl text-center m-5'>Loading...</h1>}
    </>

  )
}

export default PokemonDetailPage