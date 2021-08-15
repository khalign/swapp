import ai from '../plugins/axios'

export default {
    movies: () => ai.get('films'),
    people: (id: string) => ai.get(`people/${id}`),
    species: (id: string) => ai.get(`species/${id}`)
};