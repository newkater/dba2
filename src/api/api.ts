import {User} from "../models/User";
import {Delete, Get, Patch, Post, Put} from "./fetch";
import {Country} from "../models/Country";
import {Discover} from "../models/Discover";
import {Disease} from "../models/Disease";
import {DiseaseType} from "../models/DiseaseType";
import {Doctor} from "../models/Doctor";
import {PublicServant} from "../models/PublicServant";

const BaseURL = process.env.REACT_APP_BASE_URL;

export const Users = {
    getList: () => Get<User[]>(`${BaseURL}/users`),
    update: (user: User) => Patch<User, User>(`${BaseURL}/users?email=eq.${user.email}`, user),
    delete: (user: User) => Delete<Response>(`${BaseURL}/users?email=eq.${user.email}`),
    create: (user: User) => Post<User, User>(`${BaseURL}/users`, user),
    get: (user: string) => Get<[User]>(`${BaseURL}/users?email=eq.${user}`).then(res => res.length > 0 ? res[0] : undefined)
}

export const Doctors = {
    getList: () => Get<Doctor[]>(`${BaseURL}/doctor`),
    update: (doctor: Doctor) => Patch<Doctor, Doctor>(`${BaseURL}/doctor?email=eq.${doctor.email}`, doctor),
    delete: (doctor: Doctor) => Delete<Response>(`${BaseURL}/doctor?email=eq.${doctor.email}`),
    create: (doctor: Doctor) => Post<Doctor, Doctor>(`${BaseURL}/doctor`, doctor),
    get: (doctor: string) => Get<[Doctor]>(`${BaseURL}/doctor?email=eq.${doctor}`).then(res => res.length > 0 ? res[0] : undefined)
}

export const PublicServants = {
    getList: () => Get<PublicServant[]>(`${BaseURL}/publicservant`),
    update: (publicservant: PublicServant) => Patch<PublicServant, PublicServant>(`${BaseURL}/publicservant?email=eq.${publicservant.email}`, publicservant),
    delete: (publicservant: PublicServant) => Delete<Response>(`${BaseURL}/publicservant?email=eq.${publicservant.email}`),
    create: (publicservant: PublicServant) => Post<PublicServant, PublicServant>(`${BaseURL}/publicservant`, publicservant),
    get: (publicservant: string) => Get<[PublicServant]>(`${BaseURL}/publicservant?email=eq.${publicservant}`).then(res => res.length > 0 ? res[0] : undefined)
}

export const Countries = {
    getList: () => Get<Country[]>(`${BaseURL}/country`),
    delete: (country: Country) => Delete<Response>(`${BaseURL}/country?cname=eq.${country.cname}`),
    update: (country: Country) => Patch<Country, Country>(`${BaseURL}/country?cname=eq.${country.cname}`, country),
    get: (country: string) => Get<[Country]>(`${BaseURL}/country?cname=eq.${country}`).then(res => res.length > 0 ? res[0] : undefined),
    create: (country: Country) => Post<Country, Country>(`${BaseURL}/country`, country),
}

export const Diseases = {
    getList: () => Get<Disease[]>(`${BaseURL}/disease`),
    delete: (disease: Disease) => Delete<Response>(`${BaseURL}/disease?disease_code=eq.${disease.disease_code}`),
    update: (disease: Disease) => Patch<Disease, Disease>(`${BaseURL}/disease?disease_code=eq.${disease.disease_code}`, disease),
    get: (disease: string) => Get<[Disease]>(`${BaseURL}/disease?disease_code=eq.${disease}`).then(res => res.length > 0 ? res[0] : undefined),
    create: (disease: Disease) => Post<Disease, Disease>(`${BaseURL}/disease`, disease),
}

export const Discovers = {
    getList: () => Get<Discover[]>(`${BaseURL}/discover`),
    delete: (discover: Discover) => Delete<Response>(`${BaseURL}/discover?cname=eq.${discover.cname}&disease_code=eq.${discover.disease_code}`),
    update: (discover: Discover) => Patch<Discover, Discover>(`${BaseURL}/discover?cname=eq.${discover.cname}&disease_code=eq.${discover.disease_code}`, discover),
    create: (discover: Discover) => Post<Discover, Discover>(`${BaseURL}/discover`, discover),
    get: (cname: string, disease_code: string) => Get<[Discover]>(`${BaseURL}/discover?disease_code=eq.${disease_code}&cname=eq.${cname}`).then(res => res.length > 0 ? res[0] : undefined)
}

export const DiseaseTypes = {
    getList: () => Get<DiseaseType[]>(`${BaseURL}/diseasetype`).then(res => res.sort((a, b) => {
        return a.id - b.id;
    })),
    delete: (diseasetype: DiseaseType) => Delete<Response>(`${BaseURL}/diseasetype?id=eq.${diseasetype.id}`),
    update: (diseasetype: DiseaseType) => Patch<DiseaseType, DiseaseType>(`${BaseURL}/diseasetype?id=eq.${diseasetype.id}`, diseasetype),
    get: (diseasetype: number) => Get<[DiseaseType]>(`${BaseURL}/diseasetype?id=eq.${diseasetype}`).then(res => res.length > 0 ? res[0] : undefined),
    create: (diseasetype: DiseaseType) => Post<DiseaseType, DiseaseType>(`${BaseURL}/diseasetype`, diseasetype),
}