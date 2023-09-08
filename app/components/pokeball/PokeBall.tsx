'use client'

import Image, {StaticImageData} from "next/image";
import {useEffect, useState} from "react";
import {
    PokeBall1,
    PokeBall2,
    PokeBall3,
    PokeBall4,
    PokeBall5,
    PokeBall6,
    PokeBall7,
    PokeBall8,
    PokeBall9,
    PokeBall10
} from "@/app/constants/images";
import {themeUrl} from "@/app/constants/constants";

const pokeballCollection: StaticImageData[] = [
    PokeBall1,
    PokeBall2,
    PokeBall3,
    PokeBall4,
    PokeBall5,
    PokeBall6,
    PokeBall7,
    PokeBall8,
    PokeBall9,
    PokeBall10
];

export const PokeBall = () => {
    const randomize = (): StaticImageData => {
        const randomFactor = Math.floor((Math.random() * 10));
        return pokeballCollection[randomFactor]
    }
    const getPokeball = (): StaticImageData => {
        return randomize()
    }

    const [pokeball, setPokeball] = useState(PokeBall1)

    useEffect(() => {
        setPokeball(getPokeball())
    }, [])

    return (
        <>
            <a className='m-2 cursor-pointer' target="_blank" rel="noopener noreferrer" href={themeUrl}>
                <Image src={pokeball} alt='PokeBall' width='50' height='50'/>
            </a>
        </>
    );
};