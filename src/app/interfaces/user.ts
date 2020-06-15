export interface User {
    id?: number,
    first_name: String,
    last_name: String,
    email: String,
    email_confirmed?: boolean,
    password: String,
    pic?: String,
    twitter?: String,
    born_date: String,
    idcategory?: number,
    idsubscription?: number,
    idrole?: number
}

export interface userDataLogin{
    first_name: string,
    last_name: string,
    email: string,
    accessToken: string,
    expiresIn: string
}

export interface userSignIn{
    email: String,
    password: String
}

export interface userInfo {
    first_name: string,
    last_name: string,
    email: string
}

export interface userEmail {
    email: string;
}

export interface userResetPass{
    password: string;
}
