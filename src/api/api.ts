import {User} from "../models/User";
import {Delete, Get, Patch, Post, Put} from "./fetch";
import {Country} from "../models/Country";

const BaseURL = process.env.REACT_APP_BASE_URL;
export const Users = {
    getList: () => Get<User[]>(`${BaseURL}/users`),
    update: (user: User) => Patch<User, User>(`${BaseURL}/users?email=eq.${user.email}`, user),
    delete: (user: User) => Delete<Response>(`${BaseURL}/users/${user.email}`),
    create: (user: User) => Post<User, User>(`${BaseURL}/users`, user),
    get: (user: string) => Get<[User]>(`${BaseURL}/users?email=eq.${user}`).then(res => res.length > 0?res[0]:undefined)
}

export const Countries = {
    getList: () => Get<Country[]>(`${BaseURL}/country`)
}