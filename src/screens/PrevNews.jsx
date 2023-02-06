import { FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_KEY from '../../key'

const PrevNews = () => {
    const [latestNews, setLatestNews] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setRefreshing(true);
        axios.get(`https://newsapi.org/v2/everything?q=sport&from=2023-02-04&sortBy=popularity&apiKey=${API_KEY}`).then(response => {
            setLatestNews(response.data.articles)
            setRefreshing(false);
        }).catch(error => {
            console.error(error);
            setRefreshing(false);
        })
    }

    const onRefresh = () => {
        fetchData();
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={latestNews}
                keyExtractor={(item) => latestNews.indexOf(item)}
                renderItem={({ item }) => (
                    <View style={styles.listContainer}>
                        <Text style={styles.listTitle}>{item.title}</Text>
                        <View style={styles.listImgContainer}>
                            <Image style={styles.listImg} source={{ uri: item.urlToImage }} />
                        </View>
                        <Text style={styles.listDesc}>{item.description}</Text>
                    </View>
                )}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    )
}

export default PrevNews

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        // borderWidth: 2,
        // borderColor: "black"
        padding: 10
    },
    listContainer: {
        // borderWidth: 1,
        // borderColor: "red"
        marginBottom: "10%",
        backgroundColor: "#C7C7F5",
        borderRadius: 10,
        padding: 10
    },
    listTitle: {
        // borderWidth: 2,
        // borderColor: "yellow"
        fontWeight: "bold",
        fontSize: 16
    },
    listImgContainer: {
        // borderWidth: 2,
        // borderColor: "green",
        height: 400,
        width: "100%",
    },
    listImg: {
        height: undefined,
        aspectRatio: 1,
        // width: "100%",
        resizeMode: "contain"
    },
    listDesc: {}
})