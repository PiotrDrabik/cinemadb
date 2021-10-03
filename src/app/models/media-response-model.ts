export interface CastMediaModel {
    adult: boolean
    cast_id?: number
    character: string
    credit_id?: string
    gender: number
    id: number
    known_for_department?: string
    name: string
    order: number
    original_name?: string
    popularity: number
    profile_path: string
}

export interface CreditsMediaModel {
    cast: CastMediaModel[]
    crew: object[]
}

export interface GenresMediaModel {
    id: number
    name: string
}

export interface VideosMediaModel {
    results: {
        id: string
        key: string
        site: string
    }[]
}

export interface SeasonsMediaModel {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
}

export interface NetworkMediaModel {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface MediaResponseModel {
    adult?: boolean
    backdrop_path: string
    belongs_to_collection?: object
    budget: number
    first_air_date?: string
    genres: GenresMediaModel[]
    credits: CreditsMediaModel
    homepage: string
    id: number
    imdb_id: string
    last_air_date?: string
    name?: string
    networks: NetworkMediaModel[]
    number_of_episodes: number
    number_of_seasons: number
    original_language?: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies?: object[]
    production_countries?: object[]
    release_date: string
    revenue: number
    runtime?: number
    seasons: SeasonsMediaModel[]
    spoken_languages: object[]
    status?: string
    tagline: string
    title?: string
    video?: boolean
    videos: VideosMediaModel
    vote_average: number
}
