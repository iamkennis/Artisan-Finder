export interface RegisterDto {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    state: string,
    account: string
}


export interface LoginDto{
    id: string,
    email: string,
    password: string,
}