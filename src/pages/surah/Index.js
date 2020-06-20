import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet, Button } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

class Surah extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomorSurah: this.props.route.params.nomorSurah,
            versesName: this.props.route.params.versesName,
            verses: [],
            isLoading: true
        }
    }

    componentDidMount = () => {
        try {
            fetch(`https://al-quran-8d642.firebaseio.com/surat/${this.state.nomorSurah}.json`)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        verses: json,
                        isLoading: false
                    })
                    console.log(this.state.verses)
                })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <ScrollView style={{flex:1, backgroundColor: '#fff'}}>

                <SkeletonContent
                    containerStyle={styles.container}
                    isLoading={false}
                    // layout={[
                    //     { key: 'someId', width: 220, height: 20, marginBottom: 6 },
                    //     { key: 'someOtherId', width: 180, height: 20, marginBottom: 6 }
                    // ]}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View>
                                <Text style={styles.surah}>{this.state.versesName}</Text>
                            </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    </View>

                    <FlatList
                        data={this.state.verses}

                        renderItem={
                            ( {item} ) => 
                                <View style={styles.surah}>
                                    <Text style={styles.verses}>{item.ar}</Text>
                                    <Text style={styles.translate}>{item.nomor + '. ' + item.id}</Text>
                                </View>
                        }
                    />

                </SkeletonContent>
                
            </ScrollView>
        );
    }
}

export default Surah;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },

    surah: {
        fontSize: 30, 
        textAlign: 'center', 
    },

    verses: {
        fontSize: 25, padding: 15
    },
    
    translate: {
        padding: 15,
        textAlign: 'justify',
        fontSize: 18,
        borderBottomWidth: 0.5,
        borderColor:'black',
    },
})