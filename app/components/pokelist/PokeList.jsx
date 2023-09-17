'use client'

import React, {useEffect, useState} from "react";
import {PokemonApi} from "app/api/pokemon-api/pokemon.api";
import {PokeCard} from "@/app/components/pokecard/PokeCard";

export const PokeList = () => {
    const pokemonApi = new PokemonApi()
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        pokemonApi.getPokemonList()
            .then(resp => {
                setPokemons(resp)
            }).catch()
    }, [])

    return (
        <div className='flex-row-center flex-wrap'>
            {
                pokemons.map(pokemon => (
                    <PokeCard key={pokemon.name} name={pokemon.name}/>
                ))
            }
        </div>
    );
};