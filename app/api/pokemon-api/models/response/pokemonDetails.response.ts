export interface PokemonDetailsResponse {
    id: number,
    height: number,
    weight: number,
    name: string,
    sprites: Sprites,
    types: Array<PokemonType>
}

export interface PokemonType {
    type: Type
}

interface Type {
    name: string
}

export interface Sprites {
    'front_default' : string
}