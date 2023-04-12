import PokemonDetailCard from '@/components/pokemonDetailCard'
import PokemonEvalution from '@/components/pokemonEvalution'
import { FETCH_POKEMON } from '@/Query/apiQuery'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const PokemonDetailPage = () => {

  const router = useRouter()
  const { slug } = router.query

  const [showEvalution, setShowEvalution] = useState(false)

  const { loading, error, data } = useQuery(FETCH_POKEMON, { variables: { name: slug } });
  let pokemonData = data ? data.pokemon : []

  return (
    <div>{slug}
      <PokemonDetailCard data={pokemonData} />

      {showEvalution ?
        <PokemonEvalution />
        :
        <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
          <button className="bg-purple-900 text-white hover:bg-purple-400 font-bold py-2 px-4 mt-3 rounded items-center"
            onClick={() => setShowEvalution(true)}
          >View Evalutions</button>
        </div>

      }
    </div>

  )
}

export default PokemonDetailPage