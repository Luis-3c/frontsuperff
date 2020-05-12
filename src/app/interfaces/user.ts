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
