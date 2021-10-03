export interface CbResponse {
    'total_results': number
}

export interface CbFunction {
    (res: CbResponse): void;
}
