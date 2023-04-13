import React from 'react'

const PokemonDetailCard = (props: any) => {

    let pokemonData = props.data
    // console.log(pokemonData)
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex items-center justify-center mt-2">
            <img className="h-48 lg:h-auto lg:w-100 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={pokemonData.image} title="pokemon" />

            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-4xl">{pokemonData.name}</div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <div className="text-gray-800 text-base">Height :</div>
                    <p className="text-gray-900 text-base">{pokemonData.length != 0 ? pokemonData.height.maximum : ''}</p>
                </div>
                <div className='grid grid-cols-4 gap-4 mt-2'>
                    <div className="text-gray-800 text-base">Weight :</div>
                    <div className="text-gray-900 text-base">{pokemonData.length != 0 ? pokemonData.weight.maximum : ''}</div>
                </div>
                <div className='grid grid-cols-4 gap-4 mt-2'>

                    <div className="text-gray-800 text-base">Classification :</div>
                    <div className="text-gray-900 text-base">{pokemonData.length != 0 ? pokemonData.classification : ''}</div>
                </div>
                <div className="text-gray-700 text-base mt-2">Type</div>
                <div className="flex items-center">
                    {pokemonData.length != 0 && pokemonData.types.map((type: string, i:any) => (
                        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-rose-700/[.12] ...">{type}</span>

                    ))}
                </div>
                <div className="text-gray-700 text-base mt-2">Weaknesses</div>
                <div className="flex items-center">
                    {pokemonData.length != 0 && pokemonData.weaknesses.map((weakness: string, i:any) => (
                        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-rose-700/[.12] ...">{weakness}</span>

                    ))}
                </div>
                <div className="text-gray-700 text-base mt-2">Resistance</div>
                <div className="flex items-center">
                    {pokemonData.length != 0 && pokemonData.resistant.map((resistance: string, i:any) => (
                        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-rose-700/[.12] ...">{resistance}</span>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailCard