import Router from 'next/router'
import React from 'react'

const PokemonCard = (props: any) => {

  let PokemonData = props.data
  // console.log(PokemonData)

  const detailPageNavigation = (pokemonName: string) => {
    Router.push(`/${pokemonName}`)
  }

  return (
    <div className="container mx-auto">
      <div className='flex flex-wrap gap-4'>
        {PokemonData && PokemonData.map((pokemon: any) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => detailPageNavigation(pokemon.name)}>
            <img className="w-64" src={pokemon.image} alt="pokemons" />
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{pokemon.number}</span>
              <div className="font-bold text-xl mb-2">{pokemon.name}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              {pokemon.types.map((type: string) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-rose-700/[.06] ...">{type}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard