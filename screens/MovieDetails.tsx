import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";

import ListItem from "../components/ListItem";

import swapi from "../api/swapi";

import {RootStackParamList} from "../types";
type Props = StackScreenProps<RootStackParamList, 'MovieDetails'>;

const MovieDetails = ({navigation, route}: Props) => {
    React.useEffect(()=> {
        console.log(route.params)
    }, [])
    return (
        <View>
            <Text>Movie Details</Text>
        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {

    }
})