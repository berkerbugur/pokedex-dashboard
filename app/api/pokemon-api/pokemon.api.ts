import axios, {AxiosInstance} from "axios";
import {pokeApiUrl} from "@/app/constant/url";
import {PokemonListItemResponse} from "@/app/api/pokemon-api/models/response/pokemonListItem.response";
import {PokemonDetailsResponse} from "@/app/api/pokemon-api/models/response/pokemonDetails.response";


const getPokeList = 'api/v2/pokemon?limit=20'
const getPokeDetails = 'api/v2/pokemon/'

export class PokemonApi {
    api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: pokeApiUrl
        });
    }

    public async getPokemonList(): Promise<Array<PokemonListItemResponse>> {
        return await this.api.get(getPokeList)
            .then(resp => {
                return resp.data?.results || []
            })
            .catch(err => {
                console.log('PokemonApi.getPokemonList ERROR - Something not cool happened: ' + err);
                return []
            })
    }

    public async getPokemonDetails(name: string): Promise<PokemonDetailsResponse> {
        return await this.api.get(getPokeDetails + name).then(resp => {
                return resp.data || null
            }
        ).catch(err => {
            console.log('PokemonApi.getPokemonDetails ERROR - Something not cool happened: ' + err);
            return null
        })
    }
}