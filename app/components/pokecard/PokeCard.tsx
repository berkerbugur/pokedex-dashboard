import {PokemonDetails} from "@/app/models/pokemonDetails";
import {useEffect, useState} from "react";
import {PokemonDetailsResponse} from "@/app/api/pokemon-api/models/response/pokemonDetails.response";
import {PokemonApi} from "@/app/api/pokemon-api/pokemon.api";
import {Ubuntu_Mono} from "next/font/google";
import {PokeLoading} from "@/app/components/pokeloading/PokeLoading";
import {pokeDexUrl} from "@/app/constant/url";

const ubuntu = Ubuntu_Mono({weight: '400', subsets: ['latin']})

interface PokeCardProps {
    name: string
}

export const PokeCard = ({name}: PokeCardProps) => {
    const pokemonApi = new PokemonApi()
    const [detail, setDetail] = useState<PokemonDetails>()

    useEffect(() => {
        pokemonApi.getPokemonDetails(name)
            .then((d: PokemonDetailsResponse) => {
                if (!!d)
                    setDetail(PokemonDetails.buildFrom(d))
            }).catch()
    }, [name]);

    return (
        <a className='pokecard'
           href={pokeDexUrl + detail?.name.toLowerCase()}
           target='_blank'
           rel="noopener noreferrer">
            {!!detail ?
                <div className={`${ubuntu.className} pokecard-container`}>
                    <div className='p-2 mt-[20px] sm:m-auto'>
                        <img
                            className="pokecard-charImg"
                            style={{backgroundColor: detail.types[0].color}}
                            src={detail.sprite}
                            alt="Pokemon Img"/>
                    </div>
                    <div
                        className="pokecard-info-container"
                        style={{borderColor: detail.types[0].color}}>
                        <div className='flex-row-center'>
                            <h5
                                className="pokecard-info-name">
                                {detail.name}
                            </h5>
                            <p className='pokecard-info-id'
                               style={{backgroundColor: detail.types[0].color}}>#{detail.id}</p>
                        </div>
                        <div className='flex-row-between mx-auto my-2'>
                            {detail.types.map((key, idx) => (
                                <p key={idx}
                                   className={`${detail.types.length > 1 ? 'm-1' : 'm-0'} pokecard-info-type`}
                                   style={{backgroundColor: key.color}}>{key.name}</p>
                            ))}
                        </div>
                        <div className="flex-between mx-auto text-neutral-200">
                            <div className='my-auto mr-2'>
                                <p>Height</p>
                                <p className='text-sm-center'>{detail.height}m</p>
                            </div>
                            <p className='border-l-[2px]' style={{borderColor: detail.types[0].color}}></p>
                            <div className='my-auto ml-2'>
                                <p>Weight</p>
                                <p className='text-sm-center'>{detail.weight}kg</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <PokeLoading/>
            }
        </a>
    );
};