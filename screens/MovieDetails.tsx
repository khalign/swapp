import * as React from "react";
import {useRecoilState} from "recoil";
import {View, Text, StyleSheet} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";

import swapi from "../api/swapi";
import {swpeople, swspecies} from "../store/atoms";

import ListItem from "../components/ListItem";
import {MonoText} from "../components/StyledText";

import {RootStackParamList} from "../types";
type Props = StackScreenProps<RootStackParamList, 'MovieDetails'>;

const MovieDetails = ({navigation, route}: Props) => {
    const {title, episode_id, release_date, characters} = route.params.item
    const [people, setPeople] = useRecoilState(swpeople)
    const [species, setSpecies] = useRecoilState(swspecies)

    const checkCharacters = async () => {
      characters.slice(0, 5).map((url: string) => {
          people[url] ? checkSpecies(people[url].specie) : getPeople(url)
      })
    }

    const checkSpecies = async (url: string) => {
        !species[url] && getSpecies(url);
    }

    const getPeople = async (url: string) => {
      const {data} = await swapi.people(getIdFromUrl(url))
        const {name, gender,species} = data
        setPeople((old: object) => ({...old, [url]: {name, gender, specie:species[0]}}))
        checkSpecies(species[0])
    }

    const getSpecies = async (url: string) => {
        const {data} = await swapi.species(getIdFromUrl(url))
        setSpecies((old: object) => ({...old, [url]: {name: data.name}}))
    }

    const getIdFromUrl = (url:string) => {
        const temp = url.split('/')
        return  temp[temp.length -2]
    }

    React.useEffect(()=> {
        checkCharacters()
    }, [])

    return (
        <View>
            <ListItem title={title} episode_id={episode_id} release_date={release_date} />

            <MonoText style={styles.mono}>Top 5 Characters</MonoText>

            <View>
                {
                    characters.slice(0, 5).map((url: string)=> {
                        if (people[url]) {
                            const {name, gender, specie} = people[url]
                            return people[url] && (
                                <View key={url} style={styles.people}>
                                    <MonoText style={{flex: 1}}>{name}</MonoText>
                                    <MonoText style={{flex: 0, marginHorizontal: 30}}>{gender}</MonoText>
                                    <MonoText style={{flex: 0}}>{species[specie]?.name}</MonoText>
                                </View>
                            )
                        }
                    })
                }
            </View>
        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {

    },
    mono: {
        margin: 20,
        textAlign: 'center'
    },
    people: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})