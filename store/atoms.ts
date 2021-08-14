import { atom } from 'recoil';

export const swmovies = atom<any>({
    key: 'swmovies',
    default: []
})