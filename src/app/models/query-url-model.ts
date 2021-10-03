export interface QueryUrlModel {
    baseAction: 'search' | 'trending' | 'discover' | 'person' | 'movie' | 'tv' | string,
    mediaType: 'multi' | 'movie/day' | 'all/day' | 'tv/day' | 'popular' | string,
    language: string,
    query?: string,
    append?: string,
    page?: number
}
