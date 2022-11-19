import {User} from "../models/User";
import {Delete, Get, Post, Put} from "./fetch";

const BaseURL = "http://localhost:3002";
export const Users = {
    getList: () => Get<User[]>(`${BaseURL}/users`),
    update: (user: User) => Put<User, User>(`${BaseURL}/users/${user.email}`, user),
    delete: (user: User) => Delete<Response>(`${BaseURL}/users/${user.email}`),
    create: (user: User) => Post<User, User>(`${BaseURL}/users/${user.email}`, user),
    get: (user: string) => Get<User>(`${BaseURL}/users/${user}`)
}