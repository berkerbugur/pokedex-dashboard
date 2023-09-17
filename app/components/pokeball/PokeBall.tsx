'use client'

import Image, {StaticImageData} from "next/image";
import {useEffect, useState} from "react";
import {
    PokeballCollection
} from "@/app/constant/image";
import {themeUrl} from "@/app/constant/url";

export const PokeBall = () => {
    const randomize = (): StaticImageData => {
        const randomFactor = Math.floor((Math.random() * 10));
        return PokeballCollection[randomFactor]
    }
    const getPokeball = (): StaticImageData => {
        return randomize()
    }

    const [pokeball, setPokeball] = useState(PokeballCollection[0])

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