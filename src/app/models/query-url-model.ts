export interface QueryUrlModel {
    baseAction: string,
    mediaType: string
    language: string,
    query?: string,
    append?: string,
    page?: number
}
