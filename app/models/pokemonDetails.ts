import {PokemonDetailsResponse, PokemonType} from "@/app/api/pokemon-api/models/response/pokemonDetails.response";
import {typeColorMap} from "@/app/constant/type";
import {dmToM, hgToKg} from "@/app/helper/metricHelper";
import {capitalize} from "@/app/helper/stringHelper";

interface Type {
    name: string;
    color: string
}

export class PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<Type>;
    sprite: string;

    constructor(id: number, name: string, height: number, weight: number, types: Array<Type>, sprite: string) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.types = types;
        this.sprite = sprite;
    }

    public static buildFrom(apiResponse: PokemonDetailsResponse): PokemonDetails {
        return new PokemonDetails(
            apiResponse.id,
            capitalize(apiResponse.name),
            dmToM(apiResponse.height),
            hgToKg(apiResponse.weight),
            this.extractTypesAndColors(apiResponse.types),
            apiResponse.sprites.front_default
        )
    }

    private static extractTypesAndColors(types: Array<PokemonType>): Array<Type> {
        const tcMap: Array<Type> = []

        types.forEach(type => {
            tcMap.push({name: capitalize(type.type.name), color: typeColorMap.get(type.type.name) || ''} as Type);
        })

        return tcMap;
    }
}