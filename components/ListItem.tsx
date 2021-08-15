import * as React from "react";
import {View, Pressable, PressableProps, Text, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

type ItemProps = PressableProps & Text['props'] & {
    title: string
    episode_id: number
    release_date: string
}

const ListItem = ({title, episode_id, release_date, ...otherProps}: ItemProps) => (
    <Pressable style={styles.movie} {...otherProps}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.episode}>{episode_id}</Text>
        <Text style={styles.year}>{release_date.substr(0, 4)}</Text>
    </Pressable>
)

export default ListItem

const styles = StyleSheet.create({
    movie: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: Colors.sw.black,
        borderRadius: 6,
    },
    title: {
        flex: 1,
        color: Colors.sw.white
    },
    episode: {
        flex: 0,
        marginRight: 30,
        color: Colors.sw.white,
    },
    year: {
        flex: 0,
        color: Colors.sw.white,
    }
})