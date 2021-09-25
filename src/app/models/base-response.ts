export interface BaseRes {
    adult?: boolean
    backdrop_path: string
    first_air_date?: string
    release_date?: string
    genre_ids: number[]
    id: number
    media_type: string
    name?: string
    title?: string
    origin_country: string[]
    original_language: string
    original_name?: string
    original_title?: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count?: number
}
