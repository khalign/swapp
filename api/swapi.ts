import ai from '../plugins/axios'

export default {
    movies: () => ai.get('films'),
    people: () => ai.get('people')
};