import Router from 'next/router'
import React from 'react'

const PokemonEvalution = (props: any) => {

    let evalutionData = props.data.evolutions
    let pokemon = props.pokemon
    console.log(evalutionData)
    const detailPageNavigation = (pokemonName: string) => {
        Router.push(`/${pokemonName}`)
    }
    return (
        <div className='container mx-auto px-4 mt-8 bg-gray-500 border-solid border-4 rounded-lg border-indigo-600'>
            <h1 className='text-3xl text-slate-50'>Evalutions</h1>
            <div className='flex flex-wrap justify-center' >
                <>
                    <div className='m-5 items-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' onClick={() => detailPageNavigation(pokemon.name)}>
                        <img src={pokemon.image} className='rounded-full border-8 border-indigo-500/100 h-40 w-40' />
                        <h1 className='text-gray-50 text-xl'>{pokemon.name} <span className='text-zinc-200 italic text-xl'>#{pokemon.number}</span></h1>
                        <div className="flex items-center mt-3">
                            {pokemon.types.map((type: string) => (
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 bg-rose-400">{type}</span>

                            ))}
                        </div>
                    </div>
                </>
                {evalutionData && evalutionData.map((data: any) => (
                    <>
                        <div className='m-5 items-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' onClick={() => detailPageNavigation(data.name)}>
                            <img src={data.image} className='rounded-full border-8 border-indigo-500/100 h-40 w-40' />
                            <h1 className='text-gray-50 text-xl'>{data.name} <span className='text-zinc-200 italic text-xl'>#{data.number}</span></h1>
                            <div className="flex items-center mt-3">
                                {data.types.map((type: string) => (
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 bg-rose-400">{type}</span>

                                ))}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default PokemonEvalution