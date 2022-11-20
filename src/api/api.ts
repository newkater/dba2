import {User} from "../models/User";
import {Delete, Get, Patch, Post, Put} from "./fetch";
import {Country} from "../models/Country";
import {Discover} from "../models/Discover";
import {Disease} from "../models/Disease";

const BaseURL = process.env.REACT_APP_BASE_URL;
export const Users = {
    getList: () => Get<User[]>(`${BaseURL}/users`),
    update: (user: User) => Patch<User, User>(`${BaseURL}/users?email=eq.${user.email}`, user),
    delete: (user: User) => Delete<Response>(`${BaseURL}/users/${user.email}`),
    create: (user: User) => Post<User, User>(`${BaseURL}/users`, user),
    get: (user: string) => Get<[User]>(`${BaseURL}/users?email=eq.${user}`).then(res => res.length > 0 ? res[0] : undefined)
}

export const Countries = {
    getList: () => Get<Country[]>(`${BaseURL}/country`)
}

export const Diseases = {
    getList: () => Get<Disease[]>(`${BaseURL}/disease`)
}

export const Discovers = {
    getList: () => Get<Discover[]>(`${BaseURL}/discover`),
    update: (discover: Discover) => Patch<Discover, Discover>(`${BaseURL}/discover?cname=eq.${discover.cname}&disease_code=eq.${discover.disease_code}`, discover),
    create: (discover: Discover) => Post<Discover, Discover>(`${BaseURL}/discover`, discover),
    get: (cname: string, disease_code: string) => Get<[Discover]>(`${BaseURL}/discover?disease_code=eq.${disease_code}&cname=eq.${cname}`).then(res => res.length > 0 ? res[0] : undefined)
}