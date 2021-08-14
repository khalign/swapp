import * as React from 'react'
import {useRecoilState} from "recoil";
import {View, Text, StyleSheet} from "react-native";

import swapi from '../api/swapi'
import {swmovies} from "../store/atoms";

const Movies = () => {
    const [movies, setMovies] = useRecoilState(swmovies);

    const getMovies = async () => {
       const {data} = await swapi.movies()
        setMovies(data.results)
    }

    React.useEffect(()=>{
        getMovies()
    }, [])

    React.useEffect(()=>{
        console.log(movies)
    }, [movies])

    return (
        <View>
            <Text>Here goes SW movies</Text>
        </View>
    )
}

export default Movies

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})