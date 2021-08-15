import { atom } from 'recoil';

export const swmovies = atom<any>({
    key: 'swmovies',
    default: []
});

export const swpeople = atom<any>({
    key: 'swpeople',
    default: {}
})

export const swspecies = atom<any>({
    key: 'swspecies',
    default: {}
})