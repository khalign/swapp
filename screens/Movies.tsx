import * as React from 'react'
import {useRecoilState} from "recoil";
import {StackScreenProps} from "@react-navigation/stack";
import {View, FlatList, Text, StyleSheet} from "react-native";

import ListItem from "../components/ListItem";

import swapi from '../api/swapi'
import {swmovies} from "../store/atoms";
import Colors from "../constants/Colors";

import {RootStackParamList} from "../types";
type Props = StackScreenProps<RootStackParamList, 'Movies'>;

const Movies = ({navigation}: Props) => {
    const [movies, setMovies] = useRecoilState(swmovies);

    const getMovies = async () => {
       const {data} = await swapi.movies()
        setMovies(data.results)
    }

    React.useEffect(()=>{
        getMovies()
    }, [])

    const renderMovie = ({item, index}) => {
        const {title, episode_id, release_date} = item

        return (
            <ListItem key={index} title={title} episode_id={episode_id} release_date={release_date} onPress={()=>navigation.navigate('MovieDetails', {item})} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.filters}>
                <Text style={{flex: 1}}>Title</Text>
                <Text style={{flex: 0, marginRight: 15}}>Episode</Text>
                <Text style={{flex: 0}}>Year</Text>
            </View>

            {movies.length > 0 &&
                <FlatList
                    data={movies}
                    renderItem={renderMovie}
                    keyExtractor={item => item.title}
                />
            }
        </View>
    )
}

export default Movies

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.sw.grey
    },
    filters: {
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
    }
})