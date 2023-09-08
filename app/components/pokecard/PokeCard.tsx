import {PokemonDetails} from "@/app/models/pokemonDetails";
import {useEffect, useState} from "react";
import {PokemonDetailsResponse} from "@/app/api/pokemon-api/models/response/pokemonDetails.response";
import {PokemonApi} from "@/app/api/pokemon-api/pokemon.api";
import {Fira_Mono, Ubuntu_Mono} from "next/font/google";
import {PokeLoading} from "@/app/components/pokeloading/PokeLoading";
import Image from "next/image";
import {Height, Weight} from "@/app/constants/images";
import {pokeDexUrl} from "@/app/constants/constants";

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
        <a className='m-[15px] justify-between cursor-pointer' href={pokeDexUrl + detail?.name.toLowerCase()} target='_blank' rel="noopener noreferrer">
            {!!detail ?
                <div
                    className={`${ubuntu.className} bg-blue-600 border-double border-x-[2px] border-b-[2px] border-gray-600 min-w-[200px] sm:min-w-[300px] min-h-[300px] sm:min-h-[200px] basis-full mx-auto flex flex-col rounded-lg sm:flex-row transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:drop-shadow-xl duration-100`}>
                    <div className='p-2 mt-[20px] sm:m-auto'>
                        <img
                            className="object-cover border-x-[2px] border-yellow-300 rounded-full w-fit md:h-auto mx-auto"
                            style={{backgroundColor: detail.types[0].color}}
                            src={detail.sprite}
                            alt="Pokemon Img"/>
                    </div>
                    <div className="flex flex-col justify-start p-2 m-auto border-t-2 sm:border-l-2 sm:border-t-0 sm:ml-0 sm:pl-4" style={{borderColor: detail.types[0].color}}>
                        <div className='flex flex-row justify-center'>
                            <h5
                                className="my-auto text-xl text-neutral-800 dark:text-neutral-50 font-extrabold">
                                {detail.name}
                            </h5>
                            <p className='text-xs ml-2 bg-[#f6af3b] my-auto p-0.5 rounded-full min-w-[20px] min-h-[20px] text-center' style={{backgroundColor: detail.types[0].color}}>#{detail.id}</p>
                        </div>
                        <div className='flex flex-row justify-between mx-auto my-2'>
                            {detail.types.map((key, idx) => (
                                <p key={idx}
                                   className={`${detail.types.length > 1 ? 'm-1' : 'm-0'} p-1 rounded-full font-bold text-sm border-[1px] border-gray-600`}
                                   style={{backgroundColor: key.color}}>{key.name}</p>
                            ))}
                        </div>
                        <div className="flex justify-between text-neutral-500 dark:text-neutral-300 mx-auto">
                            <div className='my-auto mr-2'>
                                <p>Height</p>
                                <div className='flex flex-row justify-between'>
                                    <p className='text-sm'>{detail.height}m</p>
                                    <Image src={Height} alt='Weight' className='w-[15px] h-[15px] my-auto'></Image>
                                </div>
                            </div>
                            <p className='border-l-[2px]' style={{borderColor: detail.types[0].color}}></p>
                            <div className='my-auto ml-2'>
                                <p>Weight</p>
                                <div className='flex flex-row justify-between'>
                                    <p className='text-sm'>{detail.weight}kg</p>
                                    <Image src={Weight} alt='Weight' className='w-[15px] h-[15px] my-auto'></Image>
                                </div>
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