
export type ResponseResult<T> = {
    data?: T;
    error?: { message: string };
}